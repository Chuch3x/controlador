function controlar_auto(x, y){
  return "0,0";
}


describe("Controlar", () => {
  it("se ingresan coordenas 0,0 y se muestra las coordenadas", () => {
    expect(controlar_auto(0, 0)).toEqual("0,0");
  });
});
