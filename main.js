var cantidad,precio,descuento,compra,pagar;

precio = parseInt(prompt("Ingrese el precio"))
cantidad = parseInt(prompt("Ingrese la cantidad"))

compra = precio*cantidad;
desc =compra*0.25;
pagar = compra-desc;

alert("Total a pagar " + compra)
alert("Monto final con el 25% de descuento: " + pagar)