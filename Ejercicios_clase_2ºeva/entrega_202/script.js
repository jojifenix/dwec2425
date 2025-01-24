window.onload = inicio;
function inicio() {
    document.getElementById("nuevoCurso").addEventListener("click", crearNuevoCurso);
    function crearNuevoCurso() {
        let fechaNueva = prompt("Introduce un nuevo curso académico");
        document.getElementById("nuevoCurso").innerHTML = fechaNueva;
    }
}




