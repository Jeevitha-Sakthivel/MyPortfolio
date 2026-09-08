document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // 1. Smooth Scrolling
    // ==============================

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // ==============================
    // 2. Scroll Animation
    // ==============================

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(function (section) {

        section.classList.add("hidden");

        observer.observe(section);

    });


    // ==============================
    // 3. Typing Effect
    // ==============================

    const typingElement = document.querySelector(".typing");

    if (typingElement) {

        const text = "AI & Machine Learning Enthusiast";

        let index = 0;

        function typeText() {

            if (index < text.length) {

                typingElement.textContent += text.charAt(index);

                index++;

                setTimeout(typeText, 80);

            }

        }

        typeText();

    }


    // ==============================
    // 4. Navbar Active Link
    // ==============================

    const sectionsForNav = document.querySelectorAll("section[id]");
    const linksForNav = document.querySelectorAll("nav a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sectionsForNav.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        linksForNav.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });

});