function countTrue(arr) {
    let accumlator = 0;
    arr.map(function (value) {
      if ((value.length = 0)) {
        return 0;
      } else if (value) {
        accumlator += 1;
      }
    });
    return accumlator;
  }
  console.log(countTrue([true, false, false, true, false]));
  console.log(countTrue([true, true, false, false, false,false, true, false, true, true, false, true]));
  