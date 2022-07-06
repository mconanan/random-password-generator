# random-password-generator
Week 3 challenge; de-bug to create working random password generator

When generate password button is clicked, a window prompt opens asking for desired length of password between 8 - 128.

If user enters a number less than 8, or greater than 128, an alert is returned asking the user to choose a number between 1 - 128.

After the desired length is input, the user is asked via window prompt to ask if they want to add special characters to their generated password. The user hits confirm for yes, or cancel for no.

Next, the user is asked if they want to include numbers.

Finally, the user is asked if they want to include uppercase letters.

In the JavaScript, the confirmed choices are viewed as Boolean "true" statements. Using "if statements," choices confirmed as true will be added to the string of lower case letters.

A for-loop is used to loop through each of the strings of posibilities to the desired length (length input by the user).
A "math.floor / math.random" equation is used to randomize the desired number of values to return a password.

A function is used to show the function that generated the password in the text box.

A click-event is used to initialize the generate password function.

URL to repository:
URL to deployed webpage: 
