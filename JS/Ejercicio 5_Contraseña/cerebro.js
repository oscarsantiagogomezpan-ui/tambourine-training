const clave = document.getElementById("clave")

const boton = document.getElementById("btn-ver")

boton.addEventListener("click", ()=>{
  if (clave.type === "password") {
    clave.type = "text"
  } else {
    clave.type = "password"
  }
})
