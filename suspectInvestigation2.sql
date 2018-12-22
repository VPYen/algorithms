/*
A large amount of money was stolen today from the main city bank,
and as the chief of police it's your duty to find the robber.

You store information about your suspects in the table Suspect, which has the structure:

    id: unique suspect id;
    name: suspect first name;
    surname: suspect surname;
    height: suspect height;
    weight: suspect weight.

You have already gathered some evidence and discovered the following clues:

    According to the camera records, the robber is taller than 170cm;
    the robber left their signature near the crime scene: "B. Gre?n". "B"
    definitely stands for the first letter of robber's name, and "Gre?n" is their surname.
    The 4th letter of the surname is smudged by ketchup and is unreadable.

The clues you've obtained allow you to let some suspects go since they can't possibly be guilty,
so now you need to build a list that contains the people who can be freed based on the gathered information.
For each of these people, you need to know his/her id, name and surname.
Please note that the information obtained from the clue should be considered case-insensitive,
so for example "bill Green", "Bill GrEeN", and "Bill Green" should all be included in the new table.

Given the table Suspect, build the resulting table as follows: the table should have columns id,
name and surname and its values should be ordered by the suspects' ids in ascending order.

For the following table of Suspect
id 	name 	surname 	height 	weight
1 	John 	Doe 	      165 	60
2 	Bill 	Green 	    170 	67
3 	Baelfire 	Grehn 	172 	70
4 	Bill 	Gretan 	    185 	55
5 	Brendon 	Grewn 	180 	50
6 	bill 	Green 	    172 	50

the output should be
id 	name 	surname
1 	John 	Doe
2 	Bill 	Green
4 	Bill 	Gretan
*/
CREATE PROCEDURE suspectsInvestigation2()
BEGIN
	SELECT id, name, surname FROM Suspect
    WHERE height <= 170
    OR name NOT LIKE 'B%'
    OR surname NOT LIKE 'Gre_n'
    ORDER BY id ASC;
END
