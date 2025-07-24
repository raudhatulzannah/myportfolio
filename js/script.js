AOS.init();

document.getElementById('darkToggle').addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-bs-theme");
  html.setAttribute("data-bs-theme", current === "dark" ? "light" : "dark");
});
