/*
TODO: Declare a new function type for the sortDescending and sortAscending functions.
TODO: Convert the sortDescending and sortAscending functions to arrow functions.
? sortDescending is a comparison function that tells the sort method how to sort numbers in descending order
*/

type compareFunctionType = (a: number, b:number) => number; //* Define um tipo de função, aqui estamos definindo que as funções do tipo compareFunctionType recebem dois parâmetros do tipo number e retornam um number

let sortDescending: compareFunctionType = (a, b) => { //? tendo definido que sortDescending é uma funçõa do tipo compareFunctionType não precisamos definir os tipos dos parâmetros, já que estão intregados na associação de tipo
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
 }
 
 let sortAscending: compareFunctionType = (a, b) => {
     if (a > b) {
       return 1;
     } else if (b > a) {
       return -1;
     } else {
       return 0;
     }
   }

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
 
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
          randomNumbers.push(nextNumber);
        } else {
          counter--;
        }
    }
 
    if (sortOrder === 'ascending') {
      return randomNumbers.sort(sortAscending);
    } else {
      return randomNumbers.sort(sortDescending);
    }
 }

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);