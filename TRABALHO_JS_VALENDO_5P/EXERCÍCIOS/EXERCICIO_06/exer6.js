/*
 O cardápio de uma casa de lanches é dado pela tabela abaixo:
 
 Código:      Produto:            Preço unitário:
  100         Cachorro quente     R$ 1,70
  101         Bauru simples       R$ 2,30
  102         Bauru com ovo       R$ 2,60
  103         Hambúrguer          R$ 2,40
  104         Cheeseburger        R$ 2,50
  105         Refrigerante        R$ 1,00
  
  Escreva um código que leia o código do item adquirido pelo consumidor e a quantidade, 
  calculando e mostrando o valor a pagar. não será necessário exibir o produto e o valor,
  somente o valor final.
*/
let productCode = 100;
let quantity = 4;
let productPrice = 1.70;
let totalValue = productPrice * quantity;
let TotalValue = totalValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

switch(productCode){
  case 100:
   console.log(`
    <strong>
    Código do produto: ${productCode}<br>
    Quantidade: ${quantity}<br>
    Valor total: ${TotalValue}
    </strong>
    `)
  break
  case 101:
   console.log(`
    <strong>
    Código do produto: ${productCode}<br>
    Quantidade: ${quantity}<br>
    Valor total: ${TotalValue}
    </strong>
    `)
  break
  case 102:
   console.log(`
     <strong>
     Código do produto: ${productCode}<br>
     Quantidade: ${quantity}<br>
     Valor total: ${TotalValue}
     </strong>
      `)
  break
  case 103:
   console.log(`
     <strong>
     Código do produto: ${productCode}<br>
     Quantidade: ${quantity}<br>
     Valor total: ${TotalValue}
     </strong>
      `)
  break
  case 104:
   console.log(`
     <strong>
     Código do produto: ${productCode}<br>
     Quantidade: ${quantity}<br>
     Valor total: ${TotalValue}
     </strong>
      `)
  break
  case 105:
   console.log(`
     <strong>
     Código do produto: ${productCode}<br>
     Quantidade: ${quantity}<br>
     Valor total: ${TotalValue}
     </strong>
      `)
  break
  default: console.log("<strong>Digite o código de um produto</strong>");
}
