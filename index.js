// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback)
{
    array.forEach(callback);
}

const twits = {
  'id': '21654654',
  'user_id': '26546546546',
  'twit_id': '454654646',
  'twit_title': 'Hello World!',
  'twit_body': 'Hello to everyone guys!!!!'
};

doToElementsInArray(twits,(item) => {
        console.log(item);
});
// Add your changeCompletely() function here:
function changeCompletely(element, index, array)
{
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}


twits.forEach(changeCompletely);
