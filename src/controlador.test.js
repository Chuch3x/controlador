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
function ejecutarComandos(comandos, maxX, maxY) {
  // esos habria que sacar dle primer parametro los maxY, maxX
  for (let i = 0; i < comandos.length; i++) {
    const comando = comandos.charAt(i);

    switch (comando) {
      case "I":
        // Girar a la izquierda
        switch (orientacion) {
          case "N":
            orientacion = "O";
            break;
          case "O":
            orientacion = "S";
            break;
          case "S":
            orientacion = "E";
            break;
          case "E":
            orientacion = "N";
            break;
        }
        break;
      case "D":
        // Girar a la derecha
        switch (orientacion) {
          case "N":
            orientacion = "E";
            break;
          case "E":
            orientacion = "S";
            break;
          case "S":
            orientacion = "O";
            break;
          case "O":
            orientacion = "N";
            break;
        }
        break;
      case "A":
        // Avanzar
        switch (orientacion) {
          case "N":
            if (y < maxY) {
              y++;
            }
            break;
          case "E":
            if (x < maxX) {
              x++;
            }
            break;
          case "S":
            if (y > 0) {
              y--;
            }
            break;
          case "O":
            if (x > 0) {
              x--;
            }
            break;
        }
        break;
      default:
        throw new Error("Comando inválido");
    }
  }
  // Leer la dimensión de la superficie
  const dimension = readline().split(",");
  const maxX = parseInt(dimension[0]);
  const maxY = parseInt(dimension[1]);

  // Leer información para cada auto
  while (true) {
    const posicionInicial = readline();
    if (!posicionInicial) {
      // Fin de la entrada
      break;
    }

    const comandos = readline();

    // Ejecutar los comandos para el auto y obtener su posición final
    const posicionFinal = ejecutarComandos(
      obtenerCoordenadas(posicionInicial),
      comandos,
      maxX,
      maxY
    );

    // Imprimir la posición final del auto
    console.log(
      `${posicionFinal.x},${posicionFinal.y} ${posicionFinal.orientacion}`
    );
  }

  return x + "," + y + orientacion;
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
  it("Se mueve el carro a la posicion esperada segun los movimientos", () => {
    expect(ejecutarComandos("5,5/1,2N/IAIAIAIAA")).toEqual("1,3N");
  });
});
