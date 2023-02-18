// Solution to Quetion No 3 
let Science = "Physics, Chemistry, Biology, Technical Drawing";
let Arts = "Government, Economics, Literature, History";
let socialScience = "Accounting, Commerce, Marketing, Geography";
let General = "English, Mathematics";
let classGroup = prompt("Enter your class group: ");

if (classGroup === "Science") {
  console.log("Here are the Science subjects: " + Science + "," + " " + General + ".");
} else if(classGroup === "Arts") {
  console.log("Here are the Arts subjects: " + Arts + "," + " " + General + ".");
} else if(classGroup === "Social Science") {
  console.log("Here are the Social Science subjects: " + socialScience + "," + " " + General + ".");
} else {
  console.log("Here are the general subjects: " + General + ".");
}

// Answer to Question No 4
/* When the program is executed, it will log the values of the variable, i to the console three times.
The loop starts with i = 1 and increments i by 7 in each iteration, so the loop will execute three times with the values of i being 1, 8, and 15. Once i reaches 22, the condition i < 20 becomes false, and the loop terminates. */

// Solution to Question No 5
function nearestPowerOfTwo(num) {
  let pwr = 1;
  let prevPwr = pwr;
  while (pwr < num) {
    prevPwr = pwr;
    pwr *= 2;
  }
  if (num - prevPwr <= pwr - num) {
    return prevPwr;
  } else {
    return pwr;
  }
}

let num = 40;
let pwr = nearestPowerOfTwo(num);

console.log("The number " + pwr + " " + "is the power of 2 nearest to" + " " + num);
