window.onload=iniciar
function iniciar(){
    document.getElementById("nuevoCurso").addEventListener("click", crearNuevoCurso);
    document.getElementById("marcar").addEventListener("click", marcarTodosNinguno);
}
function crearNuevoCurso() {
        
        let fechaUsuario = prompt("Introduce un nuevo curso académico");
        let fechaUsarioCreada= document.createTextNode(fechaUsuario)//hace falta?
        let opcion=document.createElement("option");
        opcion.appendChild(fechaUsarioCreada);

        let select = document.getElementById("cursos");
        select.insertBefore(opcion,select.lastElementChild);

}


function marcarTodosNinguno(){
    let casillas=document.getElementsByName("dias")
    for(i=0;i<casillas.length;i++){
        casillas[i].checkbox=checked

    }

}




