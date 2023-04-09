import {Auto, get_comandos, get_coordenadas, obtener_Coordenadas, separar_Datos, mostrar_posicion_automovil} from "./controlador.js";

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
    expect(get_coordenadas("5,5/1,2N/IAIAIAIAA")).toEqual("1,2N");
  });
  it("se ingresa el tamanio del mapa, punto de origen y comandos de movimiento, y muestra los comandos de movimiento", () => {
    expect(get_comandos("5,5/1,2N/IAIAIAIAA")).toEqual("IAIAIAIAA");
  });
 // it("Se mueve el carro a la posicion esperada segun los movimientos", () => {
   // expect(ejecutarComandos("5,5/1,2N/IAIAIAIAA")).toEqual("1,3N");
  //});
});

