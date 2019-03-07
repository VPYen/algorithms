/*

Given a time in 12-hour AM/PM format, convert it to 24-hour hour format.
  Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
  Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below.
It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

  s: a string representing time in 12-hour format

Input Format

A single string s containing a time in 12-hour clock format (i.e. hh:mm:ssAM or hh:mm:ssPM),
where 01 <= hh <= 12 and 00 <= mm, ss <= 59.

Constraints

  All input times are valid

Output Format

Convert and print the given time in 24-hour format, where 00 <= hh <= 23.

Sample Input 0

07:05:45PM

Sample Output 0

19:05:45

*/

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;


class TimeConverter {
  public static String timeConversion(String s) {
    LocalTime newTime = LocalTime.parse(s.substring(0, s.length()-2));
    DateTimeFormatter formatter = DateTimeFormatter.ISO_TIME;
    if (s.contains("A")) {
        if(newTime.getHour() == 12) {
            newTime = newTime.minusHours(12);
        }
    }else {
        if(newTime.getHour() < 12)
            newTime = newTime.plusHours(12);
    }
    System.out.print(newTime.format(formatter));
    return String.valueOf(newTime.format(formatter));
  }
  public static void main(String[] args) {
    // Enter arguments here
    // example: timeConversion("03:35:12PM");
  }
}
