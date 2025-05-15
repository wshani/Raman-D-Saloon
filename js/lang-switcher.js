function setLanguage(lang) {
  const allText = document.querySelectorAll(".lang");

  allText.forEach(el => {
    if (el.classList.contains(lang)) {
      el.style.display = "inline";
    } else {
      el.style.display = "none";
    }
  });

  // Save user preference (optional)
  localStorage.setItem("language", lang);
}

// Set default language or use saved preference
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);
});
