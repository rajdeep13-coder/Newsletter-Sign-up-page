const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!emailRegex.test(emailInput.value)) {
    message.textContent = '🚫 Invalid email address!';
    message.style.color = '#ff4b4b';
    emailInput.style.boxShadow = '0 0 0 2px #ff4b4b';
    setTimeout(() => {
      emailInput.style.boxShadow = '';
      message.style.color = '#fff';
    }, 1000);
    return;
  }
  message.textContent = '🎉 Thank you for subscribing!';
  message.style.color = '#00fff7';
  emailInput.value = '';
});
