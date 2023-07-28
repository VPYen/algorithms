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
    
