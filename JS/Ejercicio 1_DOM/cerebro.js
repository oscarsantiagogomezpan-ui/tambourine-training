const boton = document.getElementById("btn-saludar")

const mensaje = document.getElementById("mensaje")

boton.addEventListener("click",() =>{
  mensaje.textContent = "Hola, Oscar Bienvenido a Javascript"
})
