function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.className);
}

window.onload = () => {
  document.body.className = localStorage.getItem("theme") || "";
};
