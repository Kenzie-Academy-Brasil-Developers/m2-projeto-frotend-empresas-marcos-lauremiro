import { toast } from "./toast.js"

export const red = '#FF5630'
export const green = '#36B37E'

const baseURL = 'http://localhost:3333'

const token = JSON.parse(localStorage.getItem('@token'))

const requestHeader = {
    'Content-type': 'application/json',
    "Authorization" : `Bearer ${token}`
}

// CATEGORIAS E EMPRESAS============================

export async function getEmpresas(){
    const empresas = await fetch(`${baseURL}/companies/readAll`, {
        method: 'GET'
    })
    .then(async (res) => {
        if(res.ok){
            return res.json()
        }else{
            console.log('algo errado')
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

// CADASTRO============================

export async function register(createBody){
    const register = await fetch(`${baseURL}/employees/create`, {
        method: "POST",
        headers: requestHeader,
        body: JSON.stringify(createBody)
    })
    .then(async (res) => {
        if(res.ok){
            const response = await res.json()

            toast(green, 'Conta criada com sucesso')
            
            setTimeout(() => {
                location.replace("../pages/login.html")
            }, 500)

            return response
        }else{
            const response = await res.json()

            toast(red, await response.message)
        }
    })
}

// LOGIN============================

export async function loginRequest(loginBody){
    const loginfunc = await fetch (`${baseURL}/auth/login`, {
        method: "POST",
        headers: requestHeader,
        body: JSON.stringify(loginBody)

    })
    .then(async (res) => {
        if(res.ok){
            const response = await res.json()
            
            const {authToken, isAdm} = response

            localStorage.setItem('@token', JSON.stringify(authToken))
            localStorage.setItem('@isAdm', JSON.stringify(isAdm))    
            
            console.log(response)
            
            toast(green, 'Login realizado')

            if(isAdm){
                setTimeout(() => {
                    location.replace("../pages/adminPage.html")
                }, 1000)
            }else{
                setTimeout(() => {
                    location.replace("../pages/userPages.html")
                }, 1000)
            } 
            return response
        }else{
            const response = await res.json()

            toast(red, response.message)
        }
    })
    return loginfunc
}

// ADMIN============================

export async function departaments (){
    const departamentos = await fetch(`${baseURL}/departments/readAll`, {
        method: 'GET',
        headers: requestHeader
    })
    .then(async (res) => {
        if(res.ok){
            const response = await res.json()

            return response
        }
    })
    return departamentos
}

export async function departamentPorEmpresa (empresa_id) {
    const departamento = await fetch(`${baseURL}/departments/readByCompany/${empresa_id}`, {
        method: 'GET',
        headers: requestHeader
    })
    .then(async (res) => {
        if(res.ok){
            const response = await res.json()

            return response
        }
    })
    return departamento
}

export async function companiasPorId (idEmpresa) {
    const empresasPorId = await fetch(`${baseURL}/companies/readById/${idEmpresa}`,{
        method: 'GET',
        headers: requestHeader
    })
    .then(async (res) => {
        if(res.ok){
            const response = await res.json()

            return response
        }
    })
    return empresasPorId
}

export async function allUsers () {
    const users = await fetch(`${baseURL}/employees/readAll`, {
        method: 'GET',
        headers: requestHeader
    })
    .then(async (res) => {
        if(res.ok){
            const response = await res.json()

            return response
        }
    })
    return users
}