function goHome () {
    const buttonHome = document.querySelector('#button-home-login')

    buttonHome.addEventListener('click', (e) => {
        location.replace('../../index.html')
    })
}

function goRegister () {
    const buttonRegister = document.querySelector('#button-register-login')
    buttonRegister.addEventListener('click', (e) => {
        location.replace('../pages/register.html')
    })
}

goRegister ()
goHome ()