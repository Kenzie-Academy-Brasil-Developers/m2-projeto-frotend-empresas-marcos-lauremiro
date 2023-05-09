import { companesCategory } from "./request.js";

// RENDER HOME PAGE ========================

export function renderHomePageEmpresas(arrayEmpresas, arrayCategory) {
    const ul = document.querySelector('.lista-de-empresas')
    ul.innerHTML = ''

    arrayEmpresas.forEach(empresa => {         
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const span = document.createElement('span')

        ul.appendChild(li)
        li.appendChild(h3)
        li.appendChild(span)

        h3.innerHTML = empresa.name

        arrayCategory.forEach( category => {
            if(category.id == empresa.category_id){
                span.innerText = category.name
            }
        })
    });
}

export function renderSelect(arrayCategories, arrayEmpresas) {
    const select = document.querySelector('#setor')

    arrayCategories.forEach(category => {
        const opt = document.createElement('option')
        
        select.appendChild(opt)

        opt.innerText = category.name

        opt.value = category.name

        select.addEventListener('change', async (e) => {
            if(e.target.value == 'All'){
                renderHomePageEmpresas(arrayEmpresas, arrayCategories)
            }else{
                const empresas = await companesCategory(e.target.value)
                renderHomePageEmpresas(empresas, arrayCategories)
            }
            console.log(e.target.value)
        })
    })
    
}