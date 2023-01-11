class BuildArray {
    private _items: number;
    private _ordem: 'crescente' | 'decrescente';

    constructor(items: number, ordem: 'crescente' | 'decrescente'){
        this._items = items
        this._ordem = ordem
    }

    get items() {
        return this._items
    }
    set items(items) {
        this._items = items
    }

    get ordem() {
        return this._ordem
    }
    set ordem(ordem) {
        this._ordem = ordem
    }

    private ordenarDecrescente = (a: number, b: number) => {
        if(a > b) return -1
        else if(b> a) return 1
        else return 0
    }

    private ordenarCrescente = (a: number, b: number) => {
        if(a > b) return 1
        else if(b > a) return -1
        else return 0
    }

    buildArray(): number[] {
        let numerosAleatorios: number[] = [];
        let proximoNumero: number;
        for (let c = 0; c < this.items; c++) {
            proximoNumero = Math.ceil(Math.random() * (100 - 1));
            if (numerosAleatorios.indexOf(proximoNumero) === -1) {
                numerosAleatorios.push(proximoNumero);
            } else {
                c--;
            }
        }
        if (this._ordem === 'crescente') {
            return numerosAleatorios.sort(this.ordenarCrescente);
        } else {
            return numerosAleatorios.sort(this.ordenarDecrescente);
        } 
    }
}

let testArray1 = new BuildArray(12, 'crescente');
let testArray2 = new BuildArray(8, 'decrescente');

console.log(testArray1.buildArray());
console.log(testArray2.buildArray());