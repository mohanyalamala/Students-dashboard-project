import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight  } from "@fortawesome/free-solid-svg-icons";

const Peculier = () => {
    return (
        <div className="peculiars">
            <div className="getstarted-flex">
            <ul>
                <li><h1 className="peculiar">
                We're a peculiar bunch of people with a passion for branding
                </h1>
                <span className="creates">Empowering digital product leaders</span>
                <span className="creates">
                We create and deliver data-driven customer 
                experiences that achieve extraordinary outcomes.
                 Our specialties are in strategy, UX design, UI design,
                  iOS and Android mobile app development and web development.
                  </span></li>
                <Link to=""><button className="buttongets" id="buttongets">Learn More
                <FontAwesomeIcon icon={faArrowRight} className="faArrowRight" />
                </button></Link>
                </ul>
                <div className="brz-css-v83gu">
  <picture className="brz-picture brz-d-block brz-p-relative brz-css-v83gu">
    <source
      srcSet="https://cloud-1de12d.b-cdn.net/media/iW=536&iH=538&oX=0&oY=0&cW=536&cH=538/18abdf781d84f13d5f19618e760c52d3/image.jpg 1x, https://cloud-1de12d.b-cdn.net/media/iW=1072&iH=1076&oX=0&oY=0&cW=1072&cH=1076/18abdf781d84f13d5f19618e760c52d3/image.jpg 2x"
      media="(min-width: 992px)"
    />
    <source
      srcSet="https://cloud-1de12d.b-cdn.net/media/iW=342&iH=343&oX=0&oY=0&cW=342&cH=343/18abdf781d84f13d5f19618e760c52d3/image.jpg 1x, https://cloud-1de12d.b-cdn.net/media/iW=684&iH=686&oX=0&oY=0&cW=684&cH=686/18abdf781d84f13d5f19618e760c52d3/image.jpg 2x"
      media="(min-width: 768px)"
    />
    <img
      className="brz-img-projects"
      srcSet="https://cloud-1de12d.b-cdn.net/media/iW=430&iH=432&oX=0&oY=0&cW=430&cH=432/18abdf781d84f13d5f19618e760c52d3/image.jpg 1x, https://cloud-1de12d.b-cdn.net/media/iW=860&iH=864&oX=0&oY=0&cW=860&cH=864/18abdf781d84f13d5f19618e760c52d3/image.jpg 2x"
      src="https://cloud-1de12d.b-cdn.net/media/iW=536&iH=538&oX=0&oY=0&cW=536&cH=538/18abdf781d84f13d5f19618e760c52d3/image.jpg"
      alt=""
      draggable="false"
      loading="lazy"
    />
  </picture>
</div>
  </div>
  </div>
    )
}

export default Peculier;