/**********************************************************************************
Diana is planning to go to a party this weekend! She wants to show up looking fresh,
so she decided to buy a new dress. She is very conscious of the color of her future
dress and she really wants something more green than red or blue.

There are several dresses in the shop, and we know the RGB representations of their colors.
Your task is help Diana by finding the indices of the dresses in which there is more green
than either red or blue (ie: where green uniquely has the highest value).

Notes:
The RGB representation of a color is a 6-digit hexadecimal number. The first two digits are the red component,
digits 3 and 4 are the green component, and the last two digits are the blue component.

There is more green in a color then red or blue if and only if the green component is strictly greater than
the red component and is also strictly greater than the blue component. For example A0FC77 is a good color for Diana,
but 90CACA is not, because both green and blue components are CA, so there isn't more green than blue.

**********************************************************************************/
function dresses(colors) {
    var isGreen = [];
    for (var i = 0; i < colors.length; i++) {
        var redVal = "";
        var greenVal = "";
        var blueVal = "";
        for( var j = 0; j < colors[i].length; j++) {
            if(j < 2) {
                redVal += colors[i].charAt(j);
            }else if (j < 4) {
                greenVal += colors[i].charAt(j);
            }else {
                blueVal += colors[i].charAt(j);
            }
        }
        console.log(redVal + " " + greenVal + " " + blueVal);
        redVal = parseInt(redVal, 16);
        greenVal = parseInt(greenVal, 16);
        blueVal = parseInt(blueVal, 16);
        if (greenVal > redVal && greenVal > blueVal) {
            isGreen.push(i);
        }
    }
    return isGreen;
}
