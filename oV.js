// // for loop


// for(let i = 81; i <= 131; i++){
//     console.log(i);
// }

// for(let text = 1; text <= 10; text++){
//     console.log('I love sucking........');
// }
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}