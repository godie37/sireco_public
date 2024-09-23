const checkBoxRod = document.getElementById("checkRodado");
const rod = document.getElementById("rodados");

checkBoxRod.addEventListener("change", function () {
  if (this.checked) {
    rod.style.display = "block";
    //console.log("Checkbox is checked..");
  } else {
    rod.style.display = "none";
    //console.log("Checkbox is not checked..");
  }
});

//************************************************
const buttPlasRod = document.getElementById("buttonPlasRod");
const newRodDiv = document.getElementById("newRod");

buttPlasRod.addEventListener("click", function () {
  // Crear el contenedor para los inputs
  const inputRodChild = document.createElement("div");
  inputRodChild.className = "inputRodChild";

  // Crear el label para 'Nro. Rodado'
  const labelNroRod = document.createElement("label");
  labelNroRod.textContent = "Patente:";

  // Crear el input para 'Nro. Rodado'
  const inputNroRod = document.createElement("input");
  inputNroRod.className = "form-control";
  inputNroRod.type = "text";
  inputNroRod.name = "nroRodado";

  // Crear el label para 'Recurso'
  const labelRecursoRod = document.createElement("label");
  labelRecursoRod.textContent = "Recurso:";

  // Crear el select para 'Recurso'
  const selectRecursoRod = document.createElement("select");
  selectRecursoRod.className = "form-control";
  selectRecursoRod.name = "recursoIdRod";
  selectRecursoRod.required = true;

  // Crear opciones para el select
  const option1 = document.createElement("option");
  option1.value = "1";
  option1.textContent = "AUTO";

  const option2 = document.createElement("option");
  option2.value = "2";
  option2.textContent = "MOTO";

  // Agregar las opciones al select
  selectRecursoRod.appendChild(option1);
  selectRecursoRod.appendChild(option2);

  // Agregar los elementos creados al contenedor inputInmChild
  inputRodChild.appendChild(labelNroRod);
  inputRodChild.appendChild(inputNroRod);
  inputRodChild.appendChild(labelRecursoRod);
  inputRodChild.appendChild(selectRecursoRod);

  // Agregar inputInmChild al div 'newInm'
  newRodDiv.appendChild(inputRodChild);
});

//***************************************
const buttLessRod = document.getElementById("buttonLessRod");

buttLessRod.addEventListener("click", function () {
  // Buscar el último div con clase 'inputInmChild' dentro de 'newInmDiv'
  const lastInputRodChild = newRodDiv.querySelector(
    ".inputRodChild:last-child"
  );

  if (lastInputRodChild) {
    newRodDiv.removeChild(lastInputRodChild); // Elimina el último hijo si existe
  }
});

