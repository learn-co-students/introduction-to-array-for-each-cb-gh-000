// Add your doToElementsInArray() function here:
function doToElementsInArray(arr, fn) {
  arr.forEach(fn);
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
 
