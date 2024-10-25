document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('LoginPage');
    const signupForm = document.getElementById('SignUp');

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target; 
        const formData = new FormData(form);
        let message = '';

        if (form.id === 'LoginPage') {
            const name = formData.get('name');
            const email = formData.get('email');
            message = `Login form submitted! Name: ${name}, Email: ${email}`;
        } 
        
        else if (form.id === 'SignUp') {
            const username = formData.get('username');
            const email = formData.get('email');
            const password = formData.get('password1');
            const confirmPassword = formData.get('password2');

            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                return; 
            }
            message = `Signup form submitted! Username: ${username}, Email: ${email}`;
        }

        alert(message);
        form.reset();
        
        
        setTimeout(() => {
            location.reload();
        }, 1000); 
    }

    
    if (loginForm) {
        loginForm.addEventListener('submit', handleSubmit);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSubmit);
        
        
        const passwordInput = signupForm.querySelector('input[type="password"]:nth-of-type(1)');
        const confirmPasswordInput = signupForm.querySelector('input[type="password"]:nth-of-type(2)');

        confirmPasswordInput.addEventListener('input', () => {
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.setCustomValidity("Passwords do not match");
                confirmPasswordInput.reportValidity();
            } else {
                confirmPasswordInput.setCustomValidity("");
            }
        });
    }

    
    function adjustFormStyles() {
        const forms = [loginForm, signupForm];
        forms.forEach(form => {
            if (form) {
                const inputs = form.querySelectorAll('input, button');
                inputs.forEach(input => {
                    input.style.width = '100%'; 
                    input.style.boxSizing = 'border-box'; 
                });
            }
        });
    }

    
    adjustFormStyles();
    window.addEventListener('resize', adjustFormStyles);
});
