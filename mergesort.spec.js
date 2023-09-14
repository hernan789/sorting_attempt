describe("Merge Sort", function () {
  // it("cuantas veces se llama a la funcion", function () {
  //   spyOn(bubbleSort.swap, "swap").and.callThrough();

  //   bubbleSort.sawp();
  //   expect(bubbleSort.sawp.calls.count()).toEqual(3);
  // });

  describe("Split Array function", function () {
    it("es capaz de dividir el arreglo en dos partes", function () {
      expect(split([4, 2, 3, 1])).toEqual([
        [4, 2],
        [3, 1],
      ]);
    });
  });

  it("handles an empty array", function () {
    expect(mergeSort([])).toEqual([]);
  });

  it("Un Arreglo desordenado que termine ordenado", function () {
    expect(mergeSort([4, 2, 3, 1])).toEqual([1, 2, 3, 4]);
  });

  it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado", function () {
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
