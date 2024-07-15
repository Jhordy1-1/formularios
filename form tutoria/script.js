const formulario = document.getElementById('formulario')
const datosTabla = document.getElementById('datos-tabla')
const datos = []

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e)

    const nombre = e.target[0].value
    const correo = e.target[1].value
    const edad = e.target[2].value
    const genero = document.querySelector('input[name="genero"]:checked').value
    const pais = e.target[5].value
    const terminos = e.target[6].checked?"SI":"NO"
    const dato = {nombre,correo,edad,genero,pais,terminos}
    datos.push(dato)
    mostrarDatos()
})

function mostrarDatos() {
    datosTabla.innerHTML=''
    datos.forEach((dato)=>{
        const tr = document.createElement('tr')
        tr.innerHTML=`<td>${dato.nombre}</td>
                        <td>${dato.correo}</td>
                        <td>${dato.edad}</td>
                        <td>${dato.genero}</td>
                        <td>${dato.pais}</td>
                        <td>${dato.terminos}</td>`
        datosTabla.appendChild(tr)
    })
}