// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
  }

  // Add event listener for the toggle switch
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
