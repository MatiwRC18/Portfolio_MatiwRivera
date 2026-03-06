const scrollLinks = document.querySelectorAll('.js-scroll');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

const clearFormMessageState = () => {
  formMessage.classList.remove('form-message--error', 'form-message--success');
};

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    clearFormMessageState();

    if (!name || !email || !message) {
      formMessage.textContent = 'Please complete all fields before sending your message.';
      formMessage.classList.add('form-message--error');
      return;
    }

    if (!emailRegex.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.classList.add('form-message--error');
      return;
    }

    formMessage.textContent = 'Message sent successfully. Thank you for reaching out!';
    formMessage.classList.add('form-message--success');
    contactForm.reset();
  });
}
