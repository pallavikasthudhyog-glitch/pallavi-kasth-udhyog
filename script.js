/* =========================================================
   PALLAVI KASTH UDHYOG
   WEBSITE JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    formMessage.textContent = "";

    try {

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            formMessage.textContent =
                "Thank you! Your inquiry has been sent successfully.";

            formMessage.style.color = "#4caf50";

            contactForm.reset();

        } else {

            formMessage.textContent =
                "Unable to send your inquiry. Please try again.";

            formMessage.style.color = "#e74c3c";

        }

    } catch (error) {

        formMessage.textContent =
            "Network error. Please check your internet and try again.";

        formMessage.style.color = "#e74c3c";

    }

    submitButton.disabled = false;
    submitButton.textContent = "Send Inquiry";

});

/* ================= SIMPLE IMAGE FALLBACK ================= */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        this.style.backgroundColor = "#3a2619";

        this.style.minHeight = "100px";

    });

});
