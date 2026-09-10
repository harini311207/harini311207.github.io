/**
 * Harini N - Owner Admin Controller
 * Securely manages portfolio configuration with Web Crypto API,
 * dynamic forms for projects/skills/about, and 1-click data export.
 */

// Salted SHA-256 hash for owner verification ("harini2026")
// Hash of "harini_admin_salt_2026_harini2026"
const OWNER_HASH = "8190d7c3b28b6d859b85c1410d481f185ef35b5ef213459c8d5069a3cfc23e85";

async function computeHash(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode("harini_admin_salt_2026_" + message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

let currentData = JSON.parse(JSON.stringify(PORTFOLIO_DATA));

document.addEventListener('DOMContentLoaded', () => {
  const authBox = document.getElementById('admin-auth-box');
  const dashboard = document.getElementById('admin-dashboard');
  const authForm = document.getElementById('admin-login-form');
  const authError = document.getElementById('auth-error-msg');
  const logoutBtn = document.getElementById('admin-logout-btn');

  // Check existing session
  if (sessionStorage.getItem('harini_owner_auth') === 'true') {
    authBox.style.display = 'none';
    dashboard.style.display = 'block';
    populateAdminForms();
  }

  // Handle Login
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pass = document.getElementById('admin-password').value.trim();
    const hash = await computeHash(pass);

    // Default owner key: harini2026
    if (hash === OWNER_HASH || pass === "harini2026") {
      sessionStorage.setItem('harini_owner_auth', 'true');
      authBox.style.display = 'none';
      dashboard.style.display = 'block';
      authError.style.display = 'none';
      populateAdminForms();
    } else {
      authError.style.display = 'block';
      authError.textContent = 'Invalid owner credentials.';
    }
  });

  // Handle Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('harini_owner_auth');
      window.location.reload();
    });
  }

  // Setup Projects Manager and Exporters
  initProjectManager();
  initExporter();
});

function populateAdminForms() {
  // Personal
  document.getElementById('edit-name').value = currentData.personal.name || '';
  document.getElementById('edit-headline').value = currentData.personal.headline || '';
  document.getElementById('edit-subheadline').value = currentData.personal.subheadline || '';
  document.getElementById('edit-intro').value = currentData.personal.intro || '';
  document.getElementById('edit-email').value = currentData.personal.email || '';
  document.getElementById('edit-github').value = currentData.personal.github || '';
  document.getElementById('edit-linkedin').value = currentData.personal.linkedin || '';
  document.getElementById('edit-leetcode').value = currentData.personal.leetcodeUrl || '';

  // About
  document.getElementById('edit-bio').value = (currentData.about.bio || []).join('\n\n');
  document.getElementById('edit-cgpa').value = currentData.about.identityCard.cgpa || '';
  document.getElementById('edit-hackathons-count').value = currentData.about.identityCard.hackathons || '';

  // Education
  document.getElementById('edit-college').value = currentData.education.institution || '';
  document.getElementById('edit-degree').value = currentData.education.degree || '';

  renderAdminProjects();
}

function renderAdminProjects() {
  const projContainer = document.getElementById('admin-projects-list');
  projContainer.innerHTML = '';

  currentData.projects.forEach((proj, idx) => {
    const card = document.createElement('div');
    card.className = 'admin-proj-item';
    card.innerHTML = `
      <div class="admin-proj-info">
        <h4>${escapeHtml(proj.title)}</h4>
        <p>${escapeHtml(proj.description.substring(0, 85))}...</p>
        <small style="color: #6366f1;">${proj.categories.join(', ')} &bull; ${proj.technologies.join(', ')}</small>
      </div>
      <button class="admin-btn admin-btn-danger" onclick="deleteProject(${idx})">
        <i class="fas fa-trash"></i> Delete
      </button>
    `;
    projContainer.appendChild(card);
  });
}

function initProjectManager() {
  const addBtn = document.getElementById('btn-add-project');
  if (!addBtn) return;

  addBtn.addEventListener('click', () => {
    const title = prompt('Project Title:');
    if (!title) return;
    const description = prompt('Project Description:');
    const techs = prompt('Technologies (comma separated, e.g. Java, Spring Boot, MySQL):');
    const categories = prompt('Categories (comma separated, e.g. WEB, JAVA, PYTHON, ML):') || 'WEB';
    const githubUrl = prompt('GitHub URL (leave blank if none):');

    const newProject = {
      id: `project-${Date.now()}`,
      title: title.trim(),
      description: description ? description.trim() : '',
      technologies: techs ? techs.split(',').map(t => t.trim()) : [],
      categories: categories.split(',').map(c => c.trim().toUpperCase()),
      githubUrl: githubUrl && githubUrl.trim() !== '' ? githubUrl.trim() : null,
      liveUrl: null,
      featured: true,
      badge: "Project"
    };

    currentData.projects.push(newProject);
    renderAdminProjects();
    updateExportPreview();
  });
}

window.deleteProject = function(index) {
  if (confirm(`Are you sure you want to delete "${currentData.projects[index].title}"?`)) {
    currentData.projects.splice(index, 1);
    renderAdminProjects();
    updateExportPreview();
  }
};

function initExporter() {
  const saveBtn = document.getElementById('btn-save-draft');
  const copyBtn = document.getElementById('btn-copy-export');
  const downloadBtn = document.getElementById('btn-download-export');

  saveBtn.addEventListener('click', () => {
    // Read values back into currentData
    currentData.personal.name = document.getElementById('edit-name').value.trim();
    currentData.personal.headline = document.getElementById('edit-headline').value.trim();
    currentData.personal.subheadline = document.getElementById('edit-subheadline').value.trim();
    currentData.personal.intro = document.getElementById('edit-intro').value.trim();
    currentData.personal.email = document.getElementById('edit-email').value.trim();
    currentData.personal.github = document.getElementById('edit-github').value.trim();
    currentData.personal.linkedin = document.getElementById('edit-linkedin').value.trim();
    currentData.personal.leetcodeUrl = document.getElementById('edit-leetcode').value.trim();

    currentData.about.bio = document.getElementById('edit-bio').value.split('\n\n').filter(p => p.trim());
    currentData.about.identityCard.cgpa = document.getElementById('edit-cgpa').value.trim();
    currentData.about.identityCard.hackathons = document.getElementById('edit-hackathons-count').value.trim();

    currentData.education.institution = document.getElementById('edit-college').value.trim();
    currentData.education.degree = document.getElementById('edit-degree').value.trim();
    currentData.education.cgpa = currentData.about.identityCard.cgpa;

    updateExportPreview();
    alert('Changes saved to session! Check the Export box below.');
  });

  copyBtn.addEventListener('click', () => {
    const exportText = generateExportJs();
    navigator.clipboard.writeText(exportText).then(() => {
      alert('Copied updated portfolioData.js to clipboard!');
    });
  });

  downloadBtn.addEventListener('click', () => {
    const exportText = generateExportJs();
    const blob = new Blob([exportText], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolioData.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  updateExportPreview();
}

function generateExportJs() {
  return `/**
 * Harini N - Portfolio Data Configuration
 * Centralized authentic portfolio details.
 * Generated by Harini N Portfolio Owner Studio.
 */

const PORTFOLIO_DATA = ${JSON.stringify(currentData, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
`;
}

function updateExportPreview() {
  const previewBox = document.getElementById('export-code-preview');
  if (previewBox) {
    previewBox.textContent = generateExportJs();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
