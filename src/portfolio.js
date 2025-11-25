/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "yuhanhuang0211",
  title: "Hi! I'm YuHan",
  subTitle: emoji(
    "A passionate learner with international research experience 🚀"
  ),
  /* 準備好簡歷後再更新連結上來 */
  /* resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  */
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/isyuhann", // 已更新為 isyuhann
  linkedin: "https://www.linkedin.com/in/%E9%9B%A8%E6%B6%B5-%E9%BB%83-4a58a42a6/",
  gmail: "isyuhann@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "EAGER TO FILL UP ALL MY SCHEDULE, WITH ACTIVITIES & PROJECTS & COMPETITIONS & COURSES & VOLUNTEERING.",
  skills: [
    emoji(
      "⚡ Currently Exploring My Possibility in Digital Marketing and Full-stack Development"
    ),
    emoji(
      "⚡ My goal is to Become a Versatile Professional Who Creates Both Personal and Social Value"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "National Taipei University",
      logo: require("./assets/images/ntpulogo.png"),
      subHeader: "Bachelor of Accounting",
      duration: "September 2023 - Present",
      desc: "Focusing on the intersection of Technology, Marketing, and Business. Active in entrepreneurship competitions.",
      descBullets: [
        "GDG on Campus NTPU - Co-Lead (Present): Leading a core team of 20 members, organizing events with 60+ avg attendees. Total community participation reached 6,600+.",
        "GDG on Campus NTPU - Marketing Core (Past): Managed brand promotion and social media, driving 258% follower growth.",
        "Ranked high in academic performance during the first year."
      ]
    },
    {
      schoolName: "Kinmen Senior High School",
      logo: require("./assets/images/kmshlogo.png"),
      subHeader: "General Stream",
      duration: "September 2020 - June 2023",
      desc: "Active in scientific research and extracurricular activities.",
      descBullets: [
        "NASA GLOBE Program: Represented Taiwan at the Asia-Pacific Regional Meeting as a distinguished guest speaker.",
        "NASA GLOBE Program IVSS: Achieved full score in biology field research.",
        "Photography Club: Activity Officer (Helped the club become the 3rd largest in school).",
        "Biology Research Club: Treasurer & Vice President."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Administration",
      progressPercentage: "80%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "60%"
    },
    {
      Stack: "Digital Marketing",
      progressPercentage: "35%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Experience section

const Experiences = {
  display: true,
  experience: [
    {
      role: "Volunteer / Marketing PM",
      company: "Google Developer Groups (GDG) Taipei",
      companylogo: require("./assets/images/gdg_logo.png"),
      date: "Nov 2024 – Present",
      desc: "Active contributor to the largest developer community in Taipei.",
      descBullets: [
        "DevFest Taipei 2024: Served as Marketing PM. Managed promotion schedule, copywriting, and social media ads, contributing to 1,029 registrations.",
        "DevFest Taipei 2025: Currently serving as Marketing Lead, overseeing the marketing framework and team coordination.",
        "Gained practical experience in digital marketing and connected with industry professionals."
      ]
    },
    {
      role: "Administrative Assistant",
      company: "National Taipei University (Student Affairs)",
      companylogo: require("./assets/images/ntpulogo.png"),
      date: "Feb 2024 – Present",
      desc: "Assisting the Student Housing Service Division with administrative operations.",
      descBullets: [
        "Handled document submission, inquiry responses, and event support.",
        "Executed data digitization and managed office correspondence (phone/mail).",
        "Maintained office environment and supported ad-hoc administrative tasks."
      ]
    },
    {
      role: "Administrative Assistant",
      company: "Kinmen County Government (Social Affairs)",
      companylogo: require("./assets/images/kinmen_logo.jpg"),
      date: "Jul 2023 – Sep 2023",
      desc: "Summer internship assisting the Social Welfare Section.",
      descBullets: [
        "Assisted with official document dispatch, filing, and mail handling.",
        "Served as a contact window for external inquiries.",
        "Supported general office administration and environment maintenance."
      ]
    }
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
  title: "Big Projects",
  subtitle: "Side Projects & Contributions to Open Source during My Free Time in College",
  projects: [
    {
      image: require("./assets/images/lawhelperlogo.png"),
      projectName: "NTPU LawHelper",
      projectDesc: "Using LLM model to assist students in solving questions about campus regulations.",
      footerLink: [
        {
          name: "Under Development",
          // url: "" 
        }
      ]
    },
    {
      image: require("./assets/images/avatar.jpg"),
      projectName: "Stock Bot (股往今 LINE)",
      projectDesc: "Integrated Gemini via LINE Bot for real-time stock queries, trend charting, and news summarization.",
      footerLink: [
        {
          name: "View Demo",
          url: "#" // 如果有 Demo 影片或 Repo 連結可以填在這裡
        }
      ]
    },
    {
      image: require("./assets/images/AICUP.png"),
      projectName: "AI Cup - ESG Promise Verification Competition",
      projectDesc: "Serving as a Research Assistant in NTPU-MIS iFit Lab. Assisted in labeling AI training datasets for the AI CUP 2025 Competition.",
      footerLink: [
        {
          name: "Compete Now",
          url: "https://www.aicup.tw/"
        }
      ]
    },
    {
      image: require("./assets/images/logo_thumbnail.png"), // 請確保檔案已放入 src/assets/images/
      projectName: "PlantMe",
      projectDesc: "A gamified virtual eco-plant service built with Vibe Coding. Grow virtual plants by completing real-world eco-tasks. No login required.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://plantme-seven.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/isyuhann/PlantMe" // 假設你有這個 repo，沒有的話可以拿掉這個區塊
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "AWS Certified AI Practitioner",
      subtitle: "Issued by Amazon Web Services (AWS) | Oct 2025 - Oct 2028",
      image: require("./assets/images/aws_logo.png"), // ⚠️ 請下載 AWS Logo 並命名為 aws_logo.png 放入資料夾
      footerLink: [
        {
          name: "Verify Credential",
          url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/a35ffd9de29043eaa12837cb9208baf7"
        }
      ]
    },
    {
      title: "Building LLM Applications With Prompt Engineering",
      subtitle: "Issued by NVIDIA | Nov 2025",
      image: require("./assets/images/nvidia_logo.png"), // ⚠️ 請下載 NVIDIA Logo 並命名為 nvidia_logo.png 放入資料夾
      footerLink: [
        {
          name: "Credential ID: ebkxvwUVS1yCI9NbnhWzRw",
          url: "#" // 如果有查核網址可以填入，沒有的話填 #
        }
      ]
    }
  ],
  display: true
};

// Resume Section
/* const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
}; */

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a collaboration with my community or just want to say hi? My Inbox is open for all.",
  email_address: "isyuhann@gmail.com"
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
  Experiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,

  isHireable,
  // resumeSection
};
