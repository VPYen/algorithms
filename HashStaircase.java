/*

Consider a staircase of size n = 4 :

     #
    ##
   ###
  ####

Observe that its base and height are both equal to n,
and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

Function Description

  Complete the staircase function in the editor below. It should print a staircase as described above.

Staircase has the following parameter(s):

  n: an integer

Input Format

  A single integer, n, denoting the size of the staircase.

Constraints

  0 < n < 100

Output Format

  Print a staircase of size n using # symbols and spaces.

Note: The last line must have 0 spaces in it.

Sample Input

6

Sample Output
     #
    ##
   ###
  ####
 #####
######

*/

// Function provided; however, will require proper formatting in order to run.
class HashStaircase {
  static void staircase(int n) {
    for(int i = 1; i <= n; i++) {
      String spaceStr = new String(new char[n-i]).replace("\0"," ");
      String hashStr = new String(new char[i]).replace("\0", "#");
      System.out.println(spaceStr + hashStr);
    }
  }
  public static void main(String[] args) {
    // Enter arguments here
  }
}
