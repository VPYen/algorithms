/*
Christmas is coming! You are going to decorate your Christmas Tree, 
but to do that you need to estimate the number of garland lights you need to buy. 
To do that, you draw a scheme of your tree:

   *
  ***
 *****
*******
  ...

You'd like to decorate the tree in such a way that there's a light on every * of the tree.
Given n, an integer representing the number of rows in scheme - the height of the tree,
your task is to determine how many lights you'll need in total.

Example

    For n = 1, the output should be
    christmasTreeLights(n) = 1.

    *

    This tree only has one *, so you'll only need 1 light.

    For n = 2, the output should be
    christmasTreeLights(n) = 4.

     *
    ***

    This tree has a total of 4 *'s, so you'll need 4 lights.

Input/Output

    [execution time limit] 0.5 seconds (cpp)

    [input] integer n

    The height of the tree.

    Guaranteed constraints:
    1 ≤ n ≤ 107.

    [output] integer64
    The number of the lights required.


*/
long long christmasTreeLights(int n) {
    if (n == 1) {
        return 1;
    }
    return 2 * n-1 + christmasTreeLights(n-1);
}
