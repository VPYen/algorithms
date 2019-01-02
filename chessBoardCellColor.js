/*

Given two cells on the standard chess board, determine whether they have the same color or not.

Example

    For cell1 = "A1" and cell2 = "C3", the output should be
    chessBoardCellColor(cell1, cell2) = true.

    For cell1 = "A1" and cell2 = "H3", the output should be
    chessBoardCellColor(cell1, cell2) = false.

    8   X   X   X   X
    7 X   X   X   X
    6   X   X   X   X
    5 X   X   X   X
    4   X   X   X   X
    3 X   X   X   X
    2   X   X   X   X
    1 X   X   X   X
      A B C D E F G H
Input/Output

    [execution time limit] 4 seconds (js)

    [input] string cell1

    [input] string cell2

    [output] boolean
    true if both cells have the same color, false otherwise.



*/


function chessBoardCellColor(cell1, cell2) {
  //   console.log(cell1.charCodeAt(0) % 2);
  //   console.log(cell1.charCodeAt(1) % 2);
  //   console.log(cell2.charCodeAt(0) % 2);
  //   console.log(cell2.charCodeAt(1) % 2);
  if(cell1.charCodeAt(0) % 2 + cell2.charCodeAt(0) % 2 == cell1.charCodeAt(1) % 2 + cell2.charCodeAt(1) % 2) {
      return true;
  }else if (cell1 == cell2) {
      return true;
  }

  return false;
}
