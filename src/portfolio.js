/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Miller Watson",
  title: "Hi, I'm Miller",
  subTitle: "Creating Impactful Software Solutions",
  resumeLink:
    "https://drive.google.com/file/d/1cw0x2dzQMnpLNq9WXr2l4emk3k0d3tuS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/millerwatson",
  linkedin: "https://www.linkedin.com/in/miller-watson/",
  gmail: "millerwatson2004@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    "Java Enthusiast",
    "Game Designer",
    "Backend Developer",
    "Learning frontend, Unreal Engine, UI/UX Design",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northwestern University",
      logo: require("./assets/images/northwesternLogo.png"),
      subHeader: "Bachelor of Arts in Computer Science",
      duration: "September 2023 - June 2026 (ongoing)",
      desc: "GPA: 3.98",
      descBullets: [
        "Dean’s List all quarters",
        "Took classes in Linear Algebra, Artificial Intelligence, Multivariable Calculus, Algorithmic Analysis",
        "Member of Safe Security, a club focused on creating accessible cybersecurity education materials",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Product Manager and Backend Engineer",
      company: "WorkOdyssey",
      date: "Jan 2024 - Sep 2024",
      desc: "AI-enabled recruitment startup",
      descBullets: [
        "Boosted team productivity by implementing a point system to weight tasks, then assigned tasks based on " +
        "availability relative to point values",
        "Worked in Excel to manage existing customers, roadmaps, and success metrics",
        "Developed and deployed a robust authentication system with 2FA support and secure login",
        "Designed architecture for user and resume data storage using Django models and views"
      ]
    },
    {
      role: "Front-of-House Staff",
      company: "CHIKO Encinitas",
      desc: "Chinese-Korean fusion restaurant based out of Encinitas, CA",
      companylogo: require("./assets/images/chiko-logo.png"),
      date: "Jul 2024 - Sep 2024",
      descBullets: [
        "Ensured customer satisfaction by taking dine-in orders and coordinating timely delivery of to-go orders",
        "Maintained a clean dining area by bussing tables and promptly running food to customers",
        "Stocked all customer-facing stations and regularly checked in to meet customer needs"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/pixelCrops.png"),
      projectName: "Pixel Crops",
      projectDesc: "A simple but relaxing Unity farming game",
      footerLink: [
       {
         name: "Visit GitHub",
         url: "http://www.github.com/millerwatson"
        }
      ]
    },
    {
      image: require("./assets/images/journal_logo.png"),
      projectName: "Metric Journal",
      projectDesc: "A journaling app that analyzes entries to provide metadata about users' lives.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "http://www.github.com/millerwatson"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications",
  subtitle: "",
  achievementsCards: [
    {
      title: "Oracle Certified Associate, Java SE 8",
      subtitle:
        "Industry-certified as a Java programmer.",
      image: require("./assets/images/oca.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to say hi? Send me a message at either of the following:",
  number: "(858) 692-5145",
  email_address: "millerwatson2004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
