/* 
* | GENÉRICOS |
? Os genéricos são modelos de código que você pode definir e reutilizar em toda a base de código, um genérico permite que você informe ao componente qual tipo ele deve esperar no momento que é chamado
! Crie funções genéricas quando seu código for uma função ou classe que:
 * Funciona com uma variedade de tipos de dados.
 * Usa esse tipo de dados em vários lugares.
! Os genéricos podem:
 * Fornecer mais flexibilidade ao trabalhar com tipos.
 * Permitir a reutilização de código.
 * Reduzir a necessidade de usar o tipo any.
*/

function gerarArray<T>(items: T[]) : T[] {
    return new Array<T>().concat(items)
}

let numberArray = gerarArray<number>([5, 10, 15, 20]);
let stringArray = gerarArray<string>(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                    
stringArray.push('Rabbits');             
//! numberArray.push('This is not a number');
//! stringArray.push(30);                    
console.log(numberArray);
console.log(stringArray);

/*
* | USANDO VARIÁVIES DE VÁRIOS TIPOS |
? Assim não limitamos a nosso componente genérico a apenas uma variável de tipo
*/

function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;
//returnString = returnString * 100;   //! Error: Type 'number' not assignable to type 'string'
//returnBoolean = returnBoolean * 100; //! Error: Type 'number' not assignable to type 'boolean'

/*
* | RESTRIÇÕES GENÉRICAS PARA LIMITAR TIPOS |
? Fazemos isso quando desejamos realizar uma operação que se limita apenas a alguns tipos de variáveis
*/

type ValidTypes = string | number;

function identityRestrit<T extends ValidTypes, U> (value: T, message: U) {
    //* Usando proteção de tipos com genéricos
    //?  Para verificar o tipo de uma classe, use uma proteção de tipo instanceof

    //? aqui ja inferimos que o tipo que deve ser retornado será do type ValidTypes, o mesmo que T
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let returnRestritNumber = identityRestrit<number, string>(100, 'Hello!');
let returnRestritString = identityRestrit<string, string>('100', 'Hola!');
//let returnRestritBoolean = identityRestrit<boolean, string>(true, 'Bonjour!'); //! Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

console.log(returnRestritNumber);       // Returns 200
console.log(returnRestritString);       // Returns 100100

/*
* | RESTRINGINDO UM TIPO À PROPRIEDADE DE OUTRO OBJETO |
? Aqui utilizamos o extends com o operador keyof, dessa forma dizemos que o tipo do nosso parâmetro K desse ser o mesmo das keys de T.
? Utilizamos aqui o esquemar par chave-valor, então se o tipo da chave de T é string, logo K deve ser uma string, se o tipo da chave de T for um number, logo K também deve ser um number
*/

function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
}
    
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}
  
console.log(getPets(pets1, "fish"));  // Returns 6
//console.log(getPets(pets2, '3'));     //! Error
console.log(getPets(pets2, 3));