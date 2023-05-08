let nombreUsuario = prompt("Ingrese su nombre")
let edad = prompt(nombreUsuario + " Cuantos años tienes?");
    if (edad >=18) {
        alert ("Bienvenido");
    } else {
        alert ("Lo siento " + nombreUsuario + " no cumples los requisitos necesarios para ingresar");
    }
let descuentos = prompt("¿Desea recibir notificaciones a su correo de futuros descuentos?")
        if(descuentos === "si") {
let ingresarCorreo = prompt("Genial! porfavor ingrese su correo para ser el primero en recibir futuras ofertas");
    }
let compra = prompt("¿Que desea comprar? camisa por 10$, pantalon por 15$ o zapatillas por 25$?");
 if(compra === "camisa") {
    while (true) {
      let respuesta = prompt("¿Desea comprar este artículo?");
      if(respuesta === "si") {
        alert("¡Excelente! Gracias por su compra :D");
        break;
      }
    }
  } else if(compra === "pantalon") {
    while (true) {
        let respuesta = prompt("¿Desea comprar este artículo?");
        if(respuesta === "si") {
        alert("¡Excelente! Gracias por su compra :D");
        break;
      }
    }
  } else if(compra === "zapatillas")
    while (true) {
        let respuesta = prompt("¿Desea comprar este artículo?");
        if(respuesta === "si") {
          alert("¡Excelente! Gracias por su compra :D");
          break;
    }
  }