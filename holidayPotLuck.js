/*

You're getting together with your family for a nice holiday meal!
Every member of the family has brought a dish to share,
and you've already inspected them in terms of quality and quantity.

The array dishes contains 2-element arrays of the form [quality, quantity],
where quality represents how much you enjoy the dish, and quantity represents how much of the dish is available.

Given capacity representing the maximum total amount you can take,
your task is to return the maximum possible enjoyment you'll get from the food.

Note:

  You never get sick of any of the dishes, so your enjoyment doesn't diminish as you eat more of any given dish.
  When it comes to holiday meals, you tend to be greedy, so you won't be worrying about leaving some of the dishes for the other guests.

Example

  For dishes = [[0, 8], [4, 4], [10, 8], [8, 3], [5, 13]] and capacity = 10,
  the output should be holidayPotluck(dishes, capacity) = 96
  Dish 2 is your favourite, with a quality of 10,
  so you'll take the whole 8 servings available.
  At this point you still have a capacity of 2 remaining,
  so you can take 2 of dish 3, which has a quality of 8.
  So the total enjoyment is 8 * 10 + 2 * 8 = 96.

Input / Output

  [execution time limit] 4 seconds (js)

  [input] array.array.integer dishes

  An array of 2-element arrays of the form [quality, quantity],
  each representing one of the dishes.

  Guaranteed constraints:
  1 ≤ dishes.length ≤ 104
  dishes[i].length = 2
  0 ≤ dishes[i][j] ≤ 105

  [input] integer capacity

  An integer representing the maximum total amount of food you can take.

  Guaranteed constraints:
  0 ≤ capacity ≤ 108

  [output] integer
  An integer representing the total enjoyment you'll get out of the food you take
  (ie: the sum of the quality values of all the food you end up taking)

*/
function holidayPotluck(dishes, capacity) {
    let sum = 0;
    // Sort inner arrays by quality
    dishes.sort((a,b)=> {
        var qualityA = a[0];
        var qualityB = b[0];
        if (qualityA < qualityB) {
            return -1;
        }else if (qualityA > qualityB ) {
            return 1;
        }
        return 0;
    });

    for(let i = dishes.length - 1; i >= 0 ; i--) {
        console.log("quality", dishes[i][0]);
        console.log("capacity", capacity);
        if(capacity > 0) {
            console.log("quantity", dishes[i][1]);
            if(dishes[i][1] > capacity) {
                // Remaining capacity * Quality
                sum += capacity * dishes[i][0];
                capacity = 0;
            }else {
                // Quality * Quanity
                sum += dishes[i][1] * dishes[i][0];
                capacity -= dishes[i][1];
            }
        }else {
            return sum;
        }
    }
    return sum;
}
