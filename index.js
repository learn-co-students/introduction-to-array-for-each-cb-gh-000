// Add your doToElementsInArray() function here:
function doToElementsInArray(arr,cb){
  arr.forEach(cb);
}

// Add your changeCompletely() function here:
function changeCompletely(el, i, arr){
    arr[i] = Math.floor(Math.random() * 100 + 2).toString() + ` ${arr[i]}s!!!`;
}
