/* 

Um enum, é um nome simbólico para um conjunto de valores. As enumerações são tratadas como tipos de dados e podemos usá-las para criar conjuntos de constantes para uso com variáveis e propriedades.
Sempre que um procedimento aceita um conjunto limitado de variáveis, considere o uso de uma enumeração. As enumerações tornam o código mais claro e mais legível, especialmente quando são usados nomes significativos.

O uso de enumerações:
*Ajuda a reduzir erros causados pela transposição ou digitação incorreta de números.
*Torna mais fácil alterar valores no futuro.
*Torna o código mais fácil de ler, o que significa que é menos provável que os erros possam surgir nele.
*Garante a compatibilidade com o futuro. Com as enumerações, o código será menos propenso a falhar se, posteriormente, alguém alterar os valores correspondentes aos nomes dos membros.

Criando uma enumeração
As enumerações permitem que você especifique uma lista de opções disponíveis. Elas são extremamente úteis quando você tem um conjunto de valores que um determinado tipo de variável pode assumir. Vamos imaginar que você tem um campo em um banco de dados externo chamado TamanhoLanche, que contém os números 1, 2 e 3 que representam as seguintes opções/valores possíveis que o campo TamanhoLanche pode assumir: Pequeno, Medio e Grande. Criaremos uma enumeração com esses valores e exploraremos o suporte do TypeScript.

*/

// Por padrão, os valores enum começam com um valor de 0, portanto, Pequeno é 0, Medio é 1 e assim por diante. Se você quiser que eles comecem com um valor diferente, neste caso 1, especifique isso na declaração enum.
enum TamanhoLanche {
    Pequeno = 1,
    Medio,
    Grande
}

//variavel tamanhoLancheCliente que é do tipo TamanhoLanche e recebe TamanhoLanche.Pequeno
let tamanhoLancheCliente: TamanhoLanche = TamanhoLanche.Pequeno;
console.log(tamanhoLancheCliente);

// Para exibir o nome associado à enumeração, podemos usar o indexador fornecido. Adicione o seguinte à parte inferior do código:
console.log(TamanhoLanche[tamanhoLancheCliente]);