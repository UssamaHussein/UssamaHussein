// Toggle mobile nav (optional – can be expanded later)
// Currently not active because we don't have a hamburger icon

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Basic form validation (client side)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // For now: simulate sending message
  alert("Thanks for your message, " + name + "!");

  this.reset();
});
