// Selecting elements from the DOM
const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');

const registerForm = document.getElementById('registerForm');
const registerUsername = document.getElementById('registerUsername');
const registerPassword = document.getElementById('registerPassword');

// Event listener for login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add your login logic
    let username = loginUsername.value;
    let password = loginPassword.value;

    // Example: Simple validation for demonstration
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect or do something after successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Event listener for register form submission
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add your register logic
    let newUsername = registerUsername.value;
    let newPassword = registerPassword.value;

    // Example: Simple registration confirmation for demonstration
    alert(`Registration successful!\nUsername: ${newUsername}\nPassword: ${newPassword}`);
    // You can optionally add logic to store this information (e.g., in localStorage or send to a server)
});
