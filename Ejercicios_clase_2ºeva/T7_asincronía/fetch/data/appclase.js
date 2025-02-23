const cargarTxtBtn=document.querySelector('#cargarTxt');
const cargarJsonBtn=document.querySelector('#cargarJSON')
const cargarJsonArrayBtn=document.querySelector('#cargarJSONArray')
cargarJsonBtn.addEventListener('click',obtenerDatos2);
cargarTxtBtn.addEventListener('click',obtenerDatos);
cargarJsonArrayBtn.addEventListener('click',obtenerDatos3);
///datos.txt
function obtenerDatos(){
    const url='datos.txt'
    fetch(url)
        .then(respuesta=>{
            console.log(respuesta)
            console.log(respuesta.status)
            console.log(respuesta.statusText)
            console.log(respuesta.url) 

            return respuesta.text()
        })
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.log(error)
        })
}
//empleado.json
function obtenerDatos2() {
    const url = 'empleado.json';
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(resultado => {
            mostrarHTML(resultado);
            console.log(resultado);
        })
        .catch(error => {
            console.log(error);
        });
}
//empleados.json
function obtenerDatos3() {
    const url = 'empleados.json';
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(resultado => {
            resultado.forEach(empleado => {
                mostrarHTML(empleado);
            });
            console.log(resultado);
        })
        .catch(error => {
            console.log(error);
        });
}

function mostrarHTML({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('#contenido');
    const empleadoHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
    contenido.innerHTML += empleadoHTML;
}
