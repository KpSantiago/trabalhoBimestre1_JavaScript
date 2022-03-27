/*
  ler notas bimestrais do aluno, indicar se ele foi aprovado ou está 
  recuperação, caso esteja de recuperação, indicar sua nota e dizer
  se o aluno foi aprovado ou reprovado.
*/

//notas bimestrais + média final
function bimCalc(){
  let bimNotes = [
    document.getElementById("bim1"),
    document.getElementById("bim2"),
    document.getElementById("bim3"), 
    document.getElementById("bim4")
  ];
  let BimNotes = [
    Number(bimNotes[0].value),
    Number(bimNotes[1].value),
    Number(bimNotes[2].value),
    Number(bimNotes[3].value)
  ];
  let finalMedia = (BimNotes[0] + BimNotes[1] + BimNotes[2] + BimNotes[3])/4;
  let exiteRes = document.getElementById("resBim");
  if (finalMedia >= 6 && finalMedia <= 10) {
    exiteRes.innerHTML = "<strong>O aluno foi aprovado</strong>";
  
  }else if (finalMedia >= 4 && finalMedia < 6) {
    exiteRes.innerHTML = "<strong>O aluno está de recuperação</strong>";
  
  }else if(finalMedia < 4){
    exiteRes.innerHTML = "<strong>O aluno foi reprovado</strong>"; 
   
  }
} 
  
//aluno na recuperação
/*
  espaço reservado apenas para a nota de recuperação, caso o aluno tenha ficado de recuperação.
*/
function recCalc(){
  let recNote = window.document.getElementById("recNote");
  let RecNote = Number(recNote.value);
  let resRec = document.getElementById("resRec");
  if (RecNote >= 6 && RecNote <= 10) {
    resRec.innerHTML = "<strong>O aluno foi aprovado na recuperação</strong>";
  
  }else{
    resRec.innerHTML = "<strong>O aluno foi reprovado na recuperação</strong>";
  
  }
}
