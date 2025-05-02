const listProducts = document.querySelector(".productos");
const form = document.querySelector(".form");

/*
<div class="producto">
  <img src="./images/omega-3.webp" alt="Producto 6" />
  <h3>Omega-3</h3>
  <p>Precio: $20.00</p>
  <label for="cantidad6">Cantidad:</label>
  <input
    type="number"
    id="cantidad6"
    data-price="20"
    min="1"
    max="10"
    value="1"
  />
  <button onclick="agregarProducto('Omega-3', 20, 'cantidad6')">
    Agregar
  </button>
</div>
*/

fetch("http://localhost:4001/productos")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      console.log(element.img_producto);
      listProducts.insertAdjacentHTML(
        "beforeend",
        `<div class="producto">
          <img src="http://localhost:4001/uploads/${element.img_producto}" alt="${element.producto}">
          <h3>${element.producto}</h3>
          <p>Precio: ${element.price}$</p>
          <label for="${element.producto}">Cantidad:</label>
          <input
            type="number"
            id="${element.id}"
            data-price="${element.price}"
            min="1"
            max="10"
            value="1"
          />
            <button onclick='agregarProducto("${element.producto}", ${element.price}, "${element.id}")'>
              Agregar
            </button>
        </div>
        
        `
      );
    })
  );

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

const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("modal");

// Abrir la ventana emergente
openModalButton.addEventListener("click", () => {
  modal.classList.add("active");
});

// Cerrar la ventana emergente
closeModalButton.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Cerrar la ventana emergente al hacer clic fuera del contenido
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});
