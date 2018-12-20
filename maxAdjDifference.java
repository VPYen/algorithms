/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

Input/Output

    [execution time limit] 3 seconds (java)

    [input] array.integer inputArray

    Guaranteed constraints:
    3 ≤ inputArray.length ≤ 10,
    -15 ≤ inputArray[i] ≤ 15.

    [output] integer
        The maximal absolute difference.


*/

int arrayMaximalAdjacentDifference(int[] inputArray) {
    int difference = 0;
    for(int i = 0; i < inputArray.length; i++) {
        if(i + 1 < inputArray.length) {
            if(Math.abs(inputArray[i]-inputArray[i+1]) > difference) {
                difference = Math.abs(inputArray[i]-inputArray[i+1]);
            }
        }
    }
    return difference;
}
