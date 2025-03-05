window.onload=iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener("click",validar,false)//función validar comprueba que todos son true
}

function validarNombre(){
    var elemento= document.getElementById("nombre")
    if(!elemento.checkValidity()){
        //error(elemento)   ahora vamos a usar nuestra propia funcion de error ya que checkvalidity es para mejorar los mensajes de error personalizando .
        if(elemento.validity.valueMissing){//sobre escribimos el mensaje predeterminado de checkvalidity para escribir la nuestra.
            error2(elemento,"debe introducir un nombre.No vacío")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"El nombre debe tener entre 2 y 15 caracteres")
        }
        return false
    }
    return true
}//Si no me passa el checkvalidity que me de error y me devuelva false , si es al contrario devuelve true

function validarEdad(){
    var elemento= document.getElementById("edad")
    if(elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir una edad")
        }
        if(elemento.validity.rangerOverflow){
            error2(elemento,"La edad debe ser menor de 100 años")
        }
        if(elemento.validity.rangerUnderflow){
            error2(elemento,"El valor debe ser igual o mayor de 18 años")
        }
        return false
    }
    return true
}

function validarTelefono(){
    var elemento= document.getElementById("telefono")
    if(elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir una telefono")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"el telefono debe tener 9 digitos") 
        }
        
        return false
    }
    return true
}

function validar(e){
    borrarError()
    if(validarNombre() && validarEdad() && validarTelefono() && confirm("¿Seguro que quieres enviar el formulario?")){
        return true
    }else{
        e.preventDefault()
        return false
    }
}
/* function error(elemento){
    document.getElementById("mensajeError").innerHTML=elemento.validationMessage
    elemento.className="error"
    elemento.focus()
} */            //Ahora no usamos la funcion error predeterminada ya que estamos creando la personalizada de error2
function borrarError(formulario){
    var formulario=document.forms[0]
    for( var i=0; i<formulario.length ; i++){
        formulario.elements[i].className=""
    }
} 

function error2(elemento,mensaje){
    document.getElementById("mensajeError").innerHTML=mensaje
    elemento.className="error"
    elemento.focus()
    
}

