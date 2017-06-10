function changeCompletely(element, index, array) {
  array[index] = 'hi'
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

var animals = ["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely);

console.log(animals)