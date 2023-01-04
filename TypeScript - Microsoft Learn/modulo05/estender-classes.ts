/* 
* | ESTENDER CLASSES |
? Ao estender classes derivadas de outras nós herdamos os métodos e propriedades da classe "pai" para a classe "filho"
? Porém podemos criar métodos e propriedades únicas para nossa classe derivada
*/

class CarroEletrico extends CarroDois {
    //* Propriedade única da classe CarroEletrico
    private _alcance: number

    //* Constructor
    constructor(marcaDoCarro: string, corDoCarro: string, alcance: number,qntdDePortas = 2) {
        super(marcaDoCarro, corDoCarro, qntdDePortas) //? Ativa o constructor da classe pai, sendo assim passamos esses parâmetros para ela
        this._alcance = alcance
    }

    //* Getter and Setters
    get alcance() {
        return this._alcance
    }
    set alcance(alcanceRedefinido) {
        this._alcance = alcanceRedefinido
    }

    //* Métodos
    carregar() {
        console.log(`${this.worker()} está carregando`)
    }

    frear(): string {
        return `${this.worker()}  freou com o sistema de freio regenerativo.`
    }
}

let spark = new CarroEletrico('Spark Motors','silver', 124, 2)
spark.carregar()
console.log(spark.frear())

let eCar = new CarroEletrico('Electric Car Co.', 'black', 263)
console.log(eCar.portas)
