import React from "react";
import axios from "axios";

const Data = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Replace with the actual form data
        const formData = {
            role1: event.target.role1.value,
            role2: event.target.role2.value,
            role3: event.target.role3.value,

        };

        try {
            const response = await axios.post('http://localhost:8000/learningpath/started', formData,{
                withCredentials: true, 
            });
            console.log('Response:', response);

            if (response.data.status === 'Success') {
                console.log('Form submitted successfully');
                console.log('Updated User Data:', response.data.data);
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('An error occurred during form submission', error);
            console.error('Error response:', error.response);
        }
    };
    return (
            <div className="datascience1">
            <fieldset>
            <form action="/learningpath/started" method="POST" id="fr" onSubmit={handleSubmit}>
            <h1>Data Science</h1>
        <div>
        <h4 className="role1">Select your Current Role<span>!</span></h4>
            <select name="role1">
                <option >Selected</option>
                <option>developement</option>
            </select>
        </div>
        <div>
        <h4 className="role2">Choose What you alredy Know<span>!</span></h4>
            <select name="role2">
                <option>Selected</option>
                <option>developement</option>
            </select>
        </div>
        <div>
        <h4 className="role3">Choose What you Want to learn<span>!</span></h4>
            <select name="role3">
                <option>Selected</option>
                <option>developement</option>
            </select>
        </div>
        <div>
        <button type="submit" className="selectedform">Submit</button>
        </div>
        </form>
        </fieldset>
        </div>
    )
}

export default Data;