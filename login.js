// Get form elements
const emailInput = document.querySelector('.second-input:nth-of-type(1)');
const passwordInput = document.querySelector('.second-input:nth-of-type(2)');
const loginBtn = document.querySelector('.login-btn');

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password validation function
function isValidPassword(password) {
    return password.length >= 6;
}

// Show error by changing border and placeholder
function showError(input, message) {
    input.style.border = '2px solid #ff4444';
    input.style.outline = 'none';
    
    // Store original placeholder
    if (!input.dataset.originalPlaceholder) {
        input.dataset.originalPlaceholder = input.placeholder;
    }
    
    // Change placeholder to error message
    input.placeholder = message;
    input.style.color = '#ff4444';
    input.classList.add('input-error');
}

// Clear error
function clearError(input) {
    input.style.border = 'none';
    
    // Restore original placeholder
    if (input.dataset.originalPlaceholder) {
        input.placeholder = input.dataset.originalPlaceholder;
    }
    
    input.style.color = '#363946';
    input.classList.remove('input-error');
}

// Input event listeners for real-time validation
emailInput.addEventListener('input', function() {
    clearError(this);
});

passwordInput.addEventListener('input', function() {
    clearError(this);
});

// Clear error on focus
emailInput.addEventListener('focus', function() {
    if (this.classList.contains('input-error')) {
        clearError(this);
    }
    this.style.outline = '2px solid #363946';
    this.style.transition = 'outline 0.3s ease';
});

passwordInput.addEventListener('focus', function() {
    if (this.classList.contains('input-error')) {
        clearError(this);
    }
    this.style.outline = '2px solid #363946';
    this.style.transition = 'outline 0.3s ease';
});

emailInput.addEventListener('blur', function() {
    if (!this.classList.contains('input-error')) {
        this.style.outline = 'none';
    }
});

passwordInput.addEventListener('blur', function() {
    if (!this.classList.contains('input-error')) {
        this.style.outline = 'none';
    }
});

// Form submission
loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Clear previous errors
    clearError(emailInput);
    clearError(passwordInput);
    
    // Validate email
    if (!emailInput.value.trim()) {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email');
        isValid = false;
    }
    
    // Validate password
    if (!passwordInput.value) {
        showError(passwordInput, 'Password is required');
        isValid = false;
    } else if (!isValidPassword(passwordInput.value)) {
        showError(passwordInput, 'Password must be at least 6 characters');
        isValid = false;
    }
    
    // If valid, proceed with login
    if (isValid) {
        // Show loading state
        loginBtn.textContent = 'Logging in...';
        loginBtn.disabled = true;
        loginBtn.style.opacity = '0.7';
        loginBtn.style.cursor = 'not-allowed';
        
        // Simulate login request (replace with actual login logic)
        setTimeout(() => {
            console.log('Login successful!');
            console.log('Email:', emailInput.value);
            
            // Reset button
            loginBtn.textContent = 'Login';
            loginBtn.disabled = false;
            loginBtn.style.opacity = '1';
            loginBtn.style.cursor = 'pointer';
            
            // Redirect or show success message
            // window.location.href = 'dashboard.html';
            alert('Login successful!');
        }, 1500);
    }
});

// Prevent form submission on Enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        loginBtn.click();
    }
});