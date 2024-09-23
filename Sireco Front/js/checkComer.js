const checkBoxComer = document.getElementById("checkComercios");
const comer = document.getElementById("comercios");

checkBoxComer.addEventListener("change", function () {
  if (this.checked) {
    comer.style.display = "block";
    //console.log("Checkbox is checked..");
  } else {
    comer.style.display = "none";
    //console.log("Checkbox is not checked..");
  }
});

//************************************************
const buttPlasComer = document.getElementById("buttonPlasComer");
const newComerDiv = document.getElementById("newComer");

buttPlasComer.addEventListener("click", function () {
  // Crear el contenedor para los inputs
  const inputComerChild = document.createElement("div");
  inputComerChild.className = "inputComerChild";

  // Crear el label para 'Nro. Inmueble'
  const labelNroComer = document.createElement("label");
  labelNroComer.textContent = "Nro comercio:";

  // Crear el input para 'Nro. Inmueble'
  const inputNroComer = document.createElement("input");
  inputNroComer.className = "form-control";
  inputNroComer.type = "text";
  inputNroComer.name = "nroComercio";

  

  // Agregar los elementos creados al contenedor inputInmChild
  inputComerChild.appendChild(labelNroComer);
  inputComerChild.appendChild(inputNroComer);
  

  // Agregar inputInmChild al div 'newInm'
  newComerDiv.appendChild(inputComerChild);
});

//***************************************
const buttLessComer = document.getElementById("buttonLessComer");

buttLessComer.addEventListener("click", function () {
  // Buscar el último div con clase 'inputInmChild' dentro de 'newInmDiv'
  const lastInputComerChild = newComerDiv.querySelector(
    ".inputComerChild:last-child"
  );

  if (lastInputComerChild) {
    newComerDiv.removeChild(lastInputComerChild); // Elimina el último hijo si existe
  }
});
