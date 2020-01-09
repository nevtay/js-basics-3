// 1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
//    `'sahil'` and log it to the console
let arr = ['david', 'gordon', 'sahil'];

// 2. Log the value of the third element in `names` to the console

console.log(arr[3]);

// 3. Log the value of the `names` array's `length` property to the console
console.log(arr.length);

// 4. Set the value of the `length` property to `1`
arr.length = 1;

// 6. Once again, log the value of the `names` array's `length` property to the
//    console. Did it change?
console.log(arr.length);

// 7. Log the entire `names` array to the console again
console.log(arr.map(x => x));

// 8. Add a few more elements to the array using `push`
let newArr = ['Tim', 'Sally', 'Jerome'];
newArr.map(name => arr.push(name));

// 9. Log the last element of the array to the console
console.log(arr[arr.length - 1]);

// 10. Log the second last element of the array to the console
console.log(arr[arr.length - 2])

// 11. Change the `textContent` property of the _second_ `p` tag on the page to
//    `"JavaScript was here!"`
let p = document.querySelectorAll('p');
p[1].innerHTML = 'JavaScript was here!';


// 12. Convert the `names` array to a string, with each element separated by a
//    '<br>'. Store it in a new variable called `namesString` e.g. if `names` is
//    `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`
const namesString = arr.join('<br>');
console.log('joined array is ', namesString, typeof namesString);


// 13. Change the `innerHTML` property of the _first_ `p` tag on the page to
//    `namesString`. What happens when you use `textContent` instead of
//    `innerHTML`?
p[0].innerHTML = namesString;
// p[0].innerText = namesString;


