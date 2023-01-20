let GetDiaSemana = (dia) => {
    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
    return `${diasSemana[dia]}`
}

let GetMes = (mes) => {
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    return `${meses[mes]}`
}

let hora = () => {
    let varhora = new Date();
    return (`${varhora.getHours()}:${varhora.getMinutes()}:${varhora.getSeconds()}`)
}

let fecha = () => {
    let varfecha = new Date()
    return (`${GetDiaSemana(varfecha.getDay())}, ${varfecha.getDate()} ${GetMes(varfecha.getMonth())}`)
}
let mostrarDatos = () => {
    let horatxt = hora()
    let fechatxt = fecha()
    document.getElementById("hora").innerHTML = horatxt
    document.getElementById("fecha").innerHTML = fechatxt

}
let seguidorcolores = 0
let colores = () => {
    const paleta = ['#7086B7', '#8B8BA6', '#F5F0BB', '#6AA6AD', '#E7CCA1', '#F6BFBF', '#A08FAA', '#F4D2D2', '#8DC1DF',
        '#90C9AC', '#F4D2D2', '#73A9AE', '#EAE6AA']
    document.getElementById('contenedor').style.backgroundColor = paleta[seguidorcolores]
    seguidorcolores++
    seguidorcolores>=paleta.length ? seguidorcolores=0 : console.log('')
}

setInterval(() => {
    mostrarDatos()
    colores()

}, 1000)




