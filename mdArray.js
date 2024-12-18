/*let subarrays1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subarrays2 = [24, 65, 21, 5, 9];

let newArrray =  */

// Prompt user for input (For simplicity, directly assigning the values as per the problem)
let subArray1 = prompt("Enter names: ") // Genevieve,Juan,Luna,Gabriel,Elise
let subArray2 = prompt("Enter ages: ") // 24, 65, 21, 5, 9

// Ensure both arrays have the same length
if (subArray1.length !== subArray2.length) {
  console.error("The number of names and ages must be equal.");
} else {
  // Restructure the arrays into a new multi-dimensional array
  let restructuredArray = [];
  
  for (let i = 0; i < subArray1.length; i++) {
    restructuredArray.push([subArray1[i].trim(), subArray2[i]]);
  }

  // Log each sub-array to the console
  console.log("Restructured Array:");
  restructuredArray.forEach((subArray) => console.log(subArray));
}
