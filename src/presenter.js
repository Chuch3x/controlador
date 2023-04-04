import {get_comandos, get_coordenadas, obtener_Coordenadas, separar_Datos, mostrar_posicion_automovil} from "./controlador"

const comandos = document.querySelector("#comandos_input");
const form = document.querySelector("#controlador_form");
const div = document.querySelector("#resultado_div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(comandos.value);

  var comandos_usuario = get_comandos(comandos.value);
  console.log(comandos_usuario);
  console.log(typeof(comandos_usuario)); //tipo string
  
  div.innerHTML = "<p>" + comandos_usuario + "</p>";

});
