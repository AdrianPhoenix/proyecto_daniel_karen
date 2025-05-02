const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const user = document.querySelector(".user").value;
  const password = document.querySelector(".password").value;

  console.log(user, password);

  try {
    const response = await fetch("http://localhost:4000/users");
    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }

    const users = await response.json();

    console.log(users);
    // Verificar si el usuario y la contraseña existen en la API
    const userExists = users.some((u) => {
      console.log(u);
      return u.user === user && u.password === password;
    });

    console.log(userExists);

    if (userExists) {
      alert("Inicio de sesión exitoso");
      window.location.href = "./dashboard.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    alert("Error al conectar con el servidor");
  }
});
