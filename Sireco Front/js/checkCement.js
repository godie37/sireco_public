const checkBoxCement = document.getElementById("checkCementerios");
const cement = document.getElementById("cementerios");

checkBoxCement.addEventListener("change", function () {
  if (this.checked) {
    cement.style.display = "block";
    //console.log("Checkbox is checked..");
  } else {
    cement.style.display = "none";
    //console.log("Checkbox is not checked..");
  }
});

//************************************************
const buttPlasCement = document.getElementById("buttonPlasCement");
const newCementDiv = document.getElementById("newCement");

buttPlasCement.addEventListener("click", function () {
  // Crear el contenedor para los inputs
  const inputCementChild = document.createElement("div");
  inputCementChild.className = "inputCementChild";

  // Crear el label para 'Nro. Cuenta'
  const labelNroCement = document.createElement("label");
  labelNroCement.textContent = "Nro cuenta:";

  // Crear el input para 'Nro. Cuenta'
  const inputNroCement = document.createElement("input");
  inputNroCement.className = "form-control";
  inputNroCement.type = "text";
  inputNroCement.name = "nroCuenta";
  

  // Agregar los elementos creados al contenedor inputInmChild
  inputCementChild.appendChild(labelNroCement);
  inputCementChild.appendChild(inputNroCement);
  

  // Agregar inputInmChild al div 'newInm'
  newCementDiv.appendChild(inputCementChild);
});

//***************************************
const buttLessCement = document.getElementById("buttonLessCement");

buttLessCement.addEventListener("click", function () {
  // Buscar el último div con clase 'inputInmChild' dentro de 'newInmDiv'
  const lastInputCementChild = newCementDiv.querySelector(
    ".inputCementChild:last-child"
  );

  if (lastInputCementChild) {
    newCementDiv.removeChild(lastInputCementChild); // Elimina el último hijo si existe
  }
});
