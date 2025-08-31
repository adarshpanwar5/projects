// script.js

// Smooth scroll to sections
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Simple form validation
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[placeholder="Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
    } else {
      alert('Thanks for contacting me! I will get back to you soon.');
      this.reset();
    }
  });
}

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.className = 'scroll-top';
scrollBtn.innerHTML = '↑';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
const toggleBtn = document.createElement('div');
toggleBtn.className = 'theme-toggle';
toggleBtn.innerHTML = '🌓';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Typing effect for heading
const typeText = document.querySelector('.intro-text h2');
const text = typeText?.innerText || '';
let index = 0;
typeText.innerText = '';

function typeWriter() {
  if (index < text.length) {
    typeText.innerText += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

