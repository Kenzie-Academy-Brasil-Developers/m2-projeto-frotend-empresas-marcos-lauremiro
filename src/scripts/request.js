

const baseURL = 'http://localhost:3333'
const requestHeader = {
    'Content-type': 'application/json'
}

// CATEGORIAS E EMPRESAS============================

export async function getEmpresas(){
    const empresas = await fetch(`${baseURL}/companies/readAll`, {
        method: 'GET'
    })
    .then(async (res) => {
        if(res.ok){
            return res.json()
        }
    })
    return empresas
}

export async function getCategory(){
    const category = await fetch(`${baseURL}/categories/readAll`, {
        method: 'GET'
    })
    .then(async (res) => {
        if(res.ok){
            return res.json()
        }
    })
    return category
}

export async function companesCategory(nomeCategoria){
    const empresa = await fetch(`${baseURL}/companies/readByCategory/${nomeCategoria}` , {
        method: 'GET'
    })
    .then(async (res) => {
        if(res.ok){
            return res.json()
        }
    })
    return empresa
}
//console.log(await getEmpresas())

// CADASTRO============================

// export async function register(crateBody){
//     const register = await fetch(`${baseURL}/employees/create`, {
//         method: "POST",
//         headers: requestHeader,
//         body: JSON.stringify(crateBody)
//     })
//     .then(async (res) => {
//         if(res.ok){
//             const 
//         }
//     })
// }

// LOGIN============================

export async function login(loginBody){
    const loginfunc = await fetch (`${baseURL}/auth/login`, {
        method: 'POST',
        headers: requestHeader,
        body: loginBody
    })
    .then(async (res) => {
        if(res.ok){
            const response = await res.json()
            
        }
    })
}