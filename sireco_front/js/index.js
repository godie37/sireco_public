function limpiarInput(miInput) {
  document.getElementById(miInput).value = "";
}

function mostrarDataContrib(data){
  const contenedorContribuyente = document.querySelector("#tbodySearch");
  contenedorContribuyente.innerHTML = "";
  const fila = document.createElement("tr");

  const celdaNroCont = document.createElement("td");
  celdaNroCont.textContent = data.NRO_CONTRIB;
  fila.appendChild(celdaNroCont);

  const celdaCuil = document.createElement("td");
  celdaCuil.textContent = data.CUIL;
  fila.appendChild(celdaCuil);

  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = data.NOMBRE;
  fila.appendChild(celdaNombre);

  const celdaApell = document.createElement("td");
  celdaApell.textContent = data.APELLIDO;
  fila.appendChild(celdaApell);

  const celdaDir = document.createElement("td");
  celdaDir.textContent = data.DIRECCION;
  fila.appendChild(celdaDir);

  const celdaEmail = document.createElement("td");
  celdaEmail.textContent = data.EMAIL;
  fila.appendChild(celdaEmail);

  const celdaTelef = document.createElement("td");
  celdaTelef.textContent = data.TELEFONO;
  fila.appendChild(celdaTelef);

  const celdaProv = document.createElement("td");
  celdaProv.textContent = data.PROVINCIA;
  fila.appendChild(celdaProv);

  const celdaLocali = document.createElement("td");
  celdaLocali.textContent = data.LOCALIDAD;
  fila.appendChild(celdaLocali);

  const celdaCp = document.createElement("td");
  celdaCp.textContent = data.CP;
  fila.appendChild(celdaCp);

  contenedorContribuyente.appendChild(fila);
}

function borrarFormulario() {
  // const form = document.getElementById("form");
  // form.reset();
  window.location.href = "http://192.168.0.37:8080/index.html";
  //MEJORAR esta funcion para borrar todos los input.
}

function validEmail(email) {
  const val =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/i;
  const result = val.test(email)
  //console.log("caracteres validos------> ", result);
  return result
  
  
}

//#region // ************     Buscar CONTRIBUYENTE.    ************ - OK!!! -
const buttonBuscarDni = document.getElementById("buscarDni");

buttonBuscarDni.addEventListener("click", async () => {
  
  const dni = document.getElementById("dni").value;
  //console.log("DNI en el FRONT:------------> ", dni);
  try {

    const response = await fetch(`http://192.168.0.37:3000/buscar/${dni}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });
    const data = await response.json();
    // mostrar resultados.
    if (data.message == "Contribuyente no encontrado") {
      alert("El contribuyente no existe");
      limpiarInput("dni");
    } else {
      mostrarDataContrib(data);
    }
  } catch (error) {
    console.log("ERROR al buscar CUIL----> ", error);
  }
});
//#endregion




//#region // ************     Datos CONTRIBUYENTE.    ************     - OK -
const button = document.getElementById("sendContrib");

button.addEventListener("click", async (event) => {
  event.preventDefault();

  let user = {
    CUIL: document.getElementById("newCuil").value,
    NOMBRE: document.getElementById("nombre").value,
    APELLIDO: document.getElementById("apell").value,
    DIRECCION: document.getElementById("direccion").value,
    EMAIL: document.getElementById("email").value,
    TELEFONO: document.getElementById("telefono").value,
    PROVINCIA: document.getElementById("provin").value,
    LOCALIDAD: document.getElementById("locali").value,
    CP: document.getElementById("codPost").value,
    inmuebles: [],
    rodados: [],
    comercios: [],
    cementerio: [],
  };

  
  // Verificar si INMUEBLES esta chequeado y capturar los datos
  if (inm.style.display !== "none") {
    const inputInmChildren = document
      .getElementById("inmuebles", "newInm")
      .querySelectorAll(".inputInmChild");

    for (const inputInmChild of inputInmChildren) {
      const nroInmuebleInput = inputInmChild.querySelector(
        "input[name=nroInmueble]"
      );
      const recursoIdSelect = inputInmChild.querySelector(
        "select[name=recursoId]"
      );

      if (nroInmuebleInput.value && recursoIdSelect.value) {
        user.inmuebles.push({
          nroInmueble: nroInmuebleInput.value,
          recursoId: recursoIdSelect.value,
        });
      }
    }
  }

  // Verificar si RODADOS esta chequeado y capturar los datos
  if (rod.style.display !== "none") {
    const inputRodChildren = document
      .getElementById("rodados", "newRod")
      .querySelectorAll(".inputRodChild");

    for (const inputRodChild of inputRodChildren) {
      const nroRodInput = inputRodChild.querySelector("input[name=nroRodado]");
      const recursoRodSelect = inputRodChild.querySelector(
        "select[name=recursoIdRod"
      );

      if (nroRodInput.value && recursoRodSelect.value) {
        user.rodados.push({
          nroPatente: nroRodInput.value,
          recursoIdRod: recursoRodSelect.value,
        });
      }
    }
  }

  // Verificar si COMERCIOS esta chequeado y capturar los datos
  if ((comer.style.display = "none")) {
    const inputComerChildren = document
      .getElementById("comercios", "newComer")
      .querySelectorAll(".inputComerChild");

    for (const inputComerChild of inputComerChildren) {
      const nroComerInput = inputComerChild.querySelector(
        "input[name=nroComercio]"
      );

      if (nroComerInput.value) {
        user.comercios.push({
          nroComercio: nroComerInput.value,
        });
      }
    }
  }

  // Verificar si CEMENTERIO esta chequeado y capturar los datos
  if ((cement.style.display = "none")) {
    const inputCementChildren = document
      .getElementById("cementerios", "newCement")
      .querySelectorAll(".inputCementChild");

    for (const inputCementChild of inputCementChildren) {
      const nroCementInput = inputCementChild.querySelector(
        "input[name=nroCuenta]"
      );

      if (nroCementInput.value) {
        user.cementerio.push({
          nroCuenta: nroCementInput.value,
        });
      }
    }
  }
  
  // Envio de datos al server.
 if (validEmail(user.EMAIL)) {
   try {
    const response = await fetch("http://192.168.0.37:3000/cargar", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const responseData = await response.json();
    
    if (response.status == 200) {
      alert("Contribuyente existente. Se mostraran sus datos a continuacion.");
      mostrarDataContrib(responseData);
      // borrarFormulario();
    } else {
      alert("Contribuyente creado.");
      borrarFormulario();
    }
  } catch (error) {
    console.error("Error al crear el contribuyente:", error);
    alert("Hubo un error al crear el contribuyente.");
  }
} else {
   alert("Email invalido");
   limpiarInput("email");
  
 }
    

});
//#endregion







// // ************     Listar usuarios.    ************     - Terminar de adaptar a Contribuyentes.
// async function listarContribuyente() {
//   try {
//     const response = await fetch("http://localhost:3000/listar");
//     const datos = await response.json();

//     const contrib = datos.body;
//     const contenedorContrib = document.querySelector("#contrib tbody"); // Selecciona el cuerpo de la tabla

//     contenedorUsuarios.innerHTML = ""; // Limpia el contenido existente

//     usuarios.forEach((usuario) => {
//       const fila = document.createElement("tr"); // Crea una fila de la tabla

//       const celdaId = document.createElement("td");
//       celdaId.textContent = usuario.id;
//       fila.appendChild(celdaId);

//       const celdaNombre = document.createElement("td");
//       celdaNombre.textContent = usuario.nombre;
//       fila.appendChild(celdaNombre);

//       const celdaApell = document.createElement('td');
//       celdaApell.textContent = usuario.apellido;
//       fila.appendChild(celdaApell);

//       const celdaNomApell = document.createElement('td');
//       celdaNomApell.textContent = usuario.nombre_completo;
//       fila.appendChild(celdaNomApell);

//       const celdaUsername = document.createElement('td');
//       celdaUsername.textContent = usuario.username;
//       fila.appendChild(celdaUsername);

//       const celdaEmail = document.createElement('td');
//       celdaEmail.textContent = usuario.email;
//       fila.appendChild(celdaEmail);

//       const celdaRol = document.createElement('td');
//       celdaRol.textContent = usuario.rol_id;
//       fila.appendChild(celdaRol);

//       contenedorUsuarios.appendChild(fila); // Agrega la fila al cuerpo de la tabla
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
