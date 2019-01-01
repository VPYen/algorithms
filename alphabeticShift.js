/*

Given a string, replace each its character by the
next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".

Input/Output

  [execution time limit] 4 seconds (js)

  [input] string inputString

  Non-empty string consisting of lowercase English characters.

  Guaranteed constraints:
  1 ≤ inputString.length ≤ 1000.

  [output] string
  The result string after replacing all of its characters.


*/

function alphabeticShift(inputString) {
    newString = ""
    for(let i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) != 'z') {
            let ascii = inputString.charCodeAt(i) + 1;
            newString += String.fromCharCode(ascii);

        }else {
            // If value is 'z' next character will append 'a' instad of a curly bracket.
           newString += 'a';
        }
    }

    return newString;
}
