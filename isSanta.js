/*
This is a reverse challenge.
A reverse challenge is a special type of challenge, where no description is provided!
You have to solve two challenges in one: \
find out what the author wants from you and write a solution.

Example

For s = "Hello", the output should be isSanta(s) = "Hey, someone! Merry Christmas and have a nice day!";
For s = "Merry Chrismas, hohoho!", the output should be isSanta(s) = "It is Santa! Merry Christmas and a Happy New Year!".

Test Cases:

Test 1
Input: s: "Hello"
Expected Output: "Hey, someone! Merry Christmas and have a nice day!"

Test 2
Input: s: "Merry Chrismas, hohoho!"
Expected Output:"It is Santa! Merry Christmas and a Happy New Year!"

Test 3
Input: s: "It is not Santa, hoho!"
Expected Output: "Hey, someone! Merry Christmas and have a nice day!"

Test 4
Input: s: "Hohoho! Have a nice holidays!"
Expected Output: "It is Santa! Merry Christmas and a Happy New Year!"

Test 5
Input: s: "Someone wishes you great holidays and good luck in 2019! Keep going! Discover, develop, and have fun!"
Expected Output: "Hey, someone! Merry Christmas and have a nice day!"

Test 6
Input: s: "It is Kevin Hohoh, do you have time to speak about Jesus Christ?"
Expected Output: "Hey, someone! Merry Christmas and have a nice day!"

Test 7
Input: s: "What about HoHoHo?"
Expected Output: "It is Santa! Merry Christmas and a Happy New Year!"

*/


function isSanta(s) {
    if (s.match(/hohoho/i)) {
        return "It is Santa! Merry Christmas and a Happy New Year!";
    }else {
        return "Hey, someone! Merry Christmas and have a nice day!";
    }
}
