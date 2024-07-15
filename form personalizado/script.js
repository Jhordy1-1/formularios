const formulario = document.getElementById('formulario')
const datosTabla = document.getElementById('datos-tabla')
const datos = []
const platos = {
    "lomo":['Lomo con verduras salteadas',15],
    "chuleta":['Chuleta con salsa de tamarindo',12],
    "pollo":['Pollo al horno con salsa de champiñones',10]
}
const postres = {
    "fresas":['Fresas con crema',3],
    "dulce":['Dulce de 3 leches',2],
    "pastel":['Pastel de zanahoria con chocolate',5]
}
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const postre = postres[document.querySelector('input[name="postre"]:checked').value]
    const plato = platos[document.querySelector('input[name="plato"]:checked').value]
    const dato = {plato,postre}
    datos.push(dato)
    mostrarDatos()
    formulario.reset()
})

function mostrarDatos() {
    datosTabla.innerHTML=''
    datos.forEach((dato)=>{
        const tr = document.createElement('tr')
        tr.innerHTML=`<td>${dato.plato[0]}</td>
                        <td>$${dato.plato[1]}</td>
                        <td>${dato.postre[0]}</td>
                        <td>$${dato.postre[1]}</td>
                        <td>$${dato.plato[1]+dato.postre[1]}</td>`
        datosTabla.appendChild(tr)
    })
}