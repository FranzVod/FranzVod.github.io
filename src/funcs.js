function toggleDark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}







function changeText(){
  document.getElementById("demo").innerHTML = "Paragraph changed!";
}

function buttonYesMusichetta(){
  document.getElementById("mimimi").innerHTML = "Bene! Ma non mi fido. Scrivi qui sotto il nome (solo una risposta è giusta, quindi se sei convinto prova ad inserire il titolo finchè non lo azzecchi! Occhio a maiuscole e minuscole!)";
  document.getElementById("textBox").style.visibility = "visible";
  document.getElementById("okButton").style.visibility = "visible";
  
}


function musichettaIndovinata(){
  if(document.getElementById("textBox").value=="Mimimi"){
      document.getElementById("innerMimimi").innerHTML ="Wow! Molto bravo! Voto: diesci!<br><img src=\"src/voto-diesci.jpg\" style=\"width: 500px\"></img>";
  }else{
      document.getElementById("innerMimimi").innerHTML ="Naaah... non ci siamo... riprova, dai! Magari hai solo sbagliato di scrivere il nome!";
  }
}


function buttonNoMusichetta(){
  document.getElementById("mimimi").innerHTML = "Molto Male! Ti suggerisco di ascoltare la canzone premendo su questa nota <a style=\"font-size: 30;\" href=\"https://youtu.be/WqWYhWQ1gKY\">♫</a> e di riprovare a canticchiarla.";
  document.getElementById("textBox").style.visibility = "hidden";
  document.getElementById("okButton").style.visibility = "hidden";
  document.getElementById("innerMimimi").innerHTML ="";

}


// When the user clicks on div, open the popup
function pop() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
