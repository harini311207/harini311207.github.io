/**
 * Harini N - Portfolio Data Configuration
 * Centralized authentic portfolio details from Harini N's official resume.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Harini N",
    headline: "Computer Science and Engineering Student",
    subheadline: "Developer | Problem Solver | Aspiring Software Engineer",
    intro: "Computer Science Engineering student with a strong interest in software development, problem solving, and emerging technologies. Actively building skills through coding practice, projects, certifications, and hackathons, with a goal of gaining practical industry experience through an internship.",
    college: "Easwari Engineering College",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "8.915",
    email: "harining205@gmail.com",
    github: "https://github.com/harini311207",
    linkedin: "https://www.linkedin.com/in/harini-neelakandan/",
    hackathons: "5+ Hackathons Participated",
    leetcodeUrl: "https://leetcode.com/",
    resumePath: "assets/resume/resume.pdf"
  },

  about: {
    bio: [
      "I am Harini N, a B.E. Computer Science and Engineering student at Easwari Engineering College with a CGPA of 8.915.",
      "I have a strong interest in software development, problem solving, and emerging technologies.",
      "I am actively building skills through coding practice, hands-on projects, industry certifications, and hackathons, with the goal of gaining practical industry experience.",
      "I have participated in 5+ hackathons, gaining valuable experience in teamwork, ideation, and rapid prototyping."
    ],
    identityCard: {
      name: "Harini N",
      college: "Easwari Engineering College",
      degree: "B.E. Computer Science and Engineering",
      cgpa: "8.915",
      hackathons: "5+"
    }
  },

  skills: {
    programming: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "C", icon: "devicon-c-plain" }
    ],
    core: [
      { name: "Data Structures & Algorithms", icon: "fas fa-network-wired" },
      { name: "Problem Solving", icon: "fas fa-lightbulb" }
    ],
    database: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" }
    ],
    areas: [
      { name: "Web Development", icon: "fas fa-globe" },
      { name: "Machine Learning", icon: "fas fa-brain" }
    ],
    tools: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" }
    ]
  },

  projects: [
    {
      id: "project-1",
      title: "Plant Disease Detector",
      description: "Developed a project focused on identifying plant diseases using image-based analysis. Explored machine learning concepts for disease classification and early detection. Designed the solution with practical application for supporting plant health monitoring.",
      technologies: ["Python", "Machine Learning", "Image Analysis", "ESP32-CAM", "TensorFlow"],
      categories: ["PYTHON", "ML"],
      githubUrl: null,
      liveUrl: null,
      featured: true,
      badge: "Machine Learning & Vision",
      modelClasses: ["Healthy", "Early Blight", "Late Blight", "Leaf Mold", "Powdery Mildew"]
    },
    {
      id: "project-2",
      title: "Student Expense Tracker",
      description: "Developed an application to record and manage daily student expenses. Organized expenses into categories to help users monitor spending, focusing on creating a simple and user-friendly expense management solution.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["WEB"],
      githubUrl: "https://github.com/harini311207/Student-expense-tracker",
      liveUrl: null,
      featured: true,
      badge: "Frontend Web Application"
    },
    {
      id: "project-3",
      title: "Student Grade Management System",
      description: "A web-based academic management system that digitizes student and faculty workflows. Automatically calculates totals, GPA, and CGPA, enabling students to view and print their results.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      categories: ["WEB", "JAVA"],
      githubUrl: "https://github.com/harini311207/Student-grade-management-system",
      liveUrl: null,
      featured: true,
      badge: "Academic Management System"
    }
  ],

  education: {
    institution: "Easwari Engineering College",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "8.915",
    highlight: "Comprehensive study in computer science engineering foundations, algorithms, and practical software engineering."
  },

  achievements: {
    hackathons: [
      {
        title: "5+ Hackathons Participated",
        detail: "Gained valuable experience in teamwork, ideation, and rapid prototyping across multiple competitive hackathons."
      },
      {
        title: "HackVerse 2026: Innovate, Build, Impact",
        detail: "Optimization Algorithm & Gaming — A 7-hour inter-college hackathon conducted by SIMATS Engineering."
      }
    ],
    codingJourney: {
      title: "LeetCode & Algorithmic Practice",
      detail: "Active participant in LeetCode coding practice, strengthening DSA and problem-solving skills with consistent challenge resolution."
    }
  },

  certifications: [
    {
      name: "AI Skills Passport",
      issuer: "EY & Microsoft",
      badge: "Artificial Intelligence"
    },
    {
      name: "Turn Ideas Into Prototypes With Vibe Coding",
      issuer: "IBM SkillsBuild",
      badge: "Prototyping & Development"
    },
    {
      name: "MongoDB Basics for Students",
      issuer: "MongoDB",
      badge: "NoSQL Database"
    }
  ],

  currentlyLearning: [
    { title: "Java", category: "Core Development", detail: "Strengthening enterprise architectures & object-oriented programming" },
    { title: "C", category: "Systems & DSA", detail: "Deepening memory efficiency and algorithmic constructs" },
    { title: "Data Structures & Algorithms", category: "Computer Science", detail: "Algorithmic efficiency, graph traversal, and dynamic problem solving" },
    { title: "Problem Solving", category: "Core Competency", detail: "Systematic logic breakdown and edge-case optimization" },
    { title: "Web Development", category: "Full-Stack", detail: "Modern interactive frontends, responsive web standards, and APIs" },
    { title: "Machine Learning", category: "Emerging Tech", detail: "Image-based analysis, neural models, and intelligent applications" }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
