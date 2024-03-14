// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda 

 const idade = 30;
 const idade = 25;
 console.log(idade); 

//vai dar erro de SyntaxError: Identifier 'idade' has already been declared
// Pois variavel const não pode ser reatribuida 

////////////////////////////////////////////////////////////////////////

//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

 {
     let x = 10;
     console.log(x); 
 }
 console.log(x);

//Dentro do escopo o resultado de x é 10 
//Fora do escopo aparece o erro de variavel não declarada pois como e let e trabalho com escopo o segundo
//console.log não enxerga o let dentro do escopo


///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

 {
     let x = 10;
     var y = 20;
  }

 
  console.log(x);
  console.log(y);

// no console.log(x) ele da erro  pois x é let e da como variavel não definida sendo enterropida a execução
// no console.log(y) a variavel y é var, e var e global não depende do escopo 

///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

 console.log(a); 
 var a = 5;
console.log(b);
let b = 10;

// no console.log(a) ele funciona pois ocorre o Hoisting (içamento) da variavel para topo dando como undefined
// no console.log(b) ele ocorre erro pois a variavel b ainda não foi inicializada


/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

 var x = 5;
 var x = 10;
 console.log(x); 

// nesse caso acima não ocorre pois a variavel x  é var e permite redeclaração 

 let y = 15;
 let y = 20; 
 console.log(y);  

 // nesse caso ocorre erro pois a variavel y é tipo let e não permite redeclaração 

//// Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = "eduardo";
const letraInicial = nomeCompleto[0];
console.log(letraInicial);

//sua lógica para pegar a primeira letra 
/// const letraInicial = ...
//console.log(letraInicial)







