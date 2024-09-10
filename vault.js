
/*
1. I will create a string message to make sure user knows about the topic of this code.
2. By using three different arithmetic operations I will create three different variables which will carry a combination to the vault lock.
3. Every variable in this code has to be equal to one of the numbers 10, 40, and 39 by using addition, subtraction, multiplication, or division.
4. I will display a popup comment that shows the message and the three variables combination.
5. Test the output using an alert in the browser (and preferably not through html).
*/

const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"; //the message that is going to pop up
const one = 1;
const five = 5;
const six = 6;
const eight = 8;
const nine = 9;
const fortyfive = 45;

console.log(one + nine); //addition
console.log(eight * five); //multiplication
console.log(fortyfive - six); //subtraction

alert(message + ` ${one+nine} - ${eight*five} - ${fortyfive-six}`); //instead of using the simple "one" + "nine" etc... i've use a much quicker method that Aaron has shown in the class.
