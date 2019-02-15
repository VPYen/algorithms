/*

You are given a string containing characters A and B only.
Your task is to change it into a string such that there are no matching adjacent characters.
To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string s = AABAAB,
remove A an at 0 positions 3 and to make in 2 deletions.

Function Description

  Complete the alternatingCharacters function in the editor below.
  It must return an integer representing the minimum number of deletions to make the alternating string.

alternatingCharacters has the following parameter(s):

  s: a string

Input Format

  The first line contains an integer q, the number of queries.
  The next q lines each contain a string s.

Constraints
  1 <= q <= 10
  1 <= |s| <= 10^5
  Each string s will consist of characters A and B only.

Output Format

  For each query, print the minimum number of deletions required on a new line.

Sample Input

5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

Sample Output

3
4
0
0
4

*/

class AlternatingCharacters {
  static int altChar(String s) {
    char lastChar = s.charAt(0);
    int count = 0;
    for(int i = 1; i < s.length(); i++) {
        if(s.charAt(i) == lastChar) {
            count++;
        }
        lastChar = s.charAt(i);
    }
    return count;
  }

  public static void main(String[] args) {
    // Enter test arguments here
  }
}
