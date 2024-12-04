//Reham Wahbi , Francis Muzalbat
//Task 3

let arr = [12, 2, 0, 0, 4, 5, 0, 7, 0];
let sum = 0;
let isZero = true;
for (let i = 0; i <= arr.length; i++) {
  isZero = arr[i] == 0;
  sum += Number(isZero);
}
console.log(`The sum of zeros in the array is : ${sum}`);