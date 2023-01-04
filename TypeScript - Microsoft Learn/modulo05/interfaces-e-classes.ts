//! A interface só pode descrever o lado voltado para o público da classe e não pode incluir membros privados

interface Veiculo {
    //* Parâmetros
    marca: string
    cor: string
    portas: number

    //* Métodos
    acelerar(velocidade: number): string
    frear(): string
    virar(direcao: 'esquerda' | 'direita'): string
}

//? Dessea forma o TypeScript garantirá que a classe cumpra o contrato de código descrito na interface
// class CarroComInterface implements Veiculo {
    //...
// }

/*
* | QUANDO USAR CLASSES OU INTERFACES? |
! Interfaces
? As interfaces são constructos de tempo de design do TypeScript, ou seja, no mommento em que o código for transcompilado para JavaScript as interfaces do código serão removidas. Isso signiifica que as interfaces são leves e não ocupam espaço no arquivo resultante
? Com interfaces podemos definir uma estrutura de dados sem precisar de uma classe. Podemos usar interfaces a fim de definir objetos de parâmetro para funções, estabelecer a estrutura de várias propriedades de estrutura e definir a aparência de objetos em serviços ou APIs.

! Exemplo
interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

async loadDog(id: number): Dog {
    return await (await fetch('demoUrl')).json() as Dog;
}

? Nesse caso a função loadDog faz o uso da interface Dog para assegurar que a response retornada pela requisição se adeque ao "contrato" da interface Dog


! Classes
? A diferença entre classe e interface é que classes permitem que você defina detalhes de implementação enquanto as interfaces definem exclusivamente como os dados são estruturados. As classes permitem que você defina métodos, campos e propriedades além de também fornecem uma maneira de criar objetos de modelos, definindo valores padrão

! Exemplo
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id: number): DogRecord {
        // code to load dog from database
        return dog;
    }

    save() {
        // code to save dog to database
    }
}

? Referente ao exemplo anterior, caso fossemos adicionar um código para carregar ou salvar informações de um cachorro no banco de dados poderiamos usar o "padrão de registro ativo", o que significa que o próprio objeto teria uma função de save, load e métodos semelhantes. Assim podemos usar a interface Dog definida acima para garantir que tenhamos as mesmas propriedades e estrutura, enquanto adicionamos o código necessário para executar as operações
*/
