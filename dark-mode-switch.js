// dark-mode-switch.js
document.addEventListener("DOMContentLoaded", function () {
  const darkModeSwitch = document.getElementById("darkModeSwitch");
  const darkModeIcon = document.getElementById("darkModeIcon");
  const darkModeText = document.getElementById("darkModeText"); // Added this line

  // Check local storage for user's dark mode preference
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  // Set initial dark mode state
  setDarkMode(isDarkMode);

  // Toggle dark mode on switch change
  darkModeSwitch.addEventListener("change", function () {
    setDarkMode(darkModeSwitch.checked);
  });

  function setDarkMode(isDarkMode) {
    const body = document.body;

    if (isDarkMode) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      darkModeIcon.textContent = "🌙";
      darkModeText.textContent = "Light Mode"; // Updated text for dark mode
      localStorage.setItem("darkMode", "enabled");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      darkModeIcon.textContent = "☀️";
      darkModeText.textContent = "Dark Mode"; // Updated text for light mode
      localStorage.setItem("darkMode", "disabled");
    }
  }
});
