// JavaScript for Login Form

// Adding functionality to check form inputs
const form = document.querySelector('.form-box form');
const usernameInput = form.querySelector('input[type="text"]');
const passwordInput = form.querySelector('input[type="password"]');
const loginButton = form.querySelector('.btn');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    if (usernameInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields!");
    } else {
        alert(`Welcome, ${usernameInput.value}! You have successfully logged in.`);
        // Optionally redirect or clear fields
        form.reset();
    }
});

// Adding hover effect to button
loginButton.addEventListener('mouseover', () => {
    loginButton.style.backgroundColor = '#0ef';
    loginButton.style.color = '#081b29';
});

loginButton.addEventListener('mouseout', () => {
    loginButton.style.backgroundColor = 'transparent';
    loginButton.style.color = '#fff';
});

// Dynamic welcome text
const welcomeText = document.querySelector('.info-text h2');
const currentTime = new Date().getHours();
if (currentTime < 12) {
    welcomeText.textContent = "Good Morning! Welcome back!";
} else if (currentTime < 18) {
    welcomeText.textContent = "Good Afternoon! Welcome back!";
} else {
    welcomeText.textContent = "Good Evening! Welcome back!";
}
