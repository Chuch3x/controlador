var x = 0;
var y = 0;
var orientacion = "";

function mostrar_posicion_automovil(x, y) {
  var inicio = x + "," + y;
  return inicio;
}
function separar_Datos(texto) {
  return texto.split("/");
}

function obtener_Coordenadas(texto) {
  const partes = texto.split(",");
  if (partes.length !== 2) {
    throw new Error("Formato inválido");
  }

  const x = parseInt(partes[0]);
  const y = parseInt(partes[1].substring(0, partes[1].length - 1));
  const orientacion = partes[1].substring(partes[1].length - 1);

  return { x, y, orientacion };
}

function get_coordenadas(comandos) {
  const datos = separar_Datos(comandos); //["5,5", "1,2N", "IAIAIAIAA"]
  const coordenadas = datos[1];
  const valores = obtener_Coordenadas(coordenadas);
  const x = valores.x;
  const y = valores.y;
  const orientacion = valores.orientacion;

  return x + "," + y + orientacion;
}

function get_comandos(comandos) {
  const datos = separar_Datos(comandos); //["5,5", "1,2N", "IAIAIAIAA"]
  const comandos_mov = datos[2];

  return comandos_mov;
}

function get_mapa(comandos) {
  const datos = separar_Datos(comandos);
  const mapa = datos[0];

  return mapa;
}

// Función para ejecutar los comandos de un auto y actualizar su posición


export {get_comandos, get_coordenadas, obtener_Coordenadas, separar_Datos, mostrar_posicion_automovil}