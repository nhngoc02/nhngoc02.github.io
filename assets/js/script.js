'use strict';

// ---------- Page tabs (About / Resume / Portfolio / Activities) ----------

const pageLinks = document.querySelectorAll('[data-page-link]');
const pages = document.querySelectorAll('[data-page]');

function showPage(name, updateHash = true) {
  if (![...pages].some(page => page.dataset.page === name)) name = 'about';

  pages.forEach(page => page.classList.toggle('active', page.dataset.page === name));
  pageLinks.forEach(link => {
    const isActive = link.dataset.pageLink === name;
    link.classList.toggle('active', isActive);
    link.setAttribute('aria-selected', isActive);
  });

  if (updateHash) history.replaceState(null, '', '#' + name);
}

pageLinks.forEach(link => {
  link.addEventListener('click', () => {
    showPage(link.dataset.pageLink);
    window.scrollTo({ top: 0 });
  });
});

showPage(location.hash.slice(1) || 'about', false);


// ---------- Portfolio: category tabs and project cards ----------

const grid = document.querySelector('[data-project-grid]');
const segments = document.querySelectorAll('[data-filter]');

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function initials(title) {
  return title.split(/\s+/).filter(w => /^[A-Za-z]/.test(w)).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function renderProjects(category) {
  grid.innerHTML = '';

  PROJECTS.forEach((project, index) => {
    if (project.category !== category) return;

    const thumb = project.image
      ? `<img src="${project.image}" alt="" loading="lazy">`
      : `<span class="thumb-placeholder" aria-hidden="true">${initials(project.title)}</span>`;

    const item = document.createElement('li');
    item.innerHTML = `
      <button class="project-card" data-project-index="${index}">
        <span class="project-thumb">${thumb}</span>
        <span class="project-meta">${escapeHtml(project.label)}</span>
        <span class="project-title">${escapeHtml(project.title)}</span>
        <span class="project-summary">${escapeHtml(project.summary)}</span>
      </button>`;
    grid.appendChild(item);
  });
}

segments.forEach(segment => {
  segment.addEventListener('click', () => {
    segments.forEach(s => {
      const isActive = s === segment;
      s.classList.toggle('active', isActive);
      s.setAttribute('aria-selected', isActive);
    });
    renderProjects(segment.dataset.filter);
  });
});

renderProjects('data');


// ---------- Project details popup ----------

const dialog = document.querySelector('[data-project-dialog]');
const dialogBody = document.querySelector('[data-dialog-body]');

function openProject(project) {
  const meta = [project.label, project.date].filter(Boolean).map(escapeHtml).join(' · ');
  const tools = project.tools.map(tool => `<li>${escapeHtml(tool)}</li>`).join('');
  const links = project.links.map((link, i) =>
    `<a class="btn ${i === 0 ? '' : 'btn-secondary'}" href="${link.url}" target="_blank" rel="noopener">${escapeHtml(link.label)} ↗</a>`
  ).join('');

  dialogBody.innerHTML = `
    ${project.image ? `<img class="dialog-image" src="${project.image}" alt="">` : ''}
    <p class="project-meta">${meta}</p>
    <h3 id="dialog-title" class="dialog-title">${escapeHtml(project.title)}</h3>
    <h4>Context</h4>
    <p>${escapeHtml(project.context)}</p>
    <h4>What I did</h4>
    <p>${escapeHtml(project.approach)}</p>
    <h4>Outcome</h4>
    <p>${escapeHtml(project.outcome)}</p>
    <ul class="tags">${tools}</ul>
    <div class="dialog-actions">${links}</div>`;

  dialog.showModal();
  dialog.scrollTop = 0;
}

grid.addEventListener('click', event => {
  const card = event.target.closest('[data-project-index]');
  if (card) openProject(PROJECTS[card.dataset.projectIndex]);
});

document.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());

// Close when clicking the dimmed backdrop outside the popup
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
