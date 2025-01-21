//Cómo seleccionar dentro del formulario
/* var formulario= document.getElementById("miFormulario")
var formulario2= document.forms["miFormulario"]
var formulario3= document.getElementsByTagName("form")
var formulario4=DocumentTimeline.forms[0] */

//Cómo seleccionar elementos dentro del formulario
    //miFormulario.elements[]
    //document.getElementsByTagName(InputDeviceInfo, Selection.apply.apply.)
window.onload=iniciar

function iniciar(){
    document.getElementById("enviar").addEventListener("click",validar)
}

function validar(e){
    if(validarNombre() && validarTelefono() && validarFecha() && validarCheck()&& confirm("¿Estás seguro de querer enviar?")){
        return true
    }else{
        e.preventDefault()
        return false
    }
}

function error(elemento){
    elemento.className="error"
    elemento.focus()
}
function limpiarError(elemento){
    elemento.className = "";
}

function validarNombre(){
    var elemento= document.getElementById("nombre")
    limpiarError(elemento)
    if(elemento.value==""){
        alert("Este campo no puede estar vacío")
        error(elemento)
        return false //no cumple requisito
    }
    return true// cumple el requisito
}

function validarTelefono(){
    var elemento= document.getElementById("telefono")
    if(isNaN(elemento.value)){
        alert("Debe introducir un número")
        return false //no cumple requisito
    }
    return true// cumple el requisito
}

function validarFecha(){
    var Dia=document.getElementById("dia").value
    var Mes=document.getElementById("mes").value
    var Anio=document.getElementById("anio").value
    var fecha = new Date(Anio, Mes, Dia);
    if (isNaN(fecha)) {
        alert("La fecha no es válida");
        return false;
    }
    return true;
}

function validarCheck(){
    var campoCheck=document.getElementById("mayor")
    if(!campoCheck.checked){
        alert("Debe ser mayor de edad")
        return false
    }
    return true
}

