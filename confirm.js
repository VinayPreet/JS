# JS
js-applicatios

//Confirm the Ending
function confirmEnding(str, target) {
  //return str.endsWith("n");
  if(str.substr(-target.length) == target){
    return true;
  }
  return false;

}
confirmEnding("Bastian", "n");

//sort
function getIndexToIns(arr1, num) {
  // Find my place in this sorted array.
  arr1.sort(function(a, b){return a - b});
  for(var i = 0; i < arr1.length; i++){
    
  }
  return arr1.indexOf(arr1[i]);
}
getIndexToIns([40, 60], 50);

//Array
var fruits = ["Apple", "Banana", "Oranges"];
var x = [];
for(var i = 0; i < fruits.length; i++){
 // x = fruits[i];
 console.log(fruits[i]);
}
