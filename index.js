// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callbackFn){
  array.forEach(callbackFn);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array){
  array[index] = "Hello"; 
}
