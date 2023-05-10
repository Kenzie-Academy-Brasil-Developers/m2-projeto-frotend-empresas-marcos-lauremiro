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

// RENDER ADMIN PAGE ========================

export function showSelect(arrayEmpresas) {
    const select = document.querySelector('.select')
    
    arrayEmpresas.forEach(empresa => {
        const opt = document.createElement('option')

        select.appendChild(opt)

        opt.innerText = empresa.name
        opt.value = empresa.name

        select.addEventListener('change', async (e) => {
            if(e.target.value == All){
                //não renderiza departamento
                //mas todos os usuarios cadastrados sim
            }else{
                //renderiza o departamento da empresa selecionada
            }
        })
    });
}

export function renderDepartamentos (arrayDepartamentos) {
    const departamentos = document.querySelector('.dep')

    arrayDepartamentos.forEach( departamento => {
        const li = document.createElement('li')
        const divNames = document.createElement('div')
        const h2 = document.createElement('h2')
        const pDescript = document.createElement('p')
        const pNameCompani = document.createElement('p')

        const divIcons = document.createElement('div')
        const imgEyes = document.createElement('img')
        const imgPen = document.createElement('img')
        const imgTrash = document.createElement('img')


        departamentos.appendChild(li)
        li.appendChild(divNames)
        divNames.appendChild(h2)
        divNames.appendChild(pDescript)
        divNames.appendChild(pNameCompani)
        
        li.appendChild(divIcons)
        divIcons.appendChild(imgEyes)
        divIcons.appendChild(imgPen)
        divIcons.appendChild(imgTrash)


        divNames.classList.add('names')
        h2.innerHTML = departamento.name
        pDescript.innerHTML = departamento.descript
        pNameCompani.innerHTML = compania.name

        divIcons.classList.add('icons')
        imgEyes.src = '../assets/img/Vector.svg'
        imgEyes.classList.add('view')

        imgPen.src = '../assets/img/pen.svg'
        imgPen.classList.add('edit')
        
        imgTrash.src = '../assets/img/lixo.svg'
        imgTrash.classList.add('delet')

    })
}