// Navigation
const bar = document.getElementById("bar");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

bar.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        navLinks.classList.remove("active");
    });
});

// Sticky Navbar
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Sign Up Form
const mainBtn = document.getElementById("mainBtn");
const heroBtn = document.getElementById("heroBtn");
const joinForm = document.querySelector(".join");

[mainBtn, heroBtn].forEach(btn => {
    btn.addEventListener("click", () => {
        joinForm.classList.toggle("showForm");
    });
});

const join = document.getElementById("join");

join.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const num = document.getElementById("num").value;

    if (!email || !pass || !num) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^\d{10}$/.test(num)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    alert("Thank You! You're Signed Up!");
    joinForm.classList.remove("showForm");
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("num").value = "";
});

// Testimonial Carousel
const testimonials = document.querySelectorAll(".testimonial");
const prevTestimonial = document.getElementById("prevTestimonial");
const nextTestimonial = document.getElementById("nextTestimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.remove("active");
        if (i === index) {
            t.classList.add("active");
        }
    });
}

prevTestimonial.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

nextTestimonial.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Schedule Filter
const dayFilter = document.getElementById("dayFilter");
const scheduleTable = document.getElementById("scheduleTable");
const rows = scheduleTable.querySelectorAll("tbody tr");

dayFilter.addEventListener("change", () => {
    const selectedDay = dayFilter.value;
    rows.forEach(row => {
        const day = row.cells[0].textContent;
        row.style.display = selectedDay === "all" || selectedDay === day ? "" : "none";
    });
});

// BMI Calculator
const calculateBmi = document.getElementById("calculateBmi");
const bmiResult = document.getElementById("bmiResult");

calculateBmi.addEventListener("click", () => {
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        bmiResult.textContent = "Please enter valid height and weight.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let status = "";
    let advice = "";

    if (bmi < 18.5) {
        status = "Underweight";
        advice = "Consider consulting a nutritionist to gain healthy weight.";
    } else if (bmi < 25) {
        status = "Normal";
        advice = "Great job! Maintain a balanced diet and exercise.";
    } else if (bmi < 30) {
        status = "Overweight";
        advice = "Incorporate cardio and consult a trainer for a plan.";
    } else {
        status = "Obese";
        advice = "Speak with a healthcare professional for guidance.";
    }

    bmiResult.textContent = `Your BMI is ${bmi} (${status}). ${advice}`;
});

// Contact Form
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you for your message! We'll get back to you soon.");
    contactForm.reset();
});

// Newsletter Form
const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value;

    if (!email) {
        alert("Please enter an email address.");
        return;
    }

    alert("Thank you for subscribing!");
    newsletterForm.reset();
});

// Fade-in Animations
const sections = document.querySelectorAll(".trainers, .testimonials, .plans, .schedule, .bmi, .contact");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
});

// Typing Effect
const headingText = "Transform Your Body Today";
const headingElement = document.querySelector(".hero-content h1");
let index = 0;

function typeHeading() {
    headingElement.textContent = headingText.slice(0, index);
    index++;
    if (index <= headingText.length) {
        setTimeout(typeHeading, 100);
    }
}

typeHeading();