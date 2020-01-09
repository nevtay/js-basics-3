// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ['item 1', 'item 2', 'item 3']

// 2a. Using `for loop`, log every element of the `shoppingList` array to the console
for (let i = 0; i < shoppingList.length; i -= -1) {
    console.log(shoppingList[i]);
}

// 2b. Using `forEach`, log every element of the `shoppingList` array to the console
shoppingList.forEach(item => {
    console.log(`${item}`);
})

// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)
let list = document.querySelector('ul');
shoppingList.map((item,idx) => {
    if (idx === shoppingList.length - 1) {
        list.innerHTML += `${item}`;
    } else {
        list.innerHTML += `${item} <hr>`;
    }
    list.style.background = 'gold';
    list.style.padding = '30px 20px';
})


// 4. Create a new array `numbers` with a few numeric elements
let arr2 = [1, 2, 3];

// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
const sqNum = arr2.map(num => num ** 2);
console.log(sqNum);
// 5a. Using `for loop` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
const sqNum2 = [];
for (i = 0; i < arr2.length; i++) {
    sqNum2.push(arr2[i] * arr2[i]);
}
console.log(sqNum2);

// 5b. Using `forEach` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
const sqNum3 = [];
arr2.forEach(num => {
    sqNum3.push(num * num);
})

console.log(sqNum3);

console.log('we\'re done')