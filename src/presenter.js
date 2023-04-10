import {get_comandos, Auto, get_coordenadas, obtener_Coordenadas, separar_Datos, mostrar_posicion_automovil} from "./controlador"

const comandos = document.querySelector("#comandos_input");
const form = document.querySelector("#controlador_form");
const div = document.querySelector("#resultado_div");

let auto = new Auto(0,0,"N");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(comandos.value);
  let respuesta = auto.ejecutarComandos(comandos.value);
  //var comandos_usuario = get_comandos(comandos.value);
  //console.log(comandos_usuario);
  //console.log(typeof(comandos_usuario)); //tipo string
  
  div.innerHTML = "<p>" + respuesta + "</p>";

});
