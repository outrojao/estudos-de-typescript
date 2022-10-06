/*
* Usamos os tipos any e unknown quando precissamos trabalhar com valores que são desconhecidos no momento ou que são de um intervalo restrito de tipos de valores.
* Sendo assim podemos declarar esse valor como any ou unknown e utilizar as proteções de tipo para manter o controle sobre o que o código tem permissão para fazer com os valores que são passados.

* | ANY |
Esse tipo pode representar qualquer valor, sem restrições. Podemos usa-lo quando esperamos um valor de uma biblioteca de terceiros (ou apis) ou de entradas de usuário em que o valor é dinâmico.
O tipo any permite que nós retribuamos diferentes tipos de valores.

! | IMPORTANTE |
? Lembre-se de que toda a conveniência do any vem ao custo da perda da segurança de tipos. A segurança de tipos é uma das principais motivações para usar o TypeScript. Evite usar any quando não for necessário.
*/

//* ANY
let algumValor: any = 10;
algumValor = 'João';   //? OK
algumValor = true;      //? OK

//* Podemos não apresentar erros no console por conta de termos definido o tipo de algumValor como any, porém dependendo do valor real da variável teremos erros durante a execução do código:
console.log(algumValor.nome);  //? Logs "undefined" to the console
algumValor();                  //? Returns "algumValor is not a function" error
algumValor.toUpperCase();      //? Returns "algumValor is not a function" error

/*
* | UNKNOWN | 
O tipo unknown foi criado em contrapartidao ao erros inesperados que podem ocorrer no tipo any.
O tipo unknown é semelhante ao tipo any, pois qualquer valor pode ser atribuído ao tipo unknown. No entanto, você não pode acessar nenhuma propriedade de um tipo unknown, nem os chamar ou os construir.

! | OBSERVAÇÃO |
? A principal diferença entre any e unknown é que você não pode interagir com uma variável do tipo unknown; fazer isso gera um erro do compilador. O any ignora qualquer verificação de tempo de compilação e o objeto é avaliado em runtime; se o método ou a propriedade existir, ele se comportará conforme o esperado.
*/

//* UNKNOWN
let valorAleatorio: unknown = 10;
valorAleatorio = true;
valorAleatorio = 'João';

//console.log(valorAleatorio.name);  //! Error: Object is of type unknown
//valorAleatorio();                  //! Error: Object is of type unknown
//valorAleatorio.toUpperCase();      //! Error: Object is of type unknown

/*
* | ASSERÇÃO DE TIPO |
Se você precisar tratar uma variável como um tipo de dados diferente, poderá usar uma declaração de tipo. 
Uma declaração de tipo informa ao TypeScript que você executou as verificações especiais necessárias antes de chamar a instrução. 
Ele informa ao compilador "confie em mim, eu sei o que estou fazendo". Uma declaração de tipo é como uma cast de tipo em outras linguagens, mas não executa nenhuma verificação especial ou reestruturação de dados. 
Isso não tem impacto em runtime e é usado puramente pelo compilador.
* As asserções de tipo têm duas formas. Uma é a as-sintaxe:
? (randomValue as string).toUpperCase();
* A outra versão é a sintaxe "colchete angular":
? (<string>randomValue).toUpperCase();

! | OBSERVAÇÃO |
? A "as" é a sintaxe preferida. Alguns aplicativos do TypeScript, como o JSX, podem ser confundidos ao usar o < > para conversões de tipo.
*/

let randomValue: unknown = 10;

randomValue = true;
randomValue = 'João';

if (typeof randomValue === "string") { // Se o tipo de randomValue for igual a "string", executa a ação:
    // Assim dizemos ao compilador para confiar em nós e que já verificamos que o tipo de randomValue é string
    console.log((randomValue as string).toUpperCase());    //? Returns JOÃO to the console.
} else {
    console.log("Error - O tipo esperado era 'string'");    //? Returns an error message.
}

//* | PROTETORES DE TIPO |
//? typeof & instanceof

const a: number[] = [1, 2, 3, 4, 5]

if(Array.isArray(a)){
    console.log('é um array')
}