const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
const root = document.documentElement;
const themeIcons = {
  light: '☀️',
  dark: '🌙'
};

function updateThemeIcon(theme) {
  themeToggle.textContent = themeIcons[theme] || themeIcons.light;
}

if (storedTheme) {
  root.setAttribute('data-theme', storedTheme);
}

const currentTheme = root.getAttribute('data-theme') || 'light';
updateThemeIcon(currentTheme);

function toggleTheme() {
  const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
  updateThemeIcon(nextTheme);
}

themeToggle.addEventListener('click', toggleTheme);

const appointmentForm = document.getElementById('appointmentForm');
const formSuccess = document.getElementById('formSuccess');

if (appointmentForm) {
  appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    appointmentForm.reset();
    if (formSuccess) {
      formSuccess.hidden = false;
      setTimeout(() => {
        formSuccess.hidden = true;
      }, 5000);
    }
  });
}

const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('main section');

function updateActiveNav() {
  const scrollPosition = window.scrollY + window.innerHeight / 3;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`.nav a[href="#${id}"]`);

    if (navLink) {
      if (scrollPosition >= top && scrollPosition < bottom) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
