const toggleCheckbox = document.getElementById('toggle');
const body = document.body;

// Load the current theme from localStorage if available
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleCheckbox.checked = true;
}

// Event listener to switch themes
toggleCheckbox.addEventListener('change', () => {
  if (toggleCheckbox.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark'); // Save dark mode in localStorage
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // Save light mode in localStorage
  }
});

function toggleMenu() {
  const menu = document.getElementById('nav-links');
  menu.classList.toggle('show');
}
