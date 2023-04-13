import {Auto, avanzar_2_posiciones} from "./controlador.js";

let auto = new Auto(0,0,"N");

describe("Controlar", () => {
  it("se ingresan coordenas 0,0 y se muestra las coordenadas", () => {
    expect(auto.MostrarAuto(0,0)).toEqual("0,0");
  });
  it("se ingresan coordenas 1,1 y se muestra las coordenadas", () => {
    expect(auto.MostrarAuto(1, 1)).toEqual("1,1");
  });
  it("se ingresan coordenas 2,2 y se muestra las coordenadas", () => {
    expect(auto.MostrarAuto(2, 2)).toEqual("2,2");
  });
  it("se ingresa el tamanio del mapa, punto de origen y comandos de movimiento, y muestra el punto de origen", () => {
    expect(auto.get_coordenadas("5,5/1,2N/IAIAIAIAA")).toEqual({"orientacion": "N", "x": 1, "y": 2});
  });
  it("se ingresa el tamanio del mapa, punto de origen y comandos de movimiento, y muestra los comandos de movimiento", () => {
    expect(auto.get_comandos("5,5/1,2N/IAIAIAIAA")).toEqual("IAIAIAIAA");
  });
  it("Se mueve el carro a la posicion esperada segun los movimientos", () => {
   expect(auto.ejecutarComandos("5,5/3,3E/AADAADADDA")).toEqual("5,1E");
  });
  it("Si se ingresa J se avanza 2 posiciones", () => {
    expect(auto.avanzar_2_posiciones("5,5/3,3N/J")).toEqual("3,1N");
   });
});

