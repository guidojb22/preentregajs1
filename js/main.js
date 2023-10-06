// CONSIGNA
// - Pregunte al usuario su nombre a través de un prompt. 
// - Con el valor de su nombre, envíe un mensaje a través de un alert que le de la bienvenida. Ej: "Bienvenido a nuestro ecommerce Javier."
// - Pregúntele al usuario, con un nuevo prompt, qué categoría de producto le interesaría comprar, ej: "¿Qué desea comprar? Elija la opción 1 si son remeras, opción 2 si son pantalones". La frase y la forma de introducir los datos queda a criterio de ustedes. Lo necesario es que a partir del valor ingresado, se valide qué mostrar luego.
// - Valide el valor ingresado. En el caso de que sea, por ejemplo, 1, muestre por confirm el artículo remera, con un mensaje de este estilo: "Usted eligió remera. Su precio es de $x. Desea comprar este artículo?"
// - En el caso de cancelar, terminar el algoritmo con un nuevo alert: "Muchas gracias por su visita"
// - Si el usuario decide aceptar la compra, se deberá mediante un bucle, reproducir tres mensajes distintos: El primero será: "Ingrese su dirección para poder realizar el envío del pedido", el segundo: "Su artículo será enviado a: - dirección-" y el tercero: "Muchas gracias por su compra".
// FIN DEL EJERCICIO
// RECUERDEN ENCAPSULAR LA LÓGICA DENTRO DE FUNCIONES
// PUEDEN HACER UNA FUNCIÓN QUE CONTENGA UN ALERT Y QUE EL TEXTO DEL ALERT SEA PASADO COMO PARÁMETRO, COSA DE NO REPETIR LOS ALERTS Y APRENDER A HACER LÓGICA REUTILIZABLE.


function saludar() 
{   let nombre = prompt ("Ingrese su nombre por favor");
    alert("Bienvenido " + nombre + " a nuestro bazar online.");
}
 saludar();

let categoria = Number(prompt ("¿Qué producto está interesado en comprar? Ingrese 1 para Tenedor. Ingrese 2 para Cuchillo. Ingrese 3 para Cuchara."))

if (categoria == 1) {
    let confirmTenedor = confirm ("Usted eligió tenedor. Su precio es de $100. ¿Desea comprar este artículo?")
    if (confirmTenedor == true) {let dirección = prompt ("Ingrese su dirección para poder realizar el envío del pedido")
        for (let mensajes = 0; mensajes < 1; mensajes++) {
        alert ("Su artículo será enviado a " + dirección)
        alert ("Muchas gracias por su compra")
    }}
    else if (confirmTenedor == false) {alert ("Muchas gracias por su visita")}
} else if (categoria == 2) {
    let confirmCuchillo = confirm ("Usted eligió cuchillo. Su precio es de $200. ¿Desea comprar este artículo?")
    if (confirmCuchillo == true) {let dirección = prompt ("Ingrese su dirección para poder realizar el envío del pedido")
    for (let mensajes = 0; mensajes < 1; mensajes++) {
    alert ("Su artículo será enviado a " + dirección)
    alert ("Muchas gracias por su compra")
}}
    else if (confirmCuchillo == false) {alert ("Muchas gracias por su visita")}
} else if (categoria == 3) {
    let confirmCuchara = confirm ("Usted eligió cuchara. Su precio es de $300. ¿Desea comprar este artículo?")
    if (confirmCuchara == true) {let dirección = prompt ("Ingrese su dirección para poder realizar el envío del pedido")
    for (let mensajes = 0; mensajes < 1; mensajes++) {
    alert ("Su artículo será enviado a " + dirección)
    alert ("Muchas gracias por su compra")
}}
    else if (confirmCuchara == false) {alert ("Muchas gracias por su visita")}
} else {
    alert ("Este no es un articulo válido. Muchas gracias por su visita.")
}