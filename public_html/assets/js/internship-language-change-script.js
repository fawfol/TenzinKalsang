const langBtn = document.getElementById("lang-btn");

        const translations = {
            en: {"..."},
            fr: {"..."}
        };

        // function to toggle language
        function toggleLanguage() {
            const currentLang = langBtn.getAttribute("data-lang");
            const newLang = currentLang === "EN" ? "FR" : "EN";
            langBtn.setAttribute("data-lang", newLang);

            // Update text
            for (const id in translations[newLang]) {
                document.getElementById(id).textContent = translations[newLang][id];
            }
        }

        langBtn.addEventListener("click", toggleLanguage);