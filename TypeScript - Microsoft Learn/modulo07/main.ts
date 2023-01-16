//* Importação e exportação de módulos com typescript

import { returnGreeting } from "./greetings_module";
import { returnGreeting as returnGreetingLength } from "./greetings-utilities_module"; //? utilizamos outro nome para função returnGreeting de greetings-utilities_module.ts pois ja importamos uma função de mesmo nome de greetings_module.ts

//* Utilizando os módulos importados
returnGreeting("Hola!");
returnGreetingLength("Ciao!");
