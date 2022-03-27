/*
  verificar se um empregado está qualificado para se aposentar ou não 
  - ter mínimo 65 anos de idade
  - ter trabalhado no minimo 30 anos
  - ter no minimo 60 anos e ter trabalho no minimo 25 anos
  Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), 
  o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a 
  idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.
*/
let now = new Date();
let actualYear = now.getFullYear();
let employeeBornDate = 1962;
let workInitialDate = 1995;
let employeeId = 30;
let employeeWorkTime = actualYear - workInitialDate;
let employeeAge = actualYear -  employeeBornDate;

if(employeeAge >= 65){
  console.log(`<strong>O empregado de número ${employeeId} possui ${employeeAge} anos e pode requerer aposentadoria</strong>`); 

}else if(employeeWorkTime >= 30) {
  console.log(`<strong>O empregado de número ${employeeId} possui ${employeeWorkTime} anos de trabalho e pode requerer aposentadoria</strong>`);

}else if(employeeAge >= 60 && employeeWorkTime >= 25){
  console.log(`<strong>O empregado de número ${employeeId} possui ${employeeAge} anos e  ${employeeWorkTime} anos de trabalho e pode requerer aposentadoria</strong>`);

}else{
  console.log(`<strong>O empregado de número ${employeeId} não pode requerer aposentadoria</strong>`);
}
