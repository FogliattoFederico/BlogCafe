const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

nombre.addEventListener("input", leerCampo);
email.addEventListener("input", leerCampo);
mensaje.addEventListener("input", leerCampo);

//Captura los datos ingresados
function leerCampo(e) {
  datos[e.target.id] = e.target.value;
  console.log(datos);
}

//Evento submit
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  //Validacion del formulario
  const { nombre, email, mensaje } = datos;

  if (nombre == "" || email == "" || mensaje == "") {
    mostrarAlerta("Todos los campos son obligatorios", true);
    return;
  }
  console.log("Enviando Formulario");

  mostrarAlerta("Mensaje enviado correctamente");
});

function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }
  
  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 5000);
}
