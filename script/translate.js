function elt(name, className) {
  var elt = document.createElement(name);
  if (className) elt.className = className;
  return elt;
}
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
function Translate() {
  this.temp = randomInteger(0,vocabulary.length-1);
  this.sequence = vocabulary[this.temp][0];
  this.drawTranslate();
}
Translate.prototype.drawTranslate = function () {
  let translateContainer = document.body.appendChild(elt("div","translateContainer"));
  let translateModal = translateContainer.appendChild(elt("div","calcModal"));
  let text = translateModal.appendChild(elt("h1"));
  text.innerHTML= this.sequence;
  let input = translateModal.appendChild(elt("input","input"));
  input.id = "answer"
  input.setAttribute("type","text");
  input.setAttribute("placeholder","Answer");
  input.required = true;
  let button = translateModal.appendChild(elt("div","magicButton"));
  button.innerHTML ="compare";
  button.id = "compare";
};
Translate.prototype.compare = function () {
  let trans = document.getElementById("answer").value;
  let i=1;
  while (i<vocabulary[this.temp].length) {
    if(trans == vocabulary[this.temp][i]){
      return true;
    }
    else{i++;}
  }
  return false;
};
