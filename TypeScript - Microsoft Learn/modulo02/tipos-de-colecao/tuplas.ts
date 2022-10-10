/*
* | TUPLAS |
Ter uma matriz dos mesmos tipos de valor é útil, mas às vezes você tem uma matriz que contém valores de tipos mistos. 
Para essa finalidade, o TypeScript fornece o tipo de tupla. 
* Para declarar uma tupla, use a sintaxe:
? variableName: [type, type, ...]
*/

let person: [string, number] = ['Marcia', 35]
//let person: [string, number] = ['Marcia', 35, true]; //! Um erro é gerado porque os elementos na tupla array são fixados, a ordem dos valores deve corresponder à ordem dos tipos.