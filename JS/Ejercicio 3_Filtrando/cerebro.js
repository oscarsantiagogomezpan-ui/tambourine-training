 const usuarios = [
            { nombre: 'Ana', rol: 'admin' },
            { nombre: 'Luis', rol: 'user' },
        ];

        const boton = document.getElementById("btn-filtrar");
        const lista = document.getElementById("lista-usuarios");

        boton.addEventListener("click", () => 
        {
          const administradores = usuarios.filter 
          (usuario => usuario.rol === "admin") 
                              
          
          administradores.forEach(admin => 
          {
            const elementoLi = document.createElement ("li")
            elementoLi.textContent = admin.nombre 
            lista.appendChild(elementoLi)
            
          }); 
        })
