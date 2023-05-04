function goLogin () {
    const buttonLogin = document.querySelector('#button-login-home')

    buttonLogin.addEventListener('click', (e) => {
        location.replace('../src/pages/login.html')
    })
}

function goRegister () {
    const buttonRegister = document.querySelector('#button-register-home')

    buttonRegister.addEventListener('click', (e) => {
        location.replace('../src/pages/register.html')
    })
}
goLogin ()
goRegister ()