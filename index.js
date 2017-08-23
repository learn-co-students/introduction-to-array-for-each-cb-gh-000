// Add your doToElementsInArray() function here:
function doToElementsInArray(array,callback){
  array.forEach(callback)
}

// Add your changeCompletely() function here:

function changeCompletely(e,i,a){
  a[i] = `X${e}X`
}
array = ['jhondz','brendan']
doToElementsInArray(array,changeCompletely);
