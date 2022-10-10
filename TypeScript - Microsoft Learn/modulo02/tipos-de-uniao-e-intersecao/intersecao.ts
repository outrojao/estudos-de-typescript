/*
* | TIPOS DE INTERSEÇÃO |
 Os tipos de interseção estão fortemente relacionados a tipos de união, mas eles são usados de maneira muito diferente.
 Um tipo de interseção combina dois ou mais tipos para criar um tipo que tenha todas as propriedades dos tipos existentes. 
 Isso permite que você adicione tipos existentes para obter um tipo que tenha todos os recursos necessários.
 * Um tipo de interseção usa o e comercial (&) para separar cada tipo e são usados com mais frequência com interfaces
*/

interface Employee {
    employeeID: number;
    age: number;
  }
  interface Manager {
    stockPlan: boolean;
  }
  //? tipo de interseção chamado ManagementEmployee que combina as propriedades das interfaces Manager e Employee
  type ManagementEmployee = Employee & Manager;
  let newManager: ManagementEmployee = {
      employeeID: 12345,
      age: 34,
      stockPlan: true
  };