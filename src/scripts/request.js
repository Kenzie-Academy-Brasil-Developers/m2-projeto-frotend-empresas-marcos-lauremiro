
const baseURL = 'http://localhost:3333'


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