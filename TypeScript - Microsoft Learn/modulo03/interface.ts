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