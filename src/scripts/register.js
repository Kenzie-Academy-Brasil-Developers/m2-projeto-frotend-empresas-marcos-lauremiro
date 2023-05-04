function goHome () {
    const buttonHome = document.querySelector('#button-register-home')

    buttonHome.addEventListener('click', (e) => {
        location.replace('../../index.html')
    })
}

function goLogin () {
    const buttonLogin = document.querySelector('#button-register-login')

    buttonLogin.addEventListener('click', (e) => {
        location.replace('../pages/login.html')
    })
}

goLogin ()
goHome ()