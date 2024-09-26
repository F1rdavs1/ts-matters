"use strict";
// 1-masala
// interface User {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   hobbies: string[];
// }
// let user: User = {
//   name: "John Doe",
//   age: 30,
//   isStudent: true,
//   hobbies: ["Reading", "Gaming", "Coding"],
// };
// 2-masala
// function countPositiveNumbers(arr: number[]): number {
//   return arr.filter((num) => num > 0).length;
// }
// console.log(countPositiveNumbers([3, 0, -9, -23, 5, -22]));
// 3-masala
// function fizzBuzz(n:number):void{
//     for(let i = 1; i < n; i++){
//         if(i % 3 == 0){
//             console.log("Fizz");
//         } else if(i % 5 == 0){
//             console.log("Buzz");
//         } else if (i % 3 == 0 && i % 5 == 0){
//             console.log("FizzBuzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(15)
// 4-masala
// function sumArray(arr:number[]):number {
//     return arr.reduce((sum, add) => sum + add, 0);
// }
// console.log(sumArray([3,5,6,7]));
// 5-masala
// function countWords(str: string): number {
//     return str.split(/\s+/).filter(word => word.length > 0).length;
// }
// console.log(countWords("Najot ta'Lim"));
// 6-masala
// function findMax(arr: number[]): number {
//   return Math.max(...arr);
// }
// console.log(findMax([3, 22, 9, 12]));
// 7-masala
// function findMin(arr:number[]):number{
//     return Math.min(...arr)
// }
// console.log(findMin([3, 22, 9, 12]));
// 8-masala
// function contains(arr: number[], target: number): boolean {
//   return arr.includes(target);
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(contains(numbers, 3));
// console.log(contains(numbers, 6));
// 9-masala
// function reverseArray(arr: number[]): number[] {
//   const reversed: number[] = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));
// 10-masala
// function capitalizeWords(str: string): string {
//   return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
// }
// console.log(capitalizeWords('this function is about capitalizing words'));
// 11-masala
// function average(arr: number[]): number {
//   const sum = arr.reduce((num1, num2) => num1 + num2, 0);
//   return sum / arr.length;
// }
// console.log(average([1, 2, 3, 4, 5]));
// 12-masala
// function filterArr(
//   arr: (number | string | boolean)[]
// ): (number | string | boolean)[] {
//   const result: (number | string | boolean)[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log([22, 22, 22, 9, 9, true, true, 5, 5, 5, 5]);
