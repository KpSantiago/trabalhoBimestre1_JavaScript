/*
  Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.
*/
function tabuCalc(){
  let intNumber = window.document.getElementById("intNumber");
  let IntNumber = Number.parseInt(intNumber.value);
  let tabuada = [
      1 * IntNumber,
      2 * IntNumber,
      3 * IntNumber,
      4 * IntNumber,
      5 * IntNumber,
      6 * IntNumber,
      7 * IntNumber,
      8 * IntNumber,
      9 * IntNumber,
      10 * IntNumber
  ];
  let resul = window.document.getElementById("res");
  resul.innerHTML = `
    <strong>
     Tabuada do número: ${IntNumber}<br>
      1 x ${IntNumber} = ${tabuada[0]}<br>
      2 x ${IntNumber} = ${tabuada[1]}<br>
      3 x ${IntNumber} = ${tabuada[2]}<br>
      4 x ${IntNumber} = ${tabuada[3]}<br>
      5 x ${IntNumber} = ${tabuada[4]}<br>
      6 x ${IntNumber} = ${tabuada[5]}<br>
      7 x ${IntNumber} = ${tabuada[6]}<br>
      8 x ${IntNumber} = ${tabuada[7]}<br>
      9 x ${IntNumber} = ${tabuada[8]}<br>
      10 x ${IntNumber} = ${tabuada[9]}
    </strong>
  `;
}
