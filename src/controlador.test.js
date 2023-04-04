function mostrar_posicion_automovil(x, y){
  var inicio = x + "," + y;
  return inicio;
}
function separar_Datos(texto) {
  return texto.split('/');
}

function obtener_Coordenadas(texto) {
  const partes = texto.split(',');
  if (partes.length !== 2) {
    throw new Error('Formato inválido');
  }

  const x = parseInt(partes[0]);
  const y = parseInt(partes[1].substring(0, partes[1].length - 1));
  const orientacion = partes[1].substring(partes[1].length - 1);

  return { x, y, orientacion };
}

function get_coordenadas(comandos){
  const datos = separar_Datos(comandos) //["5,5", "1,2N", "IAIAIAIAA"]
  const coordenadas = datos[1];
  const valores = obtener_Coordenadas(coordenadas);
  const x = valores.x;
  const y = valores.y;
  const orientacion = valores.orientacion;

  return x + "," + y+ orientacion;
}
function get_comandos(comandos){
  const datos = separar_Datos(comandos) //["5,5", "1,2N", "IAIAIAIAA"]
  const comandos_mov = datos[2];

  return comandos_mov;
}


describe("Controlar", () => {
  it("se ingresan coordenas 0,0 y se muestra las coordenadas", () => {
    expect(mostrar_posicion_automovil(0, 0)).toEqual("0,0");
  });
  it("se ingresan coordenas 1,1 y se muestra las coordenadas", () => {
    expect(mostrar_posicion_automovil(1, 1)).toEqual("1,1");
  });
  it("se ingresan coordenas 2,2 y se muestra las coordenadas", () => {
    expect(mostrar_posicion_automovil(2, 2)).toEqual("2,2");
  });
  it("se ingresa el tamanio del mapa, punto de origen y comandos de movimiento, y muestra el punto de origen", () => {
    expect(get_coordenadas("5,5/1,2N/IAIAIAIAA")).toEqual("1,2N");
  });
  it("se ingresa el tamanio del mapa, punto de origen y comandos de movimiento, y muestra los comandos de movimiento", () => {
    expect(get_comandos("5,5/1,2N/IAIAIAIAA")).toEqual("IAIAIAIAA");
  });
});