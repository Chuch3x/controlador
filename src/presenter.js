import {Auto, get_coordenadas, obtener_Coordenadas, separar_Datos, mostrar_posicion_automovil} from "./controlador"

const comandos = document.querySelector("#comandos_input");
const form = document.querySelector("#controlador_form");
const div_pos_inicial = document.querySelector("#pos_inicial");
const div_comandos = document.querySelector("#comandos_div");
const div_pos_final = document.querySelector("#pos_final_div");

let auto = new Auto(0,0,"N");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(comandos.value);
  let respuesta = auto.ejecutarComandos(comandos.value);
  var comandos_usuario = auto.get_comandos(comandos.value);
  var pos_inicial = auto.get_pos_inicial(comandos.value);
  //console.log(comandos_usuario);
  //console.log(typeof(comandos_usuario)); //tipo string
  div_pos_inicial.innerHTML = "<p> POSICION INICIAL: " + pos_inicial + "</p>";
  div_comandos.innerHTML = "<p> COMANDOS: " + comandos_usuario + "</p>";
  div_pos_final.innerHTML = "<p> POSICION FINAL: " + respuesta + "</p>";

});
