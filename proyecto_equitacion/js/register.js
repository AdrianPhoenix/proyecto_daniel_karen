const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const user = document.querySelector(".user").value;
  const password = document.querySelector(".password").value;

  const formData = new FormData();
  formData.append("user", user);
  formData.append("password", password);

  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  const data = {
    user,
    password,
  };

  try {
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert(" Usuario registrado con éxito");
      window.location.href = "./login.html";
    } else {
      const errorMessage = await response.text();
      alert(`Error al registrar el usuario: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error al conectar con el servidor");
  }
});
