# Harini N — Personal Portfolio

A modern developer portfolio website for **Harini N**, Computer Science and Engineering student at Easwari Engineering College.

Designed with a **Super Sliding Website** architecture: full-viewport presentation sections with smooth transitions, modern aurora glow backdrops, glassmorphism UI cards, dark/light theme switching, and responsive navigation across all devices.

---

## 🌟 Key Features

- **Super Sliding Presentation Experience**:
  - Fullscreen viewport sections with debounced mouse wheel scrolling.
  - Keyboard navigation (`Arrow Down`, `Arrow Up`, `Arrow Left`, `Arrow Right`, `Page Down`, `Page Up`, `Home`, `End`).
  - Mobile touch swipe navigation.
  - Interactive side progress indicators (`01` to `09`) and bottom navigation controls.
- **Nine Authentic Slide Sections**:
  1. `01 — HOME`: Greeting, professional headline, call-to-actions, and social links.
  2. `02 — ABOUT`: Authentic bio and verified identity card.
  3. `03 — SKILLS`: Categorized skill badges across Programming, Web Dev, Technologies, and Core Disciplines.
  4. `04 — PROJECTS`: Interactive project showcase with category filtering (`ALL`, `WEB`, `JAVA`, `PYTHON`, `ML`).
  5. `05 — EDUCATION`: Academic degree details at Easwari Engineering College (8.915 CGPA).
  6. `06 — ACHIEVEMENTS`: 5+ Hackathons participation and disciplined DSA/LeetCode coding journey.
  7. `07 — CURRENTLY LEARNING`: Active learning topics (Java, C++, DSA, Problem Solving, Web Dev).
  8. `08 — RESUME`: Dedicated slide with direct View and Download buttons.
  9. `09 — CONTACT`: One-click copy email button, LinkedIn, GitHub, and safe contact form.
- **Dark & Light Modes**:
  - Seamless theme toggle button with `localStorage` persistence.
  - Optimized contrast and readability in both modes.
- **Owner Studio (Admin Portal)**:
  - Accessible via `admin.html` (or click OWNER in header).
  - Protected by Web Crypto SHA-256 hashed passphrase check.
  - Manage projects (Add/Delete), update bio, and export updated `portfolioData.js` in 1 click.
- **Deployment-Friendly**:
  - 100% static files (zero backend/localhost dependencies).
  - Ready for direct deployment on **GitHub Pages**.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags, OpenGraph SEO metadata, accessibility attributes.
- **CSS3**: Custom CSS variables, Glassmorphism (`backdrop-filter`), Aurora CSS keyframe animations, responsive grid & flexbox layouts.
- **JavaScript (ES6+)**: Slider transition engine, touch swipe listener, theme manager, dynamic category filter, and form validation.
- **Typography & Icons**: Google Fonts (Outfit, Plus Jakarta Sans, JetBrains Mono), FontAwesome 6, DevIcons.

---

## 📁 Project Structure

```
harini-fullstack-portfolio/
│
├── index.html                  # Main super-sliding portfolio (9 slides)
├── admin.html                  # Owner Studio dashboard
├── README.md                   # Project documentation
├── .gitignore                  # Git ignore rules
│
├── css/
│   ├── style.css               # Main styling, design system & slider engine
│   └── admin.css               # Owner dashboard styles
│
├── js/
│   ├── portfolioData.js        # Centralized authentic portfolio data
│   ├── slider.js               # Super-slider navigation controller
│   ├── app.js                  # Theme toggle, project filtering, contact form
│   └── admin.js                # Owner editing & export logic
│
└── assets/
    └── resume/
        └── resume.pdf          # Resume document for direct view/download
```

---

## 🚀 How to Run Locally

Because this project is built with static web technologies, you can run it using any local web server:

### Option 1: Using Node `npx serve` (Recommended)
```bash
npx -y serve .
```
Then open `http://localhost:3000` in your browser.

### Option 2: Using Python
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

### Option 3: Direct File Open
You can also open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## ✏️ How to Edit Portfolio Information

### Easy Method: Update `js/portfolioData.js`
All personal data, projects, skills, education, and links are kept in a single file: `js/portfolioData.js`.
Open that file in any editor to change your details without touching HTML or CSS.

### Interactive Method: Owner Studio (`admin.html`)
1. Open `admin.html` in your browser (or click **OWNER** in the top navigation).
2. Enter your owner key (`harini2026`).
3. Add, edit, or delete projects and personal details in the visual forms.
4. Click **Download js/portfolioData.js** (or Copy to Clipboard) and save it into `js/portfolioData.js`.

---

## 📄 Where to Place Your Official Resume

Place your official PDF resume at:
```
assets/resume/resume.pdf
```
Both the **VIEW RESUME** and **DOWNLOAD RESUME** buttons on Slide 08 will automatically serve this file.

---

## 🌐 How to Deploy to GitHub Pages

1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Create premium personal portfolio website for Harini N"
   ```
2. Create a repository on GitHub (e.g. `harini-fullstack-portfolio` or `harini311207.github.io`).
3. Link the remote and push:
   ```bash
   git remote add origin https://github.com/harini311207/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. Enable GitHub Pages:
   - Go to your repository **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main`, folder: `/ (root)`.
   - Click **Save**.
5. Your live portfolio will be published at:
   ```
   https://harini311207.github.io/<repo-name>/
   ```
   (or `https://harini311207.github.io/` if using the user page repo).

---

## 🔒 Owner Security Note

- The public portfolio is **100% read-only** for all visitors.
- No confidential credentials, API keys, or private database passwords are included.
- The Owner Studio allows live drafting and export of static data without requiring insecure plain-text credentials.

---

&copy; 2026 Harini N. All rights reserved.
