: "

Display a range of characters starting at the 2nd position of a string
and ending at the 7th position (both positions included).

Input Format
  A text file containing N lines of ASCII text only.

Constraints
  1 <= N <= 100

Output Format

  The output should contain N lines.
  Each line should contain the range of characters starting at the 2nd position
  of a string and ending at the position 7th (both positions included).
  The output should contain lines. Each line should contain the range of characters
  starting at the 2nd position of a string and ending at the 7th position (both positions included).

Sample Input

Hello
World
how are you

Sample Output

ello
orld
ow are

"
while read x
do
  echo $x | -c2-7
done
