function setLanguage(lang) { //Defines a function called setLanguage, which takes lang as a parameter ("en" or "si")
  const allText = document.querySelectorAll(".lang"); //Grabs all elements on the page that have the class .lang.We use this to find every bilingual text section

  allText.forEach(el => { //Loops through each element with the class .lang.
    if (el.classList.contains(lang)) { // If the element has the current language class (e.g. en or si): Show it (display: inline). Otherwise, hide it (display: none). This hides Sinhala text when English is selected, and vice versa.
      el.style.display = "inline";
    } else {
      el.style.display = "none";
    }
  });

  // Saves the selected language in localStorage so when the user refreshes or comes back later, their choice is remembered.
  localStorage.setItem("language", lang);
}

// Set default language or use saved preference
document.addEventListener("DOMContentLoaded", () => { //Waits until the entire page is fully loaded before running the next part of the code.
  const savedLang = localStorage.getItem("language") || "si"; //Checks if the user already picked a language before (from localStorage). If not, it defaults to "en" (English).
  setLanguage(savedLang); //Calls setLanguage() with the saved or default language to apply the correct text when the page loads.
});
