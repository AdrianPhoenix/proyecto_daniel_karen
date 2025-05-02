let total = 0;
let sub_total= 0
let iva= 0
let factura = []; // Array para almacenar los productos seleccionados

function agregarProducto(nombre, precio, cantidadId) {
  const cantidad = parseInt(document.getElementById(cantidadId).value);
  const subtotal = precio * cantidad;

  // Actualizar factura
  const facturaItems = document.getElementById("factura-items");
  const item = document.createElement("li");
  item.textContent = `${nombre} - Cantidad: ${cantidad} - Subtotal: $${subtotal.toFixed(
    2
  )}`;
  facturaItems.appendChild(item);

  // Agregar el producto al array de factura
  factura.push({
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
    subtotal: subtotal,
    iva: iva,
  });

  // Actualizar total

  sub_total+= subtotal;
  console.log(subtotal)
  iva = sub_total * 0.16;
  console.log(subtotal)
  total += subtotal + iva;
  document.getElementById("subtotal").textContent = sub_total.toFixed(2);
  document.getElementById("iva").textContent = iva.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
}

function enviarDatos(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener datos del cliente
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const facturaData = document.getElementById("factura-data").value;

  // Verificar las opciones seleccionadas
  const enviarWhatsApp = document.getElementById("enviar-whatsapp").checked;
  const enviarEmail = document.getElementById("enviar-email").checked;

  
  if (!enviarWhatsApp && !enviarEmail) {
    alert("Por favor, selecciona al menos una opción de envío.");
    return;
  }

  // Crear un objeto con los datos
  const datos = {
    nombre,
    email,
    telefono,
    factura, // Usar el array de objetos de la factura
    sub_total,
    iva,
    total,
    enviarWhatsApp,
    enviarEmail,
  };

  // Mostrar los datos en la consola (puedes enviarlos a un servidor aquí)
  console.log("Datos enviados:", datos);

  // Enviar los datos al archivo PHP
  /*fetch("procesar_datos.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos), // Convertir el objeto a JSON
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
      alert(
        "Datos enviados correctamente. Revisa la consola para más detalles."
      );
    })
    .catch((error) => {
      console.error("Error al enviar los datos:", error);
      alert("Ocurrió un error al enviar los datos.");
    });

  // Opcional: Mostrar un mensaje de confirmación
  alert("Datos enviados correctamente. Revisa la consola para más detalles.");*/
}