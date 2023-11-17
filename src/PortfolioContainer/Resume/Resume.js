import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = // eslint-disable-line no-unused-vars
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "Node Js", ratingPercentage: 75 },
    { skill: "Mongo Db", ratingPercentage: 85 },
    { skill: "MySQL", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 90 },
    { skill: "Python", ratingPercentage: 80 },
  ];

  const projectDetails = [
    {
      title: "ECommerce Project",
      duration: { fromDate: "2023", toDate: "2023" },
      description: [
        "live on : ",
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          href="https://master--e-commerce-project-yutong.netlify.app/"
          target="_blank"
        >
          https://master--e-commerce-project-yutong.netlify.app/
        </a>,
      ],
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "EVideo Streaming Web-App",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Designed and implemented a full-stack video streaming web application using Spring MVC. Created a responsive user interface with React, utilizing Sass and HTML to improve user experience",
      subHeading: "Technologies Used: React, Node.js, MongoDB, Express (MERN)",
    },
    {
      title: "Child Missing App",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Developed the front-end of a child missing application using Swing and the back-end with Java, utilizing the Swing framework for UI design and MySQL for database management. ",
      subHeading: "Technologies Used: Java, Swing, MySQL",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Northeastern University, Boston, MA"}
        subHeading={"Master of Science, Information Systems"}
        fromDate={"2021"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Southwestern University of Finance and Economics, China"}
        subHeading={
          "Bachelor of Management, Information Management & Information System"
        }
        fromDate={"2017"}
        toDate={"2021"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Full Stack Web Developer"}
        subHeading={"Hwadee Technology Co. Ltd,Chengdu,China"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Collaborated closely with the UI/UX team to translate design
          concepts into a functional web platform for creators to manage the
          upscale the marketing
        </span>
        <br />
        <span className="resume-description-text">
          - Developed a responsive, JavaScript-based website utilizing HTML and
          CSS for an intuitive frontend experience.
        </span>
        <br />
        <span className="resume-description-text">
          - Implemented the React framework, adhering to the MVC design pattern
          to ensure a modular and scalable application architecture
        </span>
        <br />

        <span className="resume-description-text">
          - Designed and integrated CRUD functionalities for the MySQL database,
          ensuring secure and efficient data storage and retrieval
        </span>
        <br />
        <span className="resume-description-text">
          - Worked collaboratively with the development teams using Agile
          methodologies (Atlassian JIRA) to ensure timely delivery of
          high-quality features
        </span>
        <br />
        <span className="resume-description-text">
          - Participated in the end-to-end implementation and deployment of the
          system which helped clients to manage and publish report saving 20 hrs
          of manual effort weekly
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 600;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
        onClick={() => handleCarousal(index)}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops,,, no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffSetStyle.style}
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
