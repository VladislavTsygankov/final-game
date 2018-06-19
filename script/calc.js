function CreateCalculator(){
  this.methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    },
    "*": function(a, b){
      return a * b;
    },
    "/": function(a,b){
      return a/b;
    }
  };
  this.str = "";
  this.draw();
  this.generateSequence();
}
CreateCalculator.prototype.draw = function (){
  let CreateCalculatorConatainer = document.body.appendChild(elt("div","CreateCalculatorConatainer"));
  let calcModal = CreateCalculatorConatainer.appendChild(elt("div","calcModal"))
  let sequance = calcModal.appendChild(elt("h1"));
  sequance.id = "sequence";
  let input = calcModal.appendChild(elt("input","input"));
  input.setAttribute("type","text");
  input.setAttribute("placeholder","Answer");
  input.required = true;
  let button = calcModal.appendChild(elt("div","magicButton"));
  button.innerHTML = "compare";
  button.id = "compare";
}
CreateCalculator.prototype.calculate  = function(str) {
  var split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2]

  if (!this.methods[op] || isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return this.methods[op](a, b);
}
CreateCalculator.prototype.generateSequence = function () {
  let sequence = document.getElementById("sequence");
  this.str += randomInteger(1,10);
  this.str += " ";
  let method = randomInteger(1,4);
  if(method == 1){
    this.str+= "+"
    this.str += " ";
    this.str+= randomInteger(1,10);
  }
  else if(method ==2){
    this.str+= "-";
    this.str += " ";
    this.str+= randomInteger(1,10);
  }
  else if(method == 3){
    this.str+= "*";
    this.str += " ";
    this.str+= randomInteger(1,10);
  }
  else {
    this.str ="";
    let temp = randomInteger(1,10);
    this.str+= temp*randomInteger(1,10)+" "+"/"+" "+temp;
  }
  sequence.innerHTML = this.str;
}
CreateCalculator.prototype.compare = function () {
    if(this.calculate(this.str) == document.getElementsByTagName("input")[0].value)
    {
      return true;
    }
    else {
      return false;
    }
};
