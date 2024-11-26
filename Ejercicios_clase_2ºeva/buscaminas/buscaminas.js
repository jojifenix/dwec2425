function dibujarTableroHTML() {
    // Filas y columnas
    let filas = parseInt(prompt("Dime el tamaño de filas:"));
    let columnas = filas
    
    const tablero = document.getElementById("tablero");
    let tableroFinal = "";

    // Crear las celdas del tablero
    for (let i = 0; i < filas; i++) {
        tableroFinal += "<div class='fila'>";
        for (let j = 0; j < columnas; j++) {
            tableroFinal += `<div class='celda' data-fila="${i}" data-columna="${j}"></div>`;
        }
        tableroFinal += "</div>";
    }

    // Colocar el contenido generado en el div del tablero
    tablero.innerHTML = tableroFinal;
}
