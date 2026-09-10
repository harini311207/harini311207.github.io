/**
 * Harini N - Portfolio Data Configuration
 * Centralized authentic portfolio details for Harini N.
 * Easy to update without modifying structural HTML.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Harini N",
    headline: "Computer Science & Engineering Student",
    roles: "Developer • Problem Solver • Aspiring Software Engineer",
    intro: "I'm Harini, a Computer Science and Engineering student at Easwari Engineering College who enjoys building practical applications and improving my problem-solving skills.",
    college: "Easwari Engineering College",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "8.915",
    email: "harining205@gmail.com",
    github: "https://github.com/harini311207",
    linkedin: "https://www.linkedin.com/in/harini-neelakandan/",
    hackathons: "5+ Hackathons Participated",
    resumePath: "assets/resume/resume.pdf"
  },

  about: {
    name: "Harini N",
    college: "Easwari Engineering College",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "8.915",
    hackathons: "5+ Hackathons Participated",
    paragraphs: [
      "I am Harini N, a Computer Science and Engineering undergraduate student at Easwari Engineering College with an academic CGPA of 8.915.",
      "I focus on developing strong fundamentals across Programming, Web Development, Problem Solving, and Software Development.",
      "Through consistent hands-on coding and practicing Data Structures and Algorithms, I build reliable applications while sharpening my analytical thinking.",
      "Having participated in 5+ hackathons, I enjoy collaborating in fast-paced team environments to ideate and bring software prototypes to life."
    ],
    focusAreas: [
      "Programming",
      "Web Development",
      "Problem Solving",
      "Software Development",
      "Data Structures and Algorithms"
    ]
  },

  skills: [
    { name: "Python", icon: "devicon-python-plain", type: "Language" },
    { name: "C++", icon: "devicon-cplusplus-plain", type: "Language" },
    { name: "Java", icon: "devicon-java-plain", type: "Language" },
    { name: "HTML", icon: "devicon-html5-plain", type: "Web" },
    { name: "CSS", icon: "devicon-css3-plain", type: "Web" },
    { name: "JavaScript", icon: "devicon-javascript-plain", type: "Web" }
  ],

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Student Grade Management System",
      description: "A web application for managing student academic results digitally. Admin creates accounts, faculty enters internal and external marks, and the system calculates total, percentage, grade, GPA and CGPA. Students can view and print their grade reports.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/harini311207/Student-grade-management-system",
      badge: "Web Application",
      highlights: [
        "Role-based access for Administrator, Faculty, and Students",
        "Automated computation of totals, percentage, grades, GPA and CGPA",
        "Digital student grade sheet viewing and printable result reports"
      ]
    },
    {
      id: "project-02",
      number: "02",
      title: "Student Expense Tracker",
      description: "A simple web application for tracking and managing daily student expenses.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/harini311207/Student-expense-tracker",
      badge: "Web Application",
      highlights: [
        "Intuitive tracking of student expenditures and cash flows",
        "Category-wise breakdown for daily and monthly expense insights",
        "Lightweight, accessible client-side interface with real-time totals"
      ]
    },
    {
      id: "project-03",
      number: "03",
      title: "Plant Disease Detector",
      description: "Developed a project focused on identifying plant diseases using image-based analysis. Explored machine learning concepts for disease classification and early detection. Designed the solution with practical application for supporting plant health monitoring.",
      technologies: ["ESP32-CAM", "Python", "TensorFlow", "Machine Learning"],
      githubUrl: null,
      badge: "Edge AI & Machine Learning",
      supportedClasses: [
        "Healthy",
        "Early Blight",
        "Late Blight",
        "Leaf Mold",
        "Powdery Mildew"
      ],
      highlights: [
        "ESP32-CAM optical capture combined with Python & TensorFlow processing",
        "Image-based classification across 5 specific foliar conditions",
        "Early detection design aimed at supporting real-world crop health"
      ]
    }
  ],

  education: {
    institution: "Easwari Engineering College",
    degree: "B.E. Computer Science and Engineering",
    cgpa: "8.915",
    focus: "Computer Science engineering core curriculum including Data Structures, Algorithms, Object-Oriented Design, Database Systems, Operating Systems, and Software Engineering methodologies."
  },

  achievements: {
    hackathons: {
      count: "5+",
      label: "Participated in 5+ hackathons",
      detail: "Collaborated in competitive hackathons focusing on problem solving, rapid engineering, ideation, and building working software prototypes within time constraints."
    },
    coding: {
      title: "Coding & Problem Solving",
      status: "Actively practicing Data Structures and Algorithms.",
      detail: "Strengthening algorithmic efficiency, time and space complexity analysis, and systematic problem breakdown through regular practice."
    }
  },

  currentlyLearning: [
    {
      title: "C++",
      category: "Systems & Algorithms",
      desc: "Deepening standard template library (STL), object-oriented principles, and algorithmic problem solving."
    },
    {
      title: "Java",
      category: "Application Development",
      desc: "Developing backend architectures, object-oriented design patterns, and robust software services."
    },
    {
      title: "Data Structures & Algorithms",
      category: "Core Foundations",
      desc: "Strengthening core problem-solving competencies, tree/graph traversals, and algorithmic complexity."
    },
    {
      title: "Web Development",
      category: "Full-Stack Development",
      desc: "Advancing responsive frontend engineering, semantic web practices, and asynchronous JavaScript."
    },
    {
      title: "Software Development",
      category: "Engineering Practices",
      desc: "Studying clean code architecture, version control workflows, modular design, and maintainability."
    }
  ]
};

// Freeze object to ensure read-only immutability in browser
if (typeof Object.freeze === 'function') {
  Object.freeze(PORTFOLIO_DATA);
}
