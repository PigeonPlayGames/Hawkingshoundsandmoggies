const bookBtn = document.getElementById("bookBtn");
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

// Smooth scroll to contact form
bookBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});

// Simple form submit feedback
form.addEventListener("submit", (e) => {
  e.preventDefault();

  message.style.color = "#3b7a57";
  message.textContent = "Thank you! We'll get back to you shortly 🐾";

  form.reset();
});
