const eyeClosed = document.getElementById('eyeClosed');
const eyeOpen = document.getElementById('eyeOpen');
const passwordInput = document.getElementById('password');

// Add click event to both icons
eyeClosed.addEventListener('click', togglePasswordVisibility);
eyeOpen.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
    // Toggle the password input type
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle icon visibility
    if (type === 'password') {
        eyeClosed.style.display = 'block';
        eyeOpen.style.display = 'none';
    } else {
        eyeClosed.style.display = 'none';
        eyeOpen.style.display = 'block';
    }
}