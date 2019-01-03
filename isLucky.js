/*

Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first
half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

    For n = 1230, the output should be
    isLucky(n) = true;
    For n = 239017, the output should be
    isLucky(n) = false.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] integer n

    A ticket number represented as a positive integer
    with an even number of digits.

    Guaranteed constraints:
    10 ≤ n < 106.

    [output] boolean
    true if n is a lucky ticket number, false otherwise.

*/

function isLucky(n) {
    let num = n.toString();
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    for(let i = 0; i < Math.floor(num.length/2); i++) {
        sumFirstHalf += parseInt(num[i]);
        sumSecondHalf += parseInt(num[num.length-1-i]);
    }
    console.log(num);
    console.log(sumFirstHalf);
    console.log(sumSecondHalf);
    return sumFirstHalf == sumSecondHalf ? true : false;
}
