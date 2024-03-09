from flask import Flask, request, jsonify, render_template_string
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000/dashboard/learningpath/started"}})
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Download NLTK resources
nltk.download('punkt')
nltk.download('stopwords')

# Read data from CSV file
data1 = pd.read_csv("d:/Web page/Students-Dashbord/my-app/api/converted_file (1).csv")
# Combine relevant columns for text preprocessing
data1 = data1.drop(["Unnamed: 4", "Unnamed: 6"], axis=1).dropna()
data1["combined_features"] = data1["Title"] + " " + data1["Keywords"]

# Define text preprocessing function
def preprocess_text(text):
    # Convert text to lowercase
    text = text.lower()
    # Tokenization
    tokens = word_tokenize(text)
    # Removing stopwords
    stop_words = set(stopwords.words('english'))
    filtered_tokens = [word for word in tokens if word not in stop_words]
    return ' '.join(filtered_tokens)

# Preprocess and update dataset before computing similarity
@app.route('/api/data', methods=['GET', 'POST'])
def index():
    recommendations = {}

    if request.method == 'POST':
        current_interest = request.json.get('interested_course')
        # current_interest = request.form['interested_course']
        # Create a new row based on user input
        new_row = pd.DataFrame({"Title": [current_interest], "Keywords": [""], "combined_features": [preprocess_text(current_interest)]})
        global data1
        data1 = pd.concat([new_row, data1]).reset_index(drop=True)
        recommendations = generate_recommendations(current_interest)
        print(f"Type of recommendations: {type(recommendations)}")
        return jsonify(recommendations)
    return render_template_string("""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Course Recommendations</title>
        </head>
        <body>
            <h1>Course Recommendations</h1>
            
            <form action="/api/data" method="post">
                <label for="interested_course">Enter your interested course:</label><br>
                <input type="text" id="interested_course" name="interested_course"><br><br>
                <input type="submit" value="Submit">
            </form>

            {% for index, recommendation in recommendations.items() %}
                <h2>Recommendations for {{ recommendation['level'] }}</h2>
                <ul>
                {% for item in recommendation['courses'] %}
                    <li>{{ item }}</li>
                {% endfor %}
                {% for item in recommendation['projects'] %}
                    <li>{{ item }}</li>
                {% endfor %}
                </ul>
            {% endfor %}

        </body>
        </html>
    """, recommendations=recommendations)

def generate_recommendations(current_interest):
    recommendations = {}

    # Compute count matrix
    cv = CountVectorizer()
    count_matrix = cv.fit_transform(data1["combined_features"])
    # Compute cosine similarity
    similarity = cosine_similarity(count_matrix)

    # Retrieve index of current interest
    idx = data1[data1["Title"] == current_interest].index[0]
    # Get similarity scores for current interest
    similar_courses = list(enumerate(similarity[idx]))
    # Sort similar courses based on similarity scores
    sorted_recommendations = sorted(similar_courses, key=lambda x: x[1], reverse=True)

    # Initialize dictionaries to store top recommendations for each difficulty level
    top_courses_by_level = {"Beginner": [], "Medium": [], "Advanced": []}
    top_projects_by_level = {"Beginner": [], "Medium": [], "Advanced": []}

    # Iterate through sorted recommendations and populate top recommendations by level
    i = 0
    while True:
        index1 = sorted_recommendations[i][0]
        level = data1["Level"].loc[index1]

        # Check if level is not NaN
        if isinstance(level, str):
            if data1["Type"].loc[index1] == "Course":
                if len(top_courses_by_level[level]) < 5:
                    top_courses_by_level[level].append(data1["Title"].loc[index1])
            else:
                if len(top_projects_by_level[level]) < 5:
                    top_projects_by_level[level].append(data1["Title"].loc[index1])

            # Break the loop if we have top 5 recommendations for each level in both courses and projects
            if all(len(top_courses_by_level[level]) >= 5 for level in top_courses_by_level) and \
               all(len(top_projects_by_level[level]) >= 5 for level in top_projects_by_level):
                break

        i += 1

    # Add courses to recommendations dictionary
    for index, (level, courses) in enumerate(top_courses_by_level.items()):
        recommendations[index] = {"level": level, "courses": courses}

    # Add projects to recommendations dictionary
    for index, (level, projects) in enumerate(top_projects_by_level.items(), start=len(top_courses_by_level)):
        recommendations[index] = {"level": level, "projects": projects}

    return recommendations
    
if __name__== '__main__':
    app.run(host='0.0.0.0', debug=True)