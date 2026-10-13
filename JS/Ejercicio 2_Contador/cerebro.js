let contador = 0 // declaracion de variable// 

const valor = document.getElementById("valor-contador") //metodo

const restar = document.getElementById("btn-restar")

const sumar = document.getElementById("btn-sumar")

const reiniciar = document.getElementById("btn-reiniciar")

sumar.addEventListener ("click", () => {
contador++ //operador de incremento;
valor.textContent = contador
})

restar.addEventListener ("click", () => {
  if (contador > 0) { //estructura condicional
    contador--
  }
valor.textContent = contador //propiedad
})

reiniciar.addEventListener ("click", () => {
  contador = 0
 
  valor.textContent = contador
})

// const boton = document.getElementById("btn-saludar")

// const mensaje = document.getElementById("mensaje")

// boton.addEventListener("click",() =>{
//   mensaje.textContent = "Hola, Oscar Bienvenido a Javascript"
// }) 
