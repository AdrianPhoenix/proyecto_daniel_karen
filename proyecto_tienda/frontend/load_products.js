const listProducts = document.querySelector(".products");

fetch("http://localhost:4000/productos")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      listProducts.insertAdjacentHTML(
        "beforeend",
        `<div>
                  <span>Producto: <b>${element.producto}</b></span>
                    <span>Precio: <b>${element.price}$</b></span>
              </div>`
      );
    })
  );
