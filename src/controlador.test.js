function controlar_auto(x, y){
  var inicio = x + "," + y;
  return inicio;
}


describe("Controlar", () => {
  it("se ingresan coordenas 0,0 y se muestra las coordenadas", () => {
    expect(controlar_auto(0, 0)).toEqual("0,0");
  });
  it("se ingresan coordenas 1,1 y se muestra las coordenadas", () => {
    expect(controlar_auto(1, 1)).toEqual("1,1");
  });
});
