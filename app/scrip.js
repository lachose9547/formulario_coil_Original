 function validarInput() {
      const input = document.getElementById("nombre").value.trim();
    
    
      const mensaje = document.getElementById("mensaje");
      const contrasena= document.getElementById("contrasena").value.trim();

      if (input.length==0 || input == "") {
        mensaje.textContent = "!No se admiten campos vacíos!.";
      }

      if (contrasena.length==0 || contrasena === "") {
        mensaje.textContent = "!No se admiten campos vacíos!.";
      }
      
       if (input.length>0 && contrasena.length>0 ) {
          mensaje.style.color = "color:#FFEB3B";
          mensaje.textContent = "Enviado!.";
        }
    }
      

       // Limpiar el input y el mensaje
        function validarInputCancelar() {
      document.getElementById("nombre").value = "";
      document.getElementById("mensaje").textContent = "";
      document.getElementById("contrasena").value = "";
    }
       
