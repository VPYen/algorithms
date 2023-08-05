# You are climbing a staircase. It takes n steps to reach the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 
# Example 1:

# Input: n = 2
# Output: 2
# Explanation: There are two ways to climb to the top.
# 1. 1 step + 1 step
# 2. 2 steps

# Example 2:

# Input: n = 3
# Output: 3
# Explanation: There are three ways to climb to the top.
# 1. 1 step + 1 step + 1 step
# 2. 1 step + 2 steps
# 3. 2 steps + 1 step

 

# Constraints:

#     1 <= n <= 45



# Solution contians memoization to help reduce runtime overhead which would be O(2^n) under normal recursive circumstances
class Solution:
    def climbStairs(self, n: int) -> int:
        memo = {}
        return self.stairsHelper(n, memo)
    
    def stairsHelper(self, n: int, memo: dict[int, int]) -> int:
        if n == 0 or n == 1:
            return 1
        if n not in memo:
            memo[n] = self.stairsHelper(n-1, memo) + self.stairsHelper(n-2, memo)
        return memo[n] 
    
