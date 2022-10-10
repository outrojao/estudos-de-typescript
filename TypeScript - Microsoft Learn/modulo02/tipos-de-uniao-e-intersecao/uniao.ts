/*
* | TIPOS DE UNIÃO |
Um tipo de união descreve um valor que pode ser um dos vários tipos especificados. Isso pode ser útil quando um valor não está sob seu controle (por exemplo, valores de uma biblioteca, uma API ou entrada de usuário).
* Um tipo de união usa a barra vertical (|) para separar cada tipo
? let multiType: number | boolean;
* Sendo assim a variável multiType pode ser do tipo number ou boolean, e somente desses, qualquer tipo que seja atribuido a variável multiType diferente dos especificados com o tipo de união será considerado como um erro
? multiType = "twenty";   //! Erro, pois é do tipo string

! | OBSERVAÇÃO | 
? O tipo any também pode aceitar tipos diferentes, então por que você desejaria usar um tipo de união? Os tipos de união restringem a atribuição de valores aos tipos especificados, enquanto o tipo any não tem restrições. Outro motivo é o suporte do IntelliSense.
*/

let multiType: number | boolean
multiType = 20;         //* Válido
multiType = true;       //* Válido

//* Usando protetores de tipo, podemos trabalhar facilmente com uma variável de um tipo de união

function adicionar(x: number | string, y: number | string) { //? os parâmetros podem ser apenas do tipo number ou string
    //? caso x e y forem do tipo number serão somados
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    //? caso x e y forem do tipo string serão concatenados e formarão uma nova string 
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new TypeError('Ambos os parâmetros devem ser do tipo number ou string');
}
console.log(adicionar('ola ', 'tudo bem?'));  //* "ola tudo bem?"
console.log(adicionar(1, 2));                 //* 3
console.log(adicionar('one', 2));             //! Erro