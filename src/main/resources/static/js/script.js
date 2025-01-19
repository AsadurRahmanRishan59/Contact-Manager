console.log("script loaded");

let currentTheme = getTheme();
applyTheme(currentTheme); // Apply the initial theme

function changeTheme(currentTheme) {
  const changeThemeButton = document.getElementById("theme_change_button");
//   changeThemeButton.querySelector("span").textContent=currentTheme === "dark" ? "Light" : "Dark";

  changeThemeButton.addEventListener("click", () => {
    const oldTheme = currentTheme;

    // Toggle theme
    currentTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(currentTheme);
    document.querySelector("html").classList.remove(oldTheme);
    document.querySelector("html").classList.add(currentTheme);
//   changeThemeButton.querySelector("span").textContent=currentTheme === "dark" ? "Light" : "Dark";

  });
}

function applyTheme(theme) {
  document.querySelector("html").classList.add(theme);
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

function getTheme() {
  return localStorage.getItem("theme") || "light";
}

// Initialize the theme change handler
changeTheme(currentTheme);
