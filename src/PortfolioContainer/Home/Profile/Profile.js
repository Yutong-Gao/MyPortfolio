import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
import { useTypewriter } from "react-simple-typewriter";

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Java Developer",
      "React/React Native Developer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon"></div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Yutong Gao</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1> {typeEffect + "."}</h1>
              <span className="profile-role-tagline">
                Knack of building application with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Contact me{" "}
            </button>
            <a href="YutongGao_resume.pdf" download="YutongGao_resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
