# JS
js-applicatios

//Confirm the Ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  //return str.endsWith("n");
  if(str.substr(-target.length) == target){
    return true;
  }
  return false;

}
confirmEnding("Bastian", "n");
