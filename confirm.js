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

function getIndexToIns(arr1, num) {
  // Find my place in this sorted array.
  arr1.sort(function(a, b){return a - b});
  for(var i = 0; i < arr1.length; i++){
    
  }
  return arr1.indexOf(arr1[i]);
}
getIndexToIns([40, 60], 50);
