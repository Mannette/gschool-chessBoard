for (var x = 0; x < 8; x++) {

  var space = "";

  for (var y = 0; y < 8; y++) {

    var result = x + y;

    if (result % 2 === 0) {
      space += " ";
    }
    else {
      space += "#";
    }
  }
  console.log(space);
}
