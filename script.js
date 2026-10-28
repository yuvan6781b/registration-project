const form = document.getElementById('registrationForm');
const alertBox = document.getElementById('notificationAlert');
const alertMessage = document.getElementById('notificationMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
 

  // Reset alert visibility and classes
  alertBox.classList.add('d-none');
  alertBox.className = 'alert fade show'; // Clear previous alert colors

  // Validation logic
  if (!name || !email || !password) {
    showNotification('Please fill in all required fields.', 'alert-danger');
  } else {
    showNotification(`Welcome, ${name}! Registration successful.`, 'alert-success');
    form.reset(); // Clear form inputs on success
  }
});

function showNotification(message, alertType) {
  alertMessage.textContent = message;
  alertBox.classList.add(alertType);
  alertBox.classList.remove('d-none');
}