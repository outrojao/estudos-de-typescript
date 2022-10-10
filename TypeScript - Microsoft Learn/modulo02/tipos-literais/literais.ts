/*
* | TIPOS LITERAIS |
Os tipos literais nos permitem restringir os valores atribuídos a um tipo a uma lista restrita de opções
* Essa definição de tipo cria um tipo literal chamado testeResultado, que pode conter um dos três valores de string:
? type testeResultado = "passou" | "falhou" | "incompleto"
*/

type testeResultado = "passou" | "falhou" | "incompleto"
//? definindo a let 'meuResultado' como do tipo testeResultado estamos dizendo ao TypeScript que essa variável só irá conter os possíveis valores quem um tipo testeResultado pode ter, então somente irá apresentar os valores "passou", "falhou" ou "incompleto"
let meuResultado: testeResultado;
meuResultado = "incompleto";        //* Válido
meuResultado = "passou";            //* Válido
//meuResultado = "failure";         //! Erro

type dado = 1 | 2 | 3 | 4 | 5 | 6;
let dadoRolado: dado;
dadoRolado = 1;    //* Válido
dadoRolado = 2;    //* Válido
//dadoRolado = 7;    //! Erro