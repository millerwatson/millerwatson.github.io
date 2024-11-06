import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            // Add console.log to debug what's being received
            console.log('Skill:', skills.skillName, 'Icon:', skills.fontAwesomeClassname);

            if (skills.fontAwesomeClassname && typeof skills.fontAwesomeClassname === 'string') {
              // Font Awesome icon case
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            } else if (skills.fontAwesomeClassname) {
              // Image case
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img
                    src={skills.fontAwesomeClassname}
                    alt={skills.skillName}
                    className="skill-icon"
                    style={{ width: '40px', height: '40px' }} // Add explicit sizing
                    onError={(e) => {
                      console.error(`Error loading image for ${skills.skillName}:`, e);
                      e.target.style.display = 'none'; // Hide broken images
                    }}
                  />
                  <p>{skills.skillName}</p>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}