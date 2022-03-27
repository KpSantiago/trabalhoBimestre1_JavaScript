/*
  Faça um algoritmo para ler: a descrição do produto(nome), a quantidade adquirida e o preço unitário.
  Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a
  pagar (total a pagar = total desconto), sabendo-se que: - Se quantidade for <= 5 o desconto será de 2%
  - Se quantidade > 5 e quantidade <=10 o desconto será de 3%, - Se quantidade > 10 o desconto será de 5%
*/
let productName = "Arroz";
let unitPrice = 3.00;
let quantityPurchased = 4;
let total = quantityPurchased * unitPrice;
let Total = total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

//desconto
if(quantityPurchased <= 5){
  let discount = total * 0.02;
  let totalPrice = total - discount;
  let TotalPrice = totalPrice.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
  
  console.log(`
  <strong>
  O cliente receberá um desconto de 2% pelo ${productName}.<br>
  valor da compra: ${Total}<br>
  total a pagar(com desconto): ${TotalPrice}
  </strong>
  `)
  
}else if(quantityPurchased > 5 && quantityPurchased <= 10){
  let discount = total * 0.03;
  let totalPrice = total - discount;
  let TotalPrice = totalPrice.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
  
  console.log(`
  <strong>
  O cliente receberá um desconto de 3% pelo ${productName}.<br>
  valor da compra: ${Total}<br>
  total a pagar(com desconto): ${TotalPrice}
  </strong>
  `)
  
}else if(quantityPurchased > 10){
  let discount = total * 0.05;
  let totalPrice = total - discount;
  let TotalPrice = totalPrice.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
  
  console.log(`
  <strong>
  O cliente receberá um desconto de 5% pelo ${productName}.<br>
  valor da compra: ${Total}<br>
  total a pagar(com desconto): ${TotalPrice}
  </strong>
  `)
  
}

