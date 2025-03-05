/* 

Realizar una validación (débil, en el lado del cliente) utilizando indistintamente los métodos vistos en clase (los tres deben estar representados) con las siguientes restricciones:
 - Ningún elemento vacío
 - NIF correcto ( comprobar letra)
 - Mensaje: de entre 2 y 500 caracteres
 - Color por defecto: azul 
 - Días: seleccionar al menos dos
 - Preferente: por defecto marcado el lunes
 - Botón de “Haz click sobre mí”: ir a Google.com

 
 */

    
    window.addEventListener("load", inicio);

    function inicio(){
        document.getElementById("fechas").addEventListener( "change", añadirCurso); 
        document.getElementById("seleccionar").addEventListener("click", seleccionarTodos);
        document.getElementById("deseleccionar").addEventListener("click", deseleccionarTodos);
        document.getElementById("mensaje").addEventListener( "click", letrasRestantes);
        document.getElementById("formulario").addEventListener("change", validarDias);
        document.getElementById("nif").addEventListener("input", validarNIF);
        
    }

    function añadirCurso(e){ 
        if(e.target.value==="nuevoCurso"){ 
        var opcion = document.createElement("option");
        var texto =prompt("Escribe el curso que quieras añadir"); 
        opcion.textContent=texto;
        var contenido=document.getElementById("fechas");
        contenido.insertBefore(opcion, document.getElementById("nuevoCurso"));
        opcion.value=""; 
        }    
    }

    function seleccionarTodos(){
        for (let i=0; i < document.getElementsByName("dias").length; i++) {
            if(document.getElementsByName("dias")[i].type === "checkbox" && document.getElementsByName("dias")[i].id!=="seleccionar") 
            {
                document.getElementsByName("dias")[i].checked = true;
                
            }
        }
    }

    function deseleccionarTodos(){
        for (let i=0; i < document.getElementsByName("dias").length; i++) {
            if(document.getElementsByName("dias")[i].type === "checkbox") 
            {
                document.getElementsByName("dias")[i].checked = false;
            }
        }
    }
    function letrasRestantes(){
        var mensaje = document.getElementById("mensaje");
        var contadorletras = document.getElementById("contador");
        mensaje.addEventListener("input", function () {
        var letrasRestantes = 500 - mensaje.value.replace(/\r?\n/g, "").length;
        contadorletras.innerHTML = "Carácteres restantes: " + letrasRestantes;
        if(letrasRestantes<498 && letrasRestantes>0){
            contadorletras.style.color="green";
        }else if (letrasRestantes<0){
            contadorletras.style.color="red";
        }else if (letrasRestantes >=498){
            contadorletras.style.color="Purple";
            contadorletras.innerHTML = "El mensaje tiene que tener al menos más de dos letras";
        }
        });
    }

   

    function validarDias(e) {
        if (e.target.name === "dias") {
            let seleccionados = 0;
            const dias = document.getElementsByName("dias");

            for (let i = 0; i < dias.length; i++) {
                if (dias[i].checked) {
                    seleccionados++;
                }
            }

            if (seleccionados >= 2) {
                document.getElementById("mensajeDias").innerHTML = "";
                return true;
            } else {
                document.getElementById("mensajeDias").innerHTML = "Hay que seleccionar dos días mínimo";
                document.getElementById("mensajeDias").style.color="red";
                return false;
            }
        }
    }

    function validarNIF(){
        const nif=document.getElementById("nif");
        nif = nif.toUpperCase();
        const patron = /^[0-9]{8}[A-Z]$/;
        if (!patron.test(nif)) {
            document.getElementById("mensajeNIF").innerHTML = "No válido";
            document.getElementById("mensajeNIF").style.color="red" 
            return false;
        }
      
        const letraControl = calcularLetraControl(nif.slice(0, 8));
        const letraNIF = nif.charAt(8); 
      
       if(letraControl !== letraNIF){
            document.getElementById("mensajeNIF").innerHTML = "La letra es incorrecta.";
            document.getElementById("mensajeNIF").style.color="red"    
            return false;
       }
       document.getElementById("mensajeNIF").innerHTML ="";
       return true;
    }
    function calcularLetraControl(numero) { 
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
        const resto = numero % 23;
        return letras.charAt(resto);
    }


