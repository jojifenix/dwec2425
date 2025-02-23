const paises = ['Francia', 'España', 'Australia', 'Italia'];
function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 2000);
}
mostrarPaises();

                    //PROMESA
  
const aplicarDescuento= new Promise((resolve,reject)=>{
    const descuento=true; // FULFILLED
    //const descuento=false   REJECTED
    // si no delcaramos el descuento sale PENDING
    if(descuento){
        resolve('Descuento Aplicado');
    }else{
        reject('No se pudo aplicar el descuento')
    }
})//como tengo puesto true saldrá Descuento aplicado pero si fuera false saldrá No se pudo aplicar el descuento
.then(resultado => descuento(resultado))
.catch(error => console.log(error));

console.log(aplicarDescuento);
function descuento(){
    console.log("Aplicando el Descuento...")
}//sadrá este mensaje cuando haya un resultado true 