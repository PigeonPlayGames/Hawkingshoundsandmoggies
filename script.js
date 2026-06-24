const bookBtn = document.getElementById("bookBtn");
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

bookBtn.addEventListener("click", () => {
  document
    .getElementById("contact")
    .scrollIntoView({
      behavior: "smooth"
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  message.textContent =
    "Thank you! We'll get back to you shortly 🐾";

  form.reset();
});
