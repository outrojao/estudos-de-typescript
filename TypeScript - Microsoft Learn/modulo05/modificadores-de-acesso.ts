/*
* | MODIFICADORES DE ACESSO |
? No TypeScript, você pode controlar a visibilidade dos membros da classe adicionando a palavra-chave public, private ou protected antes do nome do membro.

! public	
? Se você não especificar o modificador de acesso, o padrão será público. Você também pode definir explicitamente o membro como público usando a palavra-chave public.

! private	
? Se você modificar o membro com a palavra-chave private, ele não poderá ser acessado de fora da classe que o contém.

! protected	
? O modificador protected funciona de forma semelhante ao modificador private, com a exceção de que os membros declarados protected também podem ser acessados dentro de classes derivadas.

* Além disso, as propriedades podem se tornar readonly (somente leitura) usando o modificador readonly. As propriedades somente leitura só podem ser definidas quando inicializadas em sua declaração ou no constructor.
*/

class CarroDois {
    private static numeroDeCarros: number = 0
    private _marca: string
    private _cor: string
    private _portas: number

    constructor(marcaDoCarro: string, corDoCarro: string, qntdDePortas = 4) {
        this._marca = marcaDoCarro
        this._cor = corDoCarro
        if((qntdDePortas % 2) === 0) {
          this._portas = qntdDePortas
        } else {
          throw new Error('A quantidade de portas deve ser um número par')
        }
        CarroDois.numeroDeCarros++  
    }

    get marca() {
        return this._marca
    }
    set marca(marcaRedefinada) {
        this._marca = marcaRedefinada
    }

    get cor() {
        return `A cor do carro é ${this._cor}`
    }
    set cor(corRedefinada) {
        this._cor = corRedefinada;
    }

    get portas() {
        return this._portas
    }
    set portas(portasRedefinadas) {
        if((portasRedefinadas % 2) === 0) {
          this._portas = portasRedefinadas
        } else {
          throw new Error('A quantidade de portas deve ser um número par')
        }
    }

    acelerar(velocidade: number): string {
        return `${this.worker()} esta acelerando á ${velocidade} Km/H.`
    }

    frear(): string {
        return `${this.worker()} freiou`
    }

    virar(direcao: 'esquerda' | 'direita'): string {
        return `${this.worker()} esta virando para ${direcao}`
    }

    private worker(): string {
        return this._marca
    }

    public static getNumeroDeCarros(): number {
        return CarroDois.numeroDeCarros
    }
}

/*
* | PROPRIEDADES ESTÁTICAS |
? Os métodos das classes definidas até agora são propriedades de instância, o que significa que elas são instanciadas e chamadas em cada instância do objeto da classe. Há outro tipo de propriedade chamada de propriedade estática. Métodos e propriedades estáticos são compartilhados por todas as instâncias de uma classe.

* Para tornar uma propriedade estática, use a palavra-chave static antes de um nome de propriedade ou método.
*/

let myCar1 = new CarroDois('Cool Car Company', 'blue', 2)
let myCar2 = new CarroDois('Galaxy Motors', 'blue', 2)
console.log(CarroDois.getNumeroDeCarros())