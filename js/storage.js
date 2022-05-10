let nomina = [{legajo: 1, nombre: "Omar Mercado", email: "omar@mercado.net", pais: "Argentina", haberes: 40000.00}]

const guardoNomina = ()=> {
    nomina != null && nomina.length > 0 ?
        localStorage.setItem('nomina', JSON.stringify(nomina)) :
        console.warn('La nómina está vacía.')
}

const recuperoNomina = ()=> {
    localStorage.getItem('nomina') != null  ?
        nomina = JSON.parse(localStorage.getItem('nomina')) :
        console.warn('No hay elementos guardados en localStorage.')
}