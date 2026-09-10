# Harini N — Personal Portfolio

A bespoke, human-designed personal portfolio website for **Harini N**, Computer Science and Engineering student at Easwari Engineering College.

Built with a **Full-Screen Sliding Architecture**: full-viewport presentation sections with smooth transitions, modern typography, responsive editorial grid layouts, dark/light theme switching, and zero AI clichés.

---

## 🌟 Key Features

- **Full-Screen Sliding Experience**:
  - Fullscreen viewport sections with debounced mouse wheel scrolling.
  - Keyboard navigation (`Arrow Down`, `Arrow Up`, `Arrow Left`, `Arrow Right`, `Page Down`, `Page Up`, `Home`, `End`).
  - Mobile touch swipe gestures (vertical & horizontal).
  - Side progress indicators (`01` to `09`), top linear progress bar, and bottom arrow navigation controls.
- **Nine Authentic Sections**:
  1. `01 — HOME`: Name prominence, clean student bio, primary action buttons, and verified social links.
  2. `02 — ABOUT`: Authentic educational background at Easwari Engineering College (CGPA: 8.915) and core development areas.
  3. `03 — SKILLS`: Purely verified skills — **Python**, **C++**, **Java**, **HTML**, **CSS**, **JavaScript** (no fake percentages or progress bars).
  4. `04 — PROJECTS`: Bespoke presentation with dedicated workflow architectures and GitHub repository buttons:
     - **Project 01: Student Grade Management System** (Java, Spring Boot, MySQL, HTML, CSS, JavaScript)
     - **Project 02: Student Expense Tracker** (HTML, CSS, JavaScript)
     - **Project 03: Plant Disease Detector** (ESP32-CAM, Python, TensorFlow, Machine Learning)
  5. `05 — EDUCATION`: Academic degree timeline at Easwari Engineering College (8.915 CGPA).
  6. `06 — ACHIEVEMENTS`: 5+ Hackathons participation and disciplined DSA practice.
  7. `07 — CURRENTLY LEARNING`: Active learning areas: C++, Java, Data Structures and Algorithms, Web Development, Software Development.
  8. `08 — RESUME`: Directly linked to Harini's actual resume PDF with **View Resume** and **Download Resume** buttons.
  9. `09 — CONTACT`: One-click copy email button, direct LinkedIn, direct GitHub, and safe contact form.
- **Dark & Light Modes**:
  - Seamless theme toggle button with `localStorage` persistence.
- **Static & Secure**:
  - 100% static files with zero external credentials or mock passwords.
  - Publicly accessible and optimized for **GitHub Pages**.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags, OpenGraph SEO metadata, accessibility attributes.
- **CSS3**: Custom CSS variables, clean editorial layouts, subtle borders, responsive Flexbox and Grid systems.
- **JavaScript (ES6+)**: Custom slide transition engine, touch swipe listener, theme manager, dynamic year, and email copy.
- **Typography & Icons**: Google Fonts (Outfit, Plus Jakarta Sans, JetBrains Mono), FontAwesome 6, DevIcon.

---

## 📁 Project Structure

```
harini311207.github.io/
│
├── index.html                  # Main full-screen sliding portfolio (9 slides)
├── README.md                   # Project documentation
├── .gitignore                  # Git ignore rules
│
├── css/
│   └── style.css               # Design system, layout & slide transition engine
│
├── js/
│   ├── portfolioData.js        # Centralized personal configuration
│   ├── slider.js               # Fullscreen sliding engine
│   └── app.js                  # Theme toggler, mobile menu, and contact actions
│
├── assets/
│   └── resume/
│       └── resume.pdf          # Harini N official resume PDF
│
└── public/
    └── resume.pdf              # Alias path for resume
```

---

## 🚀 How to Run Locally

Because this project is built with static web technologies, you can run it using Python:

```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## ✏️ How to Edit Portfolio Information

All personal data, projects, skills, education, and links are centralized in `js/portfolioData.js`.
Open that file in any editor to change details without touching HTML or CSS.

To update the resume, simply replace `assets/resume/resume.pdf` and `public/resume.pdf` with your updated PDF file.
