//* Interface genérica
interface Identity<T, U> {
    value: T;
    message: U;
}

let identifyNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let identifyString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}

//* Interface genérica como um tipo de função
interface ProcessIdentity<T, U> {
    (value: T, message: U): T; //? função
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

//? Assim podemos usar essa variável como uma função no código e o TypeScript verificará os tipos
let processor: ProcessIdentity<number, string> = processIdentity; //? variável de tipo de função

let returnNumber1 = processor(100, 'Hello!');
//let returnString1 = processor('Hello!', 100);   //! Type check error

//*Interface genérica como um tipo de classe
interface ProcessIdentity2<T, U> {
    value: T;
    message: U;
    process(): T; //?método chamado process que retorna um valor de tipo T
}

class ClassProcessIdentity<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processorClass = new ClassProcessIdentity<number, string>(100, 'Hello');
processorClass.process();
//processorClass.value = '100';  //! Type check error

//* Classe genérica sem interface
class ClassProcessIdentitySemInterface<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processorClassSemInterface = new ClassProcessIdentitySemInterface<number, string>(100, 'Hello');
processorClassSemInterface.getIdentity();