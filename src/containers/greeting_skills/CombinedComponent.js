import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./CombinedComponent.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, greeting, skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function CombinedComponent() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting && !skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"}>
      <div className="combined-container">
        {greeting.displayGreeting && (
          <Fade bottom duration={1000} distance="40px">
            <div className="greet-main" id="greeting">
              <div className="greeting-main">
                <div className="greeting-text-div">
                  <div>
                    <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                      {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
                    </h1>
                    <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                      {greeting.subTitle}
                    </p>
                    <div id="resume" className="empty-div"></div>
                    <SocialMedia />
                    <div className="button-greeting-div">
                      <Button text="Contact me" href="#contact" />
                      {greeting.resumeLink && (
                        <a
                          href={require("./resume.pdf")}
                          download="Resume.pdf"
                          className="download-link-button"
                        >
                          <Button text="Download my resume" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        )}

        {skillsSection.display && (
          <Fade right duration={1000}>
            <div id="skills" className="skills-main-div">
              <div className="skills-text-div">
                <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
                  {skillsSection.title}
                </h1>
                <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
                  {skillsSection.subTitle}
                </p>
                <SoftwareSkill />
                <div>
                  {skillsSection.skills.map((skills, i) => {
                    return (
                      <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                        {skills}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
}
