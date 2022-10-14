/*
! Na maioria das vezes, você pode escolher com base na preferência pessoal, e o TypeScript dirá se é necessário que algo seja o outro tipo de declaração. Se desejar uma heurística, use interfaceaté precisar usar os recursos de type.

* A recomendação oficial do typescript é utilizar interface ao invés de type. Especialmente porque você recebe melhores mensagens de erro.

* O que você realmente precisa? esse tipos serão exportados publicamente? 
? então declare usando interface. 
* Você está declarando tipos de uma classe ou função? 
? então declare usando interface.

* | PONTOS |
? se precisamos declarar os tipos de uma classe e seus metodos utilizamos interface;
? se precisamos declarar os tipo das props de uma função usamos alias type;
? se precisar criar uma definição de tipo que será extendida por algo, nós usamos interface;
? se estamos criando um generic type para alguma funcionalidade, usamos interface.

* Também mesclar o uso dos dois, alias type e interface se necessario. 
* Ambos suportam a extensão de outras interfaces e tipos. Os tipos fazem isso através da interseção de tipos, enquanto interfaces possuem uma palavra-chave o extends.
*/

type TipoPassaro = {
    asas: 2;
};
  
interface InterfacePassaro {
    asas: 2;
}
  
type Coruja = { noturno: true } & TipoPassaro;
type Robin = { noturno: false } & InterfacePassaro;
  
interface Pavao extends TipoPassaro {
    colorido: true;
    voa: false;
}
interface Galinha extends InterfacePassaro {
    colorido: false;
    voa: false;
}
  
let coruja: Coruja = { asas: 2, noturno: true };
let galinha: Galinha = { asas: 2, colorido: false, voa: false };

console.table(coruja)
console.table(galinha)