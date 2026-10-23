const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');

function closeNavigation() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  primaryNav.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  primaryNav.classList.toggle('is-open', !isOpen);
});

primaryNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeNavigation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNavigation();
});

document.querySelectorAll('.order-button').forEach((button) => {
  button.addEventListener('click', () => {
    const feedback = button.parentElement.querySelector('.order-feedback');
    feedback.textContent = `${button.dataset.item} added to your order. See you soon!`;
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const name = contactForm.elements.name.value.trim();
  formFeedback.classList.remove('is-error');
  formFeedback.textContent = `Thanks, ${name}! Your note is ready. This demo does not send messages.`;
  contactForm.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
