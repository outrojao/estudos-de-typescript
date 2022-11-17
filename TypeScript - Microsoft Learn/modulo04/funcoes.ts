//* Essa função irá receber dois parâmetros, x e y sendo ambos do tipo number, além disso definimos que o conteúdo retornado da função também deve ser do tipo number
const addNumbers = (x: number, y: number): number => x + y;
addNumbers(1, 2);


//* Definimos aqui que essa função receberá o parâmetro input que será um lista/array de itens do tipo number (number[]) e o retorno da função será do também do tipo number porém somente um item
//? 
const calcularTotal = (input: number[]): number => {
    const total: number = input.reduce((somaTotal: number, numero: number): number => {
        return somaTotal += numero
    }, 0)

    return total
}

console.log(calcularTotal([1, 2, 3]));


//* | PARÂMETROS OPCIONAIS |
//? devem vir depois dos parâmetros obrigatórios, nesse caso o x é obrigatório e o y opcional
function adicionaNumbers (x: number, y?: number): number {
    if (y === undefined) { //? aqui vemos se o parâmetro opcional y foi definido ou não
        return x; //? caso ele não tenha sido definido iremos retornar apenas o x
    } else {
        return x + y; //? senão retornamos a soma de x e y
    }
}

adicionaNumbers(1, 2); // Retorna 3
adicionaNumbers(1);    // Retorna 1

//* | PARÂMETROS REST |
//? Usamos quando precisamos de vários parâmetros como um grupo (em uma matriz) ou se não soubermos de quantos parâmetros uma função precisará. Os parâmetros rest são tratados como um número ilimitado de parâmetros opcionais. Podemos deixá-los desativados ou usar o máximo que desejar

function itensCesta(nomeDaCesta: string, ...cesta: string[]){
    if(cesta.length === 0){
        console.log(`A cesta ${nomeDaCesta} não foi definida`)
    } else {
        console.log(`A cesta ${nomeDaCesta} possue ${cesta.length} ${cesta.length >= 2 ? 'itens' : 'item'}: ${cesta}`)
    }
}

itensCesta('lista do mercado', 'alface', 'maça', 'banana') //3 itens
itensCesta('pra comprar hoje', 'ovo', 'carne') //2
itensCesta('doces', 'pudim')

//* | PARÂMETROS DE OBJETOS DESCONTRUÍDOS |

interface Texto {
    texto: string;
    autor: string;
 }
 
function mostrarTexto({texto, autor}: Texto) {
    console.log(`Texto de ${autor}: ${texto}`);
}
 
mostrarTexto({autor: 'Christopher', texto: 'hello, world'});

/*
* | TIPOS DE FUNÇÃO |
? Podemos definir os tipos de funções para aplicarmos a mesma forma de função em mais de uma função
? Para definir os tipos podemos usar interfaces e alias de tipo, a interface é melhor se quisermos estender o tipo de função e o alias de tipo é útil caso queiramos usar uniãos ou tuplas
*/

//? declaramos que toda função do tipo calculator deve receber os parâmetros x e y que serão do tipo number e devem retornar algo do tipo number também
//type calculator = (x: number, y: number) => number

interface Calculator {
    (x: number, y: number): number;
}

const adiciona: Calculator = (num1, num2) => num1 + num2
const subtrai: Calculator = (num1, num2) => num1 - num2

console.log(adiciona(1,2));
console.log(subtrai(4,3));

const fazCalculo = (operacao: 'adicionar' | 'subtrair'): Calculator => {
    if (operacao === 'adicionar') {
        return adiciona;
    } else {
        return subtrai;
    }
}

console.log(fazCalculo('adicionar')(6,5));