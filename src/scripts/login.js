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

function login () {
    const inpEmail = document.querySelector('#email-login')
    const inpPassword = document.querySelector('#password-login')
    let loginBody = {}

    document.querySelector('#button-login').addEventListener('click', (e) =>{
        e.preventDefault()
        
    })

}

goRegister ()
goHome ()