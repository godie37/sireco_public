const checkboxInm = document.querySelector("input[id=toggleSwitch]");
const inm = document.getElementById("inmuebles");

checkboxInm.addEventListener("change", function () {
  if (this.checked) {
    inm.style.display = "block";
    //console.log("Checkbox is checked..");
  } else {
    inm.style.display = "none";
    //console.log("Checkbox is not checked..");
  }
});

//************************************************
const buttPlas = document.getElementById("buttonPlas");
const newInmDiv = document.getElementById("newInm");

buttPlas.addEventListener("click", function () {
  // Crear el contenedor para los inputs
  const inputInmChild = document.createElement("div");
  inputInmChild.className = "inputInmChild";

  // Crear el label para 'Nro. Inmueble'
  const labelNroInmueble = document.createElement("label");
  labelNroInmueble.textContent = "Nro. Inmueble:";

  // Crear el input para 'Nro. Inmueble'
  const inputNroInmueble = document.createElement("input");
  inputNroInmueble.className = "form-control";
  inputNroInmueble.type = "text";
  inputNroInmueble.name = "nroInmueble";

  // Crear el label para 'Recurso'
  const labelRecursoId = document.createElement("label");
  labelRecursoId.textContent = "Recurso:";

  // Crear el select para 'Recurso'
  const selectRecursoId = document.createElement("select");
  selectRecursoId.className = "form-control";
  selectRecursoId.name = "recursoId";
  selectRecursoId.required = true;

  // Crear opciones para el select
  const option1 = document.createElement("option");
  option1.value = "1";
  option1.textContent = "ABL";

  const option2 = document.createElement("option");
  option2.value = "2";
  option2.textContent = "RURAL";

  // Agregar las opciones al select
  selectRecursoId.appendChild(option1);
  selectRecursoId.appendChild(option2);

  // Agregar los elementos creados al contenedor inputInmChild
  inputInmChild.appendChild(labelNroInmueble);
  inputInmChild.appendChild(inputNroInmueble);
  inputInmChild.appendChild(labelRecursoId);
  inputInmChild.appendChild(selectRecursoId);

  // Agregar inputInmChild al div 'newInm'
  newInmDiv.appendChild(inputInmChild);
});

//***************************************
const buttLess = document.getElementById("buttonLess");

buttLess.addEventListener("click", function () {
  // Buscar el último div con clase 'inputInmChild' dentro de 'newInmDiv'
  const lastInputInmChild = newInmDiv.querySelector(
    ".inputInmChild:last-child"
  );

  if (lastInputInmChild) {
    newInmDiv.removeChild(lastInputInmChild); // Elimina el último hijo si existe
  }
});
