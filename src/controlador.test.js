function mostrar_posicion_automovil(x, y){
  var inicio = x + "," + y;
  return inicio;
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
});
