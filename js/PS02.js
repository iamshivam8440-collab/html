/* Write a code which can give grade to students according to their score.
    80-100-->A
    70-89-->B
    60-69-->C
    50-59-->D
    0-49-->F
*/
let num = prompt("Enter your percentage:");
console.log("Your percentage is:", num, "%");
if (num >= 80 && num <= 100) {
  console.log("Grade A");
} else if (num < 80 && num >= 70) {
  console.log("Grade B");
} else if (num < 70 && num >= 60) {
  console.log("Grade C");
} else if (num < 60 && num >= 50) {
  console.log("Grade D");
} else if (num < 50) {
  console.log("Grade F");
}
