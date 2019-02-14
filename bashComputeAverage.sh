: "
Given N integers, compute their average correct to three decimal places.

Input Format
  The first line contains an integer, N.
  N lines follow, each containing a single integer.

Output Format
  Display the average of the N integers, rounded off to three decimal places.

Input Constraints
  1 <= N <= 500
  -10000 <= x <= 10000 (refers to elements of the list of integers for which the average is to be computed)

Sample Input

4
1
2
9
8

Sample Output

5.000

"
read x
count=0
for ((i = 0; i <= $x; i++))
    do
        read next
        count=$((count+next))
    done
printf "%.3f" $(echo $count/$x | bc -l )
