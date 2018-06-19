const data=[
    {img : '<img src="images/source/kot1.jpg"  whidth="100%" height="100%">', type:1},
    {img : '<img src="images/source/kot1.jpg"  whidth="100%" height="100%">', type:1},
    {img : '<img src="images/source/kot2.jpg"  whidth="100%" height="100%">', type:2},
    {img : '<img src="images/source/kot2.jpg"  whidth="100%" height="100%">', type:2},
    {img : '<img src="images/source/kot3.jpg"  whidth="100%" height="100%">', type:3},
    {img : '<img src="images/source/kot3.jpg"  whidth="100%" height="100%">', type:3},
    {img : '<img src="images/source/kot4.jpg"  whidth="100%" height="100%">', type:4},
    {img : '<img src="images/source/kot4.jpg"  whidth="100%" height="100%">', type:4},
    {img : '<img src="images/source/kot5.jpg"  whidth="100%" height="100%">', type:5},
    {img : '<img src="images/source/kot5.jpg"  whidth="100%" height="100%">', type:5},
    {img : '<img src="images/source/kot6.jpg"  whidth="100%" height="100%">', type:6},
    {img : '<img src="images/source/kot6.jpg"  whidth="100%" height="100%">', type:6},
    {img : '<img src="images/source/kot7.jpg"  whidth="100%" height="100%">', type:7},
    {img : '<img src="images/source/kot7.jpg"  whidth="100%" height="100%">', type:7},
    {img : '<img src="images/source/kot8.jpg"  whidth="100%" height="100%">', type:8},
    {img : '<img src="images/source/kot8.jpg"  whidth="100%" height="100%">', type:8}
];
let openCards = [];

function createMatchMatch(size,shirt){
  this.size = size;
  this.shirt = shirt;
  this.moves = 0;
  this.flag = false;
  this.createBoard();
}
createMatchMatch.prototype.createBoard = function (){
        let game = document.body.appendChild(elt("div","game"))
        let array = [];
        for(let i =0; i<this.size; i++){
            array.push(data[i]);
        }
        array=shuffle(array);
        for(let i=0; i<this.size; i++){
            let card = game.appendChild(elt("div","card"));
        }
        let cards = document.getElementsByClassName('card');
        for(let i=0; i<cards.length; i++){
            let front = cards[i].appendChild(elt("div","front"));
            front.innerHTML = this.shirt;
            let back = cards[i].appendChild(elt("div","back"))
            back.innerHTML = array[i].img;
            back.type =array[i].type;
        }
        for(let i=0; i<cards.length; i++){
            cards[i].addEventListener("click", this.turnOver);
            cards[i].addEventListener("click", this.matchCheck);
        }
    }

    createMatchMatch.prototype.turnOver = function (){
        this.classList.add("active");
    }
  createMatchMatch.prototype.matchCheck =   function (){
        this.removeEventListener("click",this.matchCheck);
        openCards.push(this);
        let len = openCards.length;

        if(len === 2){
            this.disable;
            if(openCards[0].getElementsByClassName("back")[0].type == openCards[1].getElementsByClassName("back")[0].type)
            {
              setTimeout(function () {
                  openCards[0].classList.add("hide");
                  openCards[1].classList.add("hide");
                  openCards[0].classList.remove("active");
                  openCards[1].classList.remove("active");
                  openCards =[];
                  this.enable;
              },600)
              if(document.getElementsByClassName("hide").length == 8){
                a.battle.compareMatch();
              }
            }
            else {

                setTimeout(function(){
                        this.enable;
                    openCards[0].classList.remove("active");
                    openCards[1].classList.remove("active");
                    openCards[0].addEventListener("click",this.matchCheck);
                    openCards[1].addEventListener("click",this.matchCheck)
                    openCards = [];

                },1100);
            }
        }

    }
  createMatchMatch.prototype.disable = function () {
        let cards =document.getElementsByClassName("card");
        for(let i=0;i<cards.length; i++){
            cards[i].removeEventListener("click", this.turnOver);
            cards[i].removeEventListener("click", this.matchCheck);
        }
    }
  createMatchMatch.prototype.enable =  function (){
        let cards =document.getElementsByClassName("card");
        for(let i=0;i<cards.length; i++){
            cards[i].addEventListener("click", this.turnOver);
            cards[i].addEventListener("click", this.matchCheck);
        }
    }
