const form = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Form validation and submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!usernameInput.value.trim()) {
        alert("Username is required!");
        return;
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
        alert("Enter a valid email address!");
        return;
    }

    if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }

    alert(`Welcome, ${usernameInput.value}! Your account has been created.`);
    form.reset(); // Clear the form
});

// Helper function to validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Add JavaScript functionality for form validation
const form = document.getElementById('signupForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});
