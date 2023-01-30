const opciontacos = document.getElementById('opciontacos')
const opcioncomidarapida = document.getElementById('opcioncomidarapida')
const opcionfondita = document.getElementById('opcionfondita')
const opcionexoticos = document.getElementById('opcionexoticos')

const contenttacos = document.getElementById('contenttacos')
const contentcomidarapida = document.getElementById('contentcomidarapida')
const contentfondita = document.getElementById('contentfondita')
const contentcomidaexotica = document.getElementById('contentcomidaexotica')

let chose = 1

const changeOption = () =>{
    chose == 1 ?(
        opciontacos.classList.value = 'opcion option-active',
        contenttacos.classList.value = 'content content-active'
        )
        : (
        opciontacos.classList.value = 'opcion',
        contenttacos.classList.value = 'content'
        )

    chose == 2 ?(
            opcioncomidarapida.classList.value = 'opcion option-active',
            contentcomidarapida.classList.value = 'content content-active'
            )
            : (
            opcioncomidarapida.classList.value = 'opcion',
            contentcomidarapida.classList.value = 'content'
            )
    chose == 3 ?(
            opcionfondita.classList.value = 'opcion option-active',
            contentfondita.classList.value = 'content content-active'
                )
                : (
                opcionfondita.classList.value = 'opcion',
                contentfondita.classList.value = 'content'
                )
    chose == 4 ?(
            opcionexoticos.classList.value = 'opcion option-active',
            contentcomidaexotica.classList.value = 'content content-active'
                )
                : (
            opcionexoticos.classList.value = 'opcion',    
            contentcomidaexotica.classList.value = 'content'
                        )
}
opciontacos.addEventListener('click', ()=>{
    chose = 1
    changeOption()
})

opcioncomidarapida.addEventListener('click', ()=>{
    chose = 2
    changeOption()
})

opcionfondita.addEventListener('click', ()=>{
    chose = 3
    changeOption()
})

opcionexoticos.addEventListener('click', ()=>{
    chose = 4
    changeOption()
})