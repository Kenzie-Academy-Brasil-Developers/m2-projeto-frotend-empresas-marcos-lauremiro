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

    });
}

export function renderSelect(arrayCategories, empresaPorCategory) {
    const select = document.querySelector('#setor')

    arrayCategories.forEach(category => {
        const opt = document.createElement('option')
        
        select.appendChild(opt)

        opt.innerText = category.name

        opt.value = category.name
    })
    
}