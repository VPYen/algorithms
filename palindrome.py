# Given an integer x, return true if x is a palindrome, and false otherwise.

# Example 1:

# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.

# Example 2:

# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

# Example 3:

# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

# Constraints:

#     -231 <= x <= 231 - 1

 
# Follow up: Could you solve it without converting the integer to a string?

from math import log10

class Solution:
    def isPalindrome(self, x: int) -> bool:
        strP = str(x)
        strPR = strP[::-1]
        
        if strP != strPR:
            return False
        return True
    
    def isPalindromeAsInt(self, x: int) -> bool:
        if x < 0:
            return False
        elif x == 0:
            return True

        # This gives the number of digits in the variable - 1
        n = int(log10(x))
        for i, j in zip(range(n, 0, -1), range(n+1)):
            a = int((x / (10 ** i)) % 10)
            b = int((x / (10 ** j)) % 10)
            if a != b :
                return False
        #Alternate solution
            # i = 0
            # while n > 0:
            #     a = int((x / (10 ** n)) % 10)
            #     b = int((x / (10 ** i)) % 10)

            #     if a != b:
            #         return False
            #     n = n - 1
            #     i = i + 1
        return True