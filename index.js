// Add your doToElementsInArray() function here:
function doToElementsInArray(evens,callback){
  evens.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(elem, index, arr){
  arr[index] = `${index}.${elem}`
}
