document.addEventListener('DOMContentLoaded', () => {
    const steps = {
        step1: document.getElementById('step1'),
        step2: document.getElementById('step2'),
        step3: document.getElementById('step3'),
        success: document.getElementById('success')
    };

    const forms = {
        emailForm: document.getElementById('emailForm'),
        verificationForm: document.getElementById('verificationForm'),
        profileForm: document.getElementById('profileForm')
    };

    // Handle email submission
    forms.emailForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        try {
            // Here you would typically make an API call to your backend
            // to send the verification code
            await simulateApiCall({ email });
            
            showStep('step2');
            initializeVerificationInputs();
        } catch (error) {
            alert('Error sending verification code. Please try again.');
        }
    });

    // Handle verification code submission
    forms.verificationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const code = Array.from(document.querySelectorAll('.code-input'))
            .map(input => input.value)
            .join('');
        
        try {
            // Here you would typically verify the code with your backend
            await simulateApiCall({ code });
            showStep('step3');
        } catch (error) {
            alert('Invalid verification code. Please try again.');
        }
    });

    // Handle profile completion
    forms.profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            // Here you would typically create the account on your backend
            await simulateApiCall({ fullName, password });
            showStep('success');
        } catch (error) {
            alert('Error creating account. Please try again.');
        }
    });

    // Handle resend code
    document.getElementById('resendCode').addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await simulateApiCall({ action: 'resend' });
            alert('New verification code sent!');
        } catch (error) {
            alert('Error resending code. Please try again.');
        }
    });

    // Initialize verification code inputs
    function initializeVerificationInputs() {
        const inputs = document.querySelectorAll('.code-input');
        
        inputs.forEach((input, index) => {
            input.addEventListener('keyup', (e) => {
                if (e.key >= 0 && e.key <= 9) {
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                } else if (e.key === 'Backspace') {
                    if (index > 0) {
                        inputs[index - 1].focus();
                    }
                }
            });
        });
    }

    // Show specific step and hide others
    function showStep(stepId) {
        Object.keys(steps).forEach(key => {
            steps[key].classList.toggle('hidden', key !== stepId);
        });
    }

    // Simulate API call (replace with actual API calls)
    async function simulateApiCall(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('API call with data:', data);
                resolve(true);
            }, 1000);
        });
    }
}); 