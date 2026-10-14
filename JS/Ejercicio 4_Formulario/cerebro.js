const formulario = document.getElementById("formulario");
const password = document.getElementById("password");

formulario.addEventListener("submit", (evento) => {

    if (password.value.length < 6) {
        evento.preventDefault(); 

        alert("La contraseña es muy corta. Debe tener al menos 6 caracteres.");
    }
});
