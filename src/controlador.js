class Auto {
  constructor(posX, posY, orientacion) {
    this.posX = posX;
    this.posY = posY;
    this.orientacion = orientacion;
  }
  
  MostrarAuto(x, y) {
    return x + "," + y;
  }

  separar_Datos(texto){
    return texto.split("/");
  }

  obtener_Coordenadas(texto) {
    const partes = texto.split(",");
    if (partes.length !== 2) {
      throw new Error("Formato inválido");
    }
  
    const x = parseInt(partes[0]);
    const y = parseInt(partes[1].substring(0, partes[1].length - 1));
    const orientacion = partes[1].substring(partes[1].length - 1);
  
    return { x, y, orientacion };
  }

  get_coordenadas(comandos) {
    const datos = this.separar_Datos(comandos); //["5,5", "1,2N", "IAIAIAIAA"]
    const coordenadas = datos[1];
    const valores = this.obtener_Coordenadas(coordenadas);
    const x = valores.x;
    const y = valores.y;
    const orientacion = valores.orientacion;
  
    return { x: x, y: y, orientacion: orientacion };
  }

  get_mapa(comandos) {
    const datos = this.separar_Datos(comandos);
    const mapa = datos[0];
    return mapa;
  }

  get_comandos(comandos) {
    const datos = this.separar_Datos(comandos); //["5,5", "1,2N", "IAIAIAIAA"]
    const comandos_mov = datos[2];
  
    return comandos_mov;
  }

  ejecutarComandos(comandos){
    let matrizDimension = this.get_mapa(comandos);
    console.log(matrizDimension)
    let resultado = this.get_coordenadas(comandos);
    let posX = resultado.x;
    let posY = resultado.y;
    let direccion = resultado.orientacion;
  
    for (let i = 0; i < comandos.length; i++) {
      let comando = comandos[i];
      if (comando === "I") {
        if (direccion === "N") {
          direccion = "O";
        } else if (direccion === "O") {
          direccion = "S";
        } else if (direccion === "S") {
          direccion = "E";
        } else if (direccion === "E") {
          direccion = "N";
        }
      } else if (comando === "D") {
        if (direccion === "N") {
          direccion = "E";
        } else if (direccion === "E") {
          direccion = "S";
        } else if (direccion === "S") {
          direccion = "O";
        } else if (direccion === "O") {
          direccion = "N";
        }
      } else if (comando === "A") {
        if (direccion === "N" && posY < matrizDimension[0]) {
          posY++;
        } else if (direccion === "E" && posX < matrizDimension[0]) {
          posX++;
        } else if (direccion === "S" && posY > 0) {
          posY--;
        } else if (direccion === "O" && posX > 0) {
          posX--;
        }
      }
    }
    return posX + "," + posY + direccion;
  }
}

export {Auto}