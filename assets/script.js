const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".gallery-item");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;

    items.forEach(item => {
      if (selected === "all" || item.classList.contains(selected)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();

  if (!name || !phone) {
    message.textContent = "Please fill in your name and phone number.";
    return;
  }

  message.textContent =
    "Thank you, " + name + ". Your enquiry is ready to be connected to WhatsApp/email.";

  form.reset();
});
