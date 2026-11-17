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


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;


    if (
        name.trim() === "" ||
        phone.trim() === "" ||
        message.trim() === ""
    ) {

        formMessage.textContent =
            "Please fill in all required fields.";

        return;

    }


    formMessage.textContent =
        "Thank you! Your inquiry has been prepared.";


    /*
       Later we can connect this form to:

       WhatsApp
       Email
       Formspree
       Google Forms
       Your own backend

       so the message actually reaches your father.
    */


    contactForm.reset();

});


/* ================= SIMPLE IMAGE FALLBACK ================= */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        this.style.backgroundColor = "#3a2619";

        this.style.minHeight = "100px";

    });

});