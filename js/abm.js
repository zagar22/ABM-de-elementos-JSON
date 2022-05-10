const cargoPaises = ()=> {
    let listado = ''
    listaPaises.map((pais)=> {listado += `<option>${pais}</option>`})
    paises.innerHTML = listado
}

document.addEventListener("DOMContentLoaded", ()=> {
    recuperoNomina()
    cargoPaises()
})

btnNuevo.addEventListener("click", ()=> {
    if (btnNuevo.innerText == "NUEVO") {
        btnNuevo.innerText = "GUARDAR"
        limpioCampos()
        nombre.focus()
    } else {
        btnNuevo.innerText = "NUEVO"
        guardoEmpleado()
    }
})

const guardoEmpleado = ()=> {
    if (nombre.value.trim() == '') {
        alert('Debe ingresar datos válidos.')
        return
    }
    let empleado = {legajo: 0, nombre: "", email: "", pais: "", haberes: 0} //estructura temporal
        empleado.legajo = nomina.length + 1
        empleado.nombre = nombre.value.trim()
        empleado.email = email.value.trim()
        empleado.pais = paises.value
        empleado.haberes = parseFloat(haberes.value)
        nomina.push(empleado)
        guardoNomina()
        console.clear()
        console.log('Se guardó el registro ingresado.')
        console.table(nomina)
}

const editarEmpleado = ()=> {
    debugger
    if (legajo.value != '') {
        let empleado = {legajo: 0, nombre: "", email: "", pais: "", haberes: 0} //estructura temporal
        nomina.filter(n => n.legajo == parseInt(legajo.value))
              .map(empleado => {
                    empleado.legajo = parseInt(legajo.value)
                    empleado.nombre = nombre.value.trim()
                    empleado.email = email.value.trim()
                    empleado.pais = paises.value
                    empleado.haberes = parseFloat(haberes.value)    
        })
        console.clear()
        console.log(`Empleado ${nombre.value} modificado correctamente.`)
        guardoNomina()
    } else {
        alert('Primero debe seleccionar un empleado.')
    }
}
btnEditar.addEventListener("click", editarEmpleado)

const eliminarEmpleado = ()=> {
    debugger
    if (legajo.value != '') {
        const respuesta = confirm(`¿Está seguro de eliminar a ${nombre.value}?`)
        if (respuesta) {
            posicion = nomina.findIndex(n => n.legajo == parseInt(legajo.value))
            nomina.splice(posicion, 1)
            guardoNomina()
            console.clear()
            console.log(`Se eliminó correctamente el empleado seleccionado.`)
            }
    } else {
        alert('Primero debe seleccionar un empleado.')
    }
}
btnEliminar.addEventListener("click", eliminarEmpleado)

const buscarEmpleado = ()=> {
    legajoID = parseInt(prompt("Ingrese el número de legajo a buscar:"))
    resultado = nomina.find(n => n.legajo == legajoID)
    if (resultado != undefined && resultado != "") {
        legajo.value = resultado.legajo
        nombre.value = resultado.nombre
        email.value = resultado.email
        paises.value = resultado.pais
        haberes.value = resultado.haberes
    } else {
        console.warn(`No se encontró el legajo ${legajoID}`)
    }
}
btnBuscar.addEventListener("click", buscarEmpleado)

const limpioCampos = ()=> {
    legajo.value = ""
    nombre.value = ""
    email.value = ""
    paises.innerText = ""
    haberes.value = 0
}

//Alternativa a abrir URL en nueva pestaña
// const abrirPagina = ()=> {
//     window.open("https://www.google.com.ar/", "_blank", "width: 800, height: 400, scrollbars: vertical, urlBar: none, menu: none, toolbar: NO")
// }