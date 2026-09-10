/**
 * Harini N - Portfolio Data Configuration
 * Centralized authentic portfolio details.
 * Modify this file to easily update your public portfolio without changing HTML/CSS!
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Harini N",
    headline: "Computer Science and Engineering Student",
    subheadline: "Developer | Problem Solver | Aspiring Software Engineer",
    intro: "Passionate about building practical solutions, learning new technologies, and solving problems through code.",
    college: "Easwari Engineering College",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "8.915",
    email: "harining205@gmail.com",
    github: "https://github.com/harini311207",
    linkedin: "https://www.linkedin.com/in/harini-neelakandan/",
    hackathons: "5+ Hackathons Participated",
    // Configurable LeetCode profile URL (can be updated when ready)
    leetcodeUrl: "https://leetcode.com/",
    resumePath: "assets/resume/resume.pdf"
  },

  about: {
    bio: [
      "I am Harini N, a B.E. Computer Science and Engineering student at Easwari Engineering College with a CGPA of 8.915.",
      "I am interested in software development, programming, problem solving, and learning new technologies.",
      "I have been building projects and improving my coding skills through hands-on development, DSA practice, and hackathons.",
      "I have participated in 5+ hackathons."
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
      { name: "C++", icon: "devicon-cplusplus-plain" }
    ],
    webDevelopment: [
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" }
    ],
    technologiesAndFrameworks: [
      { name: "Spring Boot", icon: "devicon-spring-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" }
    ],
    coreStrengths: [
      { name: "Data Structures & Algorithms", icon: "fas fa-code-branch" },
      { name: "Problem Solving", icon: "fas fa-lightbulb" },
      { name: "Programming", icon: "fas fa-laptop-code" }
    ]
  },

  projects: [
    {
      id: "project-1",
      title: "Student Grade Management System",
      description: "A web-based academic management system that digitizes student and faculty workflows. Admin can create accounts, faculty can enter internal and external marks, and the system automatically calculates total, percentage, grades, GPA and CGPA. Students can view and print their results.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      categories: ["WEB", "JAVA"],
      githubUrl: "https://github.com/harini311207/Student-grade-management-system",
      liveUrl: null, // Only authentic URLs; null if no public demo
      featured: true,
      badge: "Full Stack Academic System"
    },
    {
      id: "project-2",
      title: "Student Expense Tracker",
      description: "A simple web application for tracking and managing daily student expenses.",
      technologies: ["HTML", "CSS", "JavaScript"],
      categories: ["WEB"],
      githubUrl: "https://github.com/harini311207/Student-expense-tracker",
      liveUrl: null,
      featured: true,
      badge: "Frontend Web Application"
    },
    {
      id: "project-3",
      title: "Plant Disease Detector",
      description: "A machine learning based plant disease detection project using ESP32-CAM, Python and TensorFlow.",
      technologies: ["ESP32-CAM", "Python", "TensorFlow", "Machine Learning"],
      categories: ["PYTHON", "ML"],
      githubUrl: null, // Kept null since no public repo is provided
      liveUrl: null,
      featured: true,
      badge: "Edge AI & IoT",
      modelClasses: ["Healthy", "Early Blight", "Late Blight", "Leaf Mold", "Powdery Mildew"]
    }
  ],

  education: {
    institution: "Easwari Engineering College",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "8.915",
    highlight: "Academic focus on computer science foundations, algorithms, and practical software engineering."
  },

  achievements: {
    hackathons: {
      count: "5+",
      title: "5+ Hackathons Participated",
      description: "Participated in multiple hackathons to explore ideas, build solutions, collaborate, and gain hands-on development experience."
    },
    codingJourney: {
      title: "Coding Journey & Problem Solving",
      highlights: [
        "Consistent programming practice with core algorithmic challenges.",
        "Data Structures & Algorithms (DSA) problem solving in Python, Java, and C++.",
        "Active problem solving and continuous algorithmic thinking on LeetCode.",
        "Hands-on project development translating conceptual algorithms into real applications."
      ]
    }
  },

  currentlyLearning: [
    { title: "Java", category: "Core Development", detail: "Strengthening enterprise architectures & object-oriented design" },
    { title: "C++", category: "Systems & DSA", detail: "Mastering memory efficiency and competitive programming constructs" },
    { title: "Data Structures & Algorithms", category: "Computer Science", detail: "Deepening algorithmic efficiency, trees, graphs, and dynamic programming" },
    { title: "Problem Solving", category: "Core Skill", detail: "Systematic logic breakdown and edge-case optimization" },
    { title: "Web Development", category: "Full-Stack", detail: "Modern interactive frontends and responsive web interfaces" },
    { title: "Programming", category: "Engineering", detail: "Clean code principles and modular software architecture" }
  ]
};

// Make available globally and via module export if in module context
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
