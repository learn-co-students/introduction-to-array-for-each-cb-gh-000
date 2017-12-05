// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback){
  array.forEach(callback)
}

// Add your changeCompletely() function here:
function changeCompletely(element,index,array){
  array[index] = '!!';
}
var name = ['Victor',' Henry', 'Johnpaul','Ruth','Benita'];

doToElementsInArray(name, changeCompletely);
console.log(name);
