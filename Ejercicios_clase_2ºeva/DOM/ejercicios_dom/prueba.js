/* Elemento con id "input2" */
let contenidoInput2=document.getElementById("input2").textContent
console.log(contenidoInput2)
console.log(input2)
/* La colección de párrafos  */
//1
let parrafos= document.getElementsByTagName("p")
console.log(parrafos) //recorre parrafos
//2
let parrafos2=document.querySelectorAll("p")
console.log(parrafos2)

/* Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’  */
// mio (revisar)
let caja = document.getElementById("lipsum")
let parrafoCaja= caja.children
console.log(parrafoCaja)

let caja2=document.getElementsByTagName("div")
let parrafoCaja2= caja.children
console.log(parrafoCaja2)

//juanjo
let lipsum=document.getElementById("lipsum")
let parrafos4=lipsum.getElementsByTagName("p")
let parrafos3=document.querySelectorAll("div#lipsum p")
console.log(parrafo3)

/* El formulario (ojo, no la colección con el formulario sino sólo el formulario)  */
/* Los inputs */
/* solo los inputs con nombre "sexo" */
/* Los items de la lista de la clase "important" (solo los LI) */