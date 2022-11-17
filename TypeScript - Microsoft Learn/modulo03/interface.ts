/*
* | INTERFACE |
Interfaces são puramente constructos de tempo de compilação e as usamos  para descrever um objeto, nomear e parametrizar os tipos do objeto e compor tipos de objetos nomeados existentes em novo. O único trabalho de uma interface é descrever um tipo e são particularmente úteis para documentar e validar a forma necessária de propriedades, objetos passados como parâmetros e objetos retornados de funções. Isso permite que detectemos erros e verifiquemos se estamos passando os parâmetros certos no tempo de compilação
*/

interface Pessoa {
    primeiroNome: string;
    ultimoNome: string;
    nomeCompleto(): string;
}

const meuAmigo: Pessoa = {
    primeiroNome: "Pedro",
    ultimoNome: "Henrique",
    nomeCompleto(): string {
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

//meuAmigo.primeiroNome = 10 //! O tipo 'number' não pode ser atribuído ao tipo 'string'

/*
* | DIFERENÇA ENTRE INTERFACE E TYPE |
O exemplo anterior também poderia ser escrito dessa forma:
* type Pessoa =  {
?   primeiroNome: string;
?   ultimoNome: string;
?   nomeCompleto(): string;
* }

! Então qual seria a diferença de interface para type?
? type é uma definição de um tipo de dado ao qual pode ser do tipo de união, primitivo, interseção, tupla e etc. Já a interface é um modo de descrever as formas de dados como um objeto.
? A principal diferença é que um type não pode ser reaberto para a adição de novas propriedades, enquanto uma interface é sempre extensível. Além disso, você só pode descrever uma união ou tupla usando um type
*/

interface Motorista {
    carteiraDeHabilitacao: CNH,
    veiculo: veiculo
}

type CNH = {
    nomeCompleto: string
    CPF: number
}

type veiculo = {
    tipoDeVeiculo: 'Carro' | 'Moto'
    placa: string
    tipoDeCombustivel: 'Gasolina' | 'Diesel' | 'Etanol'
}


const minhaCNH: CNH = {
    nomeCompleto: 'João Victor',
    CPF: 2222
}

const meuCarro: veiculo = {
    tipoDeVeiculo: "Carro",
    placa: 'KLF3L22',
    tipoDeCombustivel: "Gasolina"
}

const eu: Motorista = {
    carteiraDeHabilitacao: minhaCNH,
    veiculo: meuCarro
}

console.log(eu)

/*
* | ESTENDENDO INTERFACES |
Isso permite que você copie os membros de uma interface em outra, proporcionando a você mais flexibilidade na maneira de separar suas interfaces em componentes reutilizáveis.

* | REGRAS |
? Você precisa implementar todas as propriedades necessárias de todas as interfaces.
? Duas interfaces poderão ter a mesma propriedade se a propriedade tiver exatamente o mesmo nome e o mesmo tipo.
? Se duas interfaces tiverem uma propriedade com o mesmo nome, mas tipos diferentes, você precisará declarar uma nova propriedade de modo que a propriedade resultante seja um subtipo de ambas as interfaces.
*/

interface Leao {
    nome: string,
    idade: number,
    cor: string
}

interface MeuLeao extends Leao {
    função: string
    comeu: boolean
}

const meuLeao: MeuLeao = {
    nome: 'Mufasa',
    idade: 30,
    cor: 'amarelo',
    função: 'Rei',
    comeu: true
}

function averiguarLeao(leao: MeuLeao){
    if(leao.idade >= 50){
        console.log(`${leao.nome} é um leão de ${leao.idade} anos de idade, um leão velho`)
    } else {
        console.log(`${leao.nome} é um leão novo que tem a função de ${leao.função} e ${leao.comeu ? 'já comeu' : 'ainda não comeu'}`);
    }
}

averiguarLeao(meuLeao)

/*
* | OUTRAS MANEIRAS DE USAR AS INTERFACES |
? Criar tipos indexáveis
? Descrever uma API do JavaScript usando uma interface
*/

//* CRIANDO TIPOS INDEXÁVEIS
interface Sabores {
    [index: number]: string; //? declara que Sabores é indexado com um número e retornará uma cadeia de caracteres
}

let meuSorvete: Sabores;
meuSorvete = ['chocolate', 'baunilha', 'morango'];
let stringRetornada: string = meuSorvete[0]; //* meuSorvete[1], meuSorvete[2]
console.log(stringRetornada);

//* DESCREVENDO API USANDO INTERFACE
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'

interface Post { //? aqui descrevemos os dados do post e seus tipos
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[]; //? body é um array de posts
}

async function showPost() {
    let posts = await fetchPosts(fetchURL);
    let post = posts[0];
    console.log('Post #' + post.id)
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();