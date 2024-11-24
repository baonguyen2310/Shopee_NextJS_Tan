'use client'

const Signup = () => {
    async function handleSignupBtn(value) {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const fullname = document.getElementById('fullname').value
        const phone = document.getElementById('phone').value

        const response = await fetch('https://form-test-api.vercel.app/api/signup'), {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            }
        }

    }

    return 
}

