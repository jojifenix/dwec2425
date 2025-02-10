/*Imagina que trabajas en una aplicación de pedidos de comida a domicilio, similar a Uber Eats. Cuando un usuario realiza un pedido, el programa debe:

Confirmar el pedido (simular un tiempo de espera). Mediante un Math.random del 80%  2 seg. Confirmando… Confirmado
Preparar la comida (esperar un poco más). 4 sg preparando … preparado
Enviar el pedido al repartidor (esperar nuevamente). 6 seg Enviando… Entregado

Cada paso tarda un tiempo diferente y debe ejecutarse en orden. Usa promesas para simular este proceso y muestra mensajes en la consola indicando el estado del pedido.
Utiliza  ✅ ❌ 🍔  🏠 🚴‍♂️

En caso de error… para el catch: 🚨 Por favor, intenta hacer el pedido nuevamente*/




document.getElementById("confirmación").innerHTML = "Confirmando el pedido...";

// CONFIRMACIÓN (hacerlo con operador ternario)
var confirmacion = new Promise((resolve, reject) => {
    const confirmar = Math.random(); // número aleatorio
    setTimeout(() => {
        confirmar <= 0.8 ? resolve("✅ Confirmado") : reject("\u{1F6A8} Por favor, intenta hacer el pedido nuevamente");
    }, 2000);
});

confirmacion.then((mensaje) => {
    document.getElementById("confirmación").innerHTML = mensaje;
    return new Promise((resolve) => {
        document.getElementById("preparación").innerHTML = "🍔 Preparando la comida...";
        setTimeout(() => {
            resolve("✅ Comida preparada");
        }, 4000);
    });
}).then((mensaje) => {
    document.getElementById("preparación").innerHTML = mensaje;
    return new Promise((resolve) => {
        document.getElementById("envío").innerHTML = "🚴‍♂️ Enviando el pedido...";
        setTimeout(() => {
            resolve("🏠 Pedido entregado");
        }, 6000);
    });
}).then((mensaje) => {
    document.getElementById("envío").innerHTML = mensaje;
}).catch((error) => {
    document.getElementById("confirmación").innerHTML = error;
});
