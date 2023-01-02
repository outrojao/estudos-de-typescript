class Carro {
    //* Propriedades da classe
    _marca: string
    _cor: string
    _portas: number

    //? O _ antes do nome da propriedade não é necessário na declaração de propriedade, mas fornece uma maneira de distinguir essa declaração dos parâmetros que podem ser acessados por meio do construtor, além de unir os dois visualmente

    //* Constructor
    constructor(marcaDoCarro: string, corDoCarro: string, qntdDePortas = 4) {
        this._marca = marcaDoCarro
        this._cor = corDoCarro
        if((qntdDePortas % 2) === 0) {
          this._portas = qntdDePortas
        } else {
          throw new Error('A quantidade de portas deve ser um número par')
        }     
    }

    //* Getters and Setters
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

    //* Métodos
    acelerar(velocidade: number): string {
        return `${this.worker()} esta acelerando á ${velocidade} Km/H.`
    }

    frear(): string {
        return `${this.worker()} freiou`
    }

    virar(direcao: 'esquerda' | 'direita'): string {
        return `${this.worker()} esta virando para ${direcao}`
    }

    // This function performs work for the other method functions
    worker(): string {
        return this._marca
    }
}

let carroUm = new Carro('Carro bom', 'azul', 2)
console.log(carroUm._cor)
console.log(carroUm.cor)

let carroDois = new Carro('Carros não tão bons assim', 'prata', 3)
carroDois.portas = 5

let carroTres = new Carro('Carros horríveis', 'preto')
console.log(carroTres.portas)

console.log(carroUm.acelerar(60))
console.log(carroUm.frear())
console.log(carroUm.virar("esquerda"))