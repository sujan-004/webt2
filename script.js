$(document).ready(function() {
    // Custom validation methods
    function validateName(name) {
        return name.length >= 2 && /^[a-zA-Z\s]+$/.test(name);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    // Form submission handling
    $('#registrationForm').on('submit', function(e) {
        let isValid = true;

        // Reset previous error messages
        $('.error').text('');

        // Full Name Validation
        const fullName = $('#fullName').val().trim();
        if (!validateName(fullName)) {
            $('#fullNameError').text('Please enter a valid name');
            isValid = false;
        }

        // Email Validation
        const email = $('#email').val().trim();
        if (!validateEmail(email)) {
            $('#emailError').text('Please enter a valid email address');
            isValid = false;
        }

        // Phone Validation
        const phone = $('#phone').val().trim();
        if (!validatePhone(phone)) {
            $('#phoneError').text('Please enter a 10-digit phone number');
            isValid = false;
        }

        // Date of Birth Validation
        const dob = $('#dob').val();
        if (!dob) {
            $('#dobError').text('Please select your date of birth');
            isValid = false;
        }

        // Gender Validation
        const gender = $('#gender').val();
        if (!gender) {
            $('#genderError').text('Please select your gender');
            isValid = false;
        }

        // Password Validation
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        
        if (!validatePassword(password)) {
            $('#passwordError').text('Password must be at least 8 characters long');
            isValid = false;
        }

        if (password !== confirmPassword) {
            $('#confirmPasswordError').text('Passwords do not match');
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
        }
    });
});