document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const form = document.getElementById('loginForm');
   
    username.setCustomValidity('');
    password.setCustomValidity('');


    if (username.value.trim() === '') {
        username.setCustomValidity('Please enter your username');
        username.reportValidity(); 
    } else if (password.value.trim() === '') {
        password.setCustomValidity('Please enter your password');
        password.reportValidity();
    } else if (password.value.length < 6) {
        password.setCustomValidity('Password must be at least 6 characters');
        password.reportValidity();
    } else {
        alert('Form submitted successfully!');

        form.reset();
    }
});

// Modal functionality
const modal = document.getElementById('forgotPasswordModal');
const forgotPasswordLink = document.querySelector('.fotter a:first-child');
const closeModal = document.querySelector('.close');

forgotPasswordLink.onclick = function() {
  modal.style.display = 'flex';
}

closeModal.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
