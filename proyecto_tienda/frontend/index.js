const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const image = document.querySelector(".image").files[0];
  const producto = document.querySelector(".producto").value;
  const precio = document.querySelector(".precio").value;

  console.log(image, producto, precio);

  if (!image || !producto || !precio) {
    alert("Todos los campos son obligatorios");
    return;
  }

  const formData = new FormData();
  formData.append("image", image);
  formData.append("producto", producto);
  formData.append("precio", precio);

  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  try {
    const response = await fetch("http://localhost:4001/new_product", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Producto enviado con éxito");
    } else {
      const errorMessage = await response.text();
      alert(`Error al enviar el producto: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error al conectar con el servidor");
  }
});
