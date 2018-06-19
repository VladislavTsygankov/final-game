// функция , которая создает блок с заданным классом
function elt(name, className) {
  var elt = document.createElement(name);
  if (className) elt.className = className;
  return elt;
}
function shuffle(array) {
  let currentIndex = array.length, temp, randomIndex ;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }
  function compareNumeric(a, b) {
      if (a.level > b.level) return -1;
      if (a.level < b.level) return 1;
    }

function showtop(){
  let hightScoreTable = document.getElementById("hightScoreTable");
  for(let j=0; j<4; j++){
      for (var i = 1; i <hightScoreTable.children.length; i++) {
            hightScoreTable.removeChild(hightScoreTable.children[1])
        }
    }
  let localArray = [];
      for(let i=0; i<localStorage.length; i++){
        let returnObj = JSON.parse(localStorage.getItem(i));
        localArray.push(returnObj)
      }
      for(let i=0; i<localArray.length; i++)
      {
        let tr = document.createElement('tr');
        tr.classList.add("tr")
        hightScoreTable.appendChild(tr);
        let userInfo =[i+1,localArray[i].name,localArray[i].level];
        for(let i =0; i<3; i++){
          let td =document.createElement('td');
          td.textContent =userInfo[i];
          tr.appendChild(td);
        }
      }
}
const dataCharacters = [
  '<img src="images/chel.png" alt="" style="width: 100%; height: 100%;">',
  '<img src="images/chel1.png" alt="" style="width: 100%; height: 100%">',
  '<img src="images/chel2.png" alt="" style="width: 100%; height: 100%">',
  '<img src="images/chel3.png" alt="" style="width: 100%; height: 100%">',
  '<img src="images/chel4.png" alt="" style="width: 100%; height: 100%">',
  '<img src="images/chel6.png" alt="" style="width: 100%; height: 100%">',
  '<img src="images/chel7.png" alt="" style="width: 100%; height: 100%">',
  '<img src="images/chel8.png" alt="" style="width: 100%; height: 100%">',
  '<img src="images/chel9.png" alt="" style="width: 100%; height: 100%">',
  '<img src="images/chel10.png" alt="" style="width: 100%; height: 100%">',
  '<img src="images/chel11.png" alt="" style="width: 100%; height: 100%">'
];
const dataHeads = [
    '<img src="images/heads/head1.png" alt="">',
    '<img src="images/heads/head2.png" alt="">',
    '<img src="images/heads/head3.png" alt="">',
    '<img src="images/heads/head4.png" alt="" style="width:160px;">',
    '<img src="images/heads/head5.png" alt="">',
    '<img src="images/heads/head6.png" alt="" style="position:relative; top:5px;">',
    '<img src="images/heads/head7.png" alt="">',
    '<img src="images/heads/head8.png" alt="">',
    '<img src="images/heads/head9.png" alt="" style="position:relative; top:2px;">'
];
const dataLegs = [
  '<img src="images/legs/leg1.png" alt="" style="position:relative: top:-5px;">',
  '<img src="images/legs/leg2.png" alt="" style="width:100px;">',
  '<img src="images/legs/leg3.png" alt="">',
  '<img src="images/legs/leg4.png" alt="" style="position:relative; right:-7px; width:120px;">',
  '<img src="images/legs/leg5.png" alt="" style="position:relative; right:-5px; width:110px;">',
  '<img src="images/legs/leg6.png" alt="" style="position:relative; right:-3px; width:110px;">',
  '<img src="images/legs/leg7.png" alt="" style="position:relative; right:-3px; width:110px;">>',
  '<img src="images/legs/leg8.png" alt="" style="position:relative; right:-1px; width:105px;">'
];
const dataBody = [
  '<img src="images/bodies/body1.png" alt="">',
  '<img src="images/bodies/body2.png" alt="">',
  '<img src="images/bodies/body3.png" alt="" style="position:relative; right:-6px;">',
  '<img src="images/bodies/body4.png" alt="">',
  '<img src="images/bodies/body5.png" alt="" style="height:135px; position:relative;top:2px;">',
  '<img src="images/bodies/body6.png" alt="" style="position:relative; top:-60px;">',
  '<img src="images/bodies/body7.png" alt="" >',
  '<img src="images/bodies/body8.png" alt="" style="position:relative; right:-7px;">',
];
const firstName =["злобный","ужасный","глупый","скучный","сопливый","мерзкий","непонятный","маленький"];
const secondName = ["огр","гном","гоблин","клоун","ельф","глюкоза","учитель"];
const thirdName = ["Том","Макс","Роберт","Акакий","Олег","Вася","Трамп","Брэд"];
var enemyIndex = 0;
var enemyNameFORAll = "monster";
// конструктор стартового меню
function createStartMenu(parent){
  this.parent = parent;
  this.wrap = parent.appendChild(elt("div", "startMenu"));
  this.drawButtons();
}
createStartMenu.prototype.drawButtons = function () {
  var starMenuButtonsContainer = this.wrap.appendChild(elt("div","starMenuButtonsContainer"));
  var buttonnewGame = starMenuButtonsContainer.appendChild(elt("button","starMenuButtons"));
  buttonnewGame.innerHTML = "New Game";
  buttonnewGame.addEventListener("click", ()=>{
    this.parent.removeChild(this.wrap);
    a = new characterDisplay(document.body);
  })
  var buttonScoreboard = starMenuButtonsContainer.appendChild(elt("button","starMenuButtons"));
  buttonScoreboard.innerHTML = "Scoreboard";
  buttonScoreboard.addEventListener("click", ()=>{
    this.showScoreboard();
  })
  var buttonLaunch = starMenuButtonsContainer.appendChild(elt("button","starMenuButtons"));
  buttonLaunch.innerHTML = "Back to Launch Page";
  buttonLaunch.addEventListener("click",()=>{
    document.getElementsByClassName("startMenu")[0].remove();
    document.getElementsByClassName("LandingPage")[0].style.display = "block";
    document.body.removeAttribute("style");
    document.body.style.width ="100%;"
    document.body.style.height = "100%;";

  })
};
createStartMenu.prototype.showScoreboard = function () {
  this.wrap.style.display ="none";
  let container = this.parent.appendChild(elt("div","startMenu"));
  let contentTop = container.appendChild(elt("div","contentTop"));
  if(localStorage.length>0){
    let head = contentTop.appendChild(elt("div","noneResult"));
    let text = head.appendChild(elt("h2"));
    text.innerHTML = "Top Players!!";
    let tableResults = contentTop.appendChild(elt("div","tableResults"));
    let table  = tableResults.appendChild(elt("table"));
    table.id = "hightScoreTable";
    let tr = table.appendChild(elt("tr"));
    let td1 = tr.appendChild(elt("td"));
    td1.innerHTML = "№";
    let td2 = tr.appendChild(elt("td"));
    td2.innerHTML = "Name";
    let td3 = tr.appendChild(elt("td"));
    td3.innerHTML = "level";
    let button = contentTop.appendChild(elt("div","magicButton"));
    button.innerHTML = "Back to Menu";
    button.addEventListener("click", ()=>{
      container.remove();
      this.wrap.style.display = "flex";
    })
    showtop();
  }
  else{
    let noneRusult = contentTop.appendChild(elt("div","noneResult"));
    noneRusult.innerHTML = "There are no result's for top!!"
    let button = contentTop.appendChild(elt("div","magicButton"));
    button.innerHTML = "Back to Menu";
    button.addEventListener("click", ()=>{
      container.remove();
      this.wrap.style.display = "flex";
    })
  }

};
// делаем выбор персонаджа
function characterDisplay(parent){
  this.parent = parent;
  this.wrap = parent.appendChild(elt("div", "characterDisplay"))

  this.drawButtonsInCharacter();
}
characterDisplay.prototype.drawButtonsInCharacter = function () {
  let blabla = this.wrap.appendChild(elt("h1"));
  blabla.innerHTML = "Create your character";
  blabla.classList.add("characterH1")
  let material = this.wrap.appendChild(elt("div","material-textfield"));
  let name = material.appendChild(elt("input"));
  name.type = "text";
  name.required = true;
  let label = material.appendChild(elt("label"));
  label.innerHTML = "Player Name";
  label.setAttribute("data-content","Player Name");
  let obj = new ChooseCharacter(this.wrap,dataCharacters);
  let buttonsContaier = this.wrap.appendChild(elt("div", "buttonContaierCharacter"));
  var startGameContainer = buttonsContaier.appendChild(elt("div","sbContainer"));
  var startGame = startGameContainer.appendChild(elt("div","btn"));
  startGame.innerHTML = "Start Game";
  startGame.addEventListener("click", ()=>{
      this.startGameButton();
  });
  var backToMenuContainer = buttonsContaier.appendChild(elt("div","sbContainer"));
  var backToMenu = backToMenuContainer.appendChild(elt("div","btn"));
  backToMenu.innerHTML = "Back";
  backToMenu.addEventListener("click", ()=>{
    this.parent.removeChild(this.wrap);
    a = new createStartMenu(document.body);
  })
};
characterDisplay.prototype.startGameButton = function () {
  var tmp = document.getElementsByTagName("input")[0].value;
  var personTemp;
 if(tmp.length){
    let persons = document.getElementsByClassName("personBlock");
    for(let i=0; i<persons.length; i++)
    {
      if(persons[i].style.display =="block")
      {
        personTemp = dataCharacters[i];
      }
    }
  this.parent.removeChild(this.wrap);
  let actor = new Actor(tmp,personTemp);
  let enemy = new Enemy();
   a = new BattleDisplay(document.body, actor, enemy);
  }
  else{
    alert("Write name, please")
  }
};

// конструктор карусели
function ChooseCharacter (parent, array){
  this.parent =parent;
  this.ChooseCharacterContainer = this.parent.appendChild(elt("div","turnAround"))
  this.data = array;
  this.drawCaruselElements();
  this.characterIndex = 1;
  this.showCharacter(this.characterIndex);
}
ChooseCharacter.prototype.drawCaruselElements = function() {
  let buttonLeft = this.ChooseCharacterContainer.appendChild(elt("a","prev"));
  buttonLeft.innerHTML = "&#10094";
  buttonLeft.addEventListener("click",()=>{
    this.showCharacter(this.characterIndex+=-1);
  })
  for(let i=0; i<this.data.length; i++){
    this.ChooseCharacterContainer.appendChild(elt("div","personBlock"));
  }
  let characters = document.getElementsByClassName("personBlock");
  for(let i=0; i<characters.length; i++){
    characters[i].innerHTML =this.data[i];
  }
  let buttonRight = this.ChooseCharacterContainer.appendChild(elt("a","next"));
  buttonRight.innerHTML = "&#10095";
  buttonRight.addEventListener("click",()=>{
    this.showCharacter(this.characterIndex+=1);
  })
}
ChooseCharacter.prototype.showCharacter = function (n) {
  let characters = document.getElementsByClassName("personBlock");
  if(n>characters.length){this.characterIndex = 1;}
  if(n<1){this.characterIndex=characters.length;}
  for(let i=0; i<characters.length; i++){
    characters[i].style.display ="none";
  }
  characters[this.characterIndex-1].style.display="block";
};

// Класс окна битвы
function BattleDisplay(parent, actor, enemy) {
  this.parent = parent;
  this.actor = actor;
  this.enemy = enemy;
  this.level = 0;
  this.drawBattleDisplay();
  this.battle = new Battle(this.actor, this.enemy);
}
BattleDisplay.prototype.drawBattleDisplay = function () {
  let wrap = this.parent.appendChild(elt("div","battleDisplay"));
  wrap.classList.add("image");
  let healthContainer = wrap.appendChild(elt("div", "healthContainer"));
  let minihealthContainer = healthContainer.appendChild(elt("div","minihealthContainer"));
  let nameActor = minihealthContainer.appendChild(elt("h1"));
  nameActor.id = "nameActor";
  let actorHealthPointContainer = minihealthContainer.appendChild(elt("div","health"));
  let minihealthContainerEnemy = healthContainer.appendChild(elt("div","minihealthContainer"));
  let nameEnemy = minihealthContainerEnemy.appendChild(elt("h1"));
  let enemyHealthpointContainer = minihealthContainerEnemy.appendChild(elt("div", "health"));
  nameEnemy.id = "nameEnemy";
  let battleGround = wrap.appendChild(elt("div","battleGround"))
  let actorContainer = battleGround.appendChild(elt("div","actorContainer"));
  let attack = battleGround.appendChild(elt("button","attack"));
  attack.innerHTML = "Attack";
  attack.addEventListener("click", ()=>{
    this.battle.chooseMagic();
  })
  let enemyContainer = battleGround.appendChild(elt("div","actorContainer"));
};
BattleDisplay.prototype.changeBackgrond = function () {
  let temp = randomInteger(0,2);
  let wrap = document.getElementsByClassName("battleDisplay")[0];
  wrap.classList.remove("image");
  if(temp == 0){
    wrap.classList.add("image");
  }
  else if(temp== 1){
    wrap.classList.add("image2");
  }
  else{
    wrap.classList.add("image3");
  }
};
function Battle(actor, enemy){
  this.actor = actor;
  this.enemy = enemy;
  this.drawHP();
}
Battle.prototype.drawHP = function () {
  this.removeHP();
  document.getElementById("nameActor").innerHTML =this.actor.name;
  let healthpoint = document.getElementsByClassName("health");
  let actorHealth = healthpoint[0].appendChild(elt("div", "healthpoint"));
  if(this.actor.health>0){
    actorHealth.style.width = this.actor.health*2 +"px";
    actorHealth.innerHTML = this.actor.health;
  }
  else{
      actorHealth.style.width ="0px";
    actorHealth.innerHTML = 0;
  }
  let enemyHealth = healthpoint[1].appendChild(elt("div","healthpoint"));
  if(this.enemy.health>0){
    enemyHealth.style.width = this.enemy.health*2 +"px";
    enemyHealth.innerHTML = this.enemy.health;
  }
  else{
    enemyHealth.style.width = "0px";
    enemyHealth.innerHTML = 0;
  }
  document.getElementById("nameEnemy").innerHTML = this.enemy.name;
  document.getElementsByClassName("actorContainer")[0].innerHTML = this.actor.person;
  document.getElementsByClassName("actorContainer")[1].appendChild(this.enemy.person);
};
Battle.prototype.removeHP = function () {
  let healthpoint = document.getElementsByClassName("healthpoint");
  let enemyContainer = document.getElementsByClassName("enemyContainer")[0];
  if(enemyContainer){
    enemyContainer.remove();
  }
  let temp = healthpoint.length;
  for (var i = 0; i < temp; i++) {
    healthpoint[0].remove();
  }
}
Battle.prototype.redrawHP = function () {
  let healthpoint = document.getElementsByClassName("healthpoint");
  if(this.enemy.health>0){
    healthpoint[1].style.width = this.enemy.health*2 +"px";
    healthpoint[1].innerHTML = this.enemy.health;
  }
  else{
    healthpoint[1].style.width = "0px";
    healthpoint[1].innerHTML = 0;
  }
  if(this.actor.health>0){
    healthpoint[0].innerHTML = this.actor.health;
    healthpoint[0].style.width = this.actor.health*2 +"px";
  }
  else{
    healthpoint[0].innerHTML = 0;
    healthpoint[0].style.width ="0px";
  }
};
Battle.prototype.chooseMagic = function(){
  let magicModalContainer = document.body.appendChild(elt("div","magicModalContainer"))
  let modal = magicModalContainer.appendChild(elt("div","chooseMagicModal"));
  let close = modal.appendChild(elt("div","magicButton"));
  close.innerHTML ="Close";
  close.addEventListener("click",()=>{
    document.body.removeChild(magicModalContainer);
  })
  let first = modal.appendChild(elt("div","magicButton"));
  first.innerHTML = '<i class="fas fa-fire"></i>';
  first.addEventListener("click",()=>{
    this.firstMagic();
  })
  let second = modal.appendChild(elt("div","magicButton"));
  second.innerHTML = '<i class="fas fa-fighter-jet"></i>';
  second.addEventListener("click",()=>{
    this.secondMagic();
  })
  let third = modal.appendChild(elt("div","magicButton"));
  third.innerHTML = "batarang";
  third.addEventListener("click", ()=>{
    this.thirdMagic();
  })
  let fours = modal.appendChild(elt("div","magicButton"));
  fours.innerHTML = '<i class="fas fa-fire"></i><i class="fas fa-fire"></i><i class="fas fa-fire"></i>';
  fours.addEventListener("click",()=>{
    this.foursMagic();
  })
  let five = modal.appendChild(elt("div","magicButton"));
  five.innerHTML = "Back to Menu";
  five.addEventListener("click",this.backToMenu)
}
Battle.prototype.firstMagic = function(){
  document.body.removeChild(document.getElementsByClassName("magicModalContainer")[0]);
  let calc = new CreateCalculator();
  let compare = document.getElementById("compare");
  compare.addEventListener("click", ()=>{
    if(calc.compare()==true){
      document.body.removeChild(document.getElementsByClassName("CreateCalculatorConatainer")[0]);
      fireball();
      this.enemy.health+=-randomInteger(20,25);
      setTimeout(()=>{
       this.redrawHP();
        setTimeout(()=>{
          this.enemyAttack();
        },1000)
      },3000)
      if(this.enemy.health <= 0 ){
        a.level++;
        if(a.level>20){
          setTimeout(()=>{
            this.finalLevel()
          },2500)
        }
        else {
          setTimeout(()=>{
            this.finalMove()
          },2000)
        }
      }
      else {
        setTimeout(()=>{
          if(this.actor.health <= 0){
            setTimeout(()=>{
              this.youLose();
            },500)
          }
        },4500)
      }
    }
    else {
      document.body.removeChild(document.getElementsByClassName("CreateCalculatorConatainer")[0]);
      miss(0);
      setTimeout(()=>{
        this.enemyAttack();
        if(this.actor.health <= 0){
          setTimeout(()=>{
            this.youLose();
          },2000)
        }
      },1000)

    }
  })
};
Battle.prototype.secondMagic = function () {
  document.body.removeChild(document.getElementsByClassName("magicModalContainer")[0]);
  let sort = new CreateSort();
  sort.sortable( document.getElementById('list'));
  let button = document.getElementById("compare");
  button.addEventListener("click",()=>{
    if(sort.compare()==true){
      document.body.removeChild(document.getElementsByClassName("containerSorttable")[0]);
      flyStrike();
      this.enemy.health += -randomInteger(33,38);
      setTimeout(()=>{
     this.redrawHP();
      setTimeout(()=>{
          this.enemyAttack();
        },1000)
      },3000)
      if(this.enemy.health <= 0){
        a.level++;
        if(a.level>20){
          setTimeout(()=>{
            this.finalLevel()
          },2000)
        }
        else {
          setTimeout(()=>{
            this.finalMove()
          },2000)
        }
      }
      else {
        setTimeout(()=>{
          if(this.actor.health <= 0){
            setTimeout(()=>{
              this.youLose();
            },500)
          }
        },4500)
      }
    }
    else {
      document.body.removeChild(document.getElementsByClassName("containerSorttable")[0]);
      miss(0);
      setTimeout(()=>{
        this.enemyAttack();
        if(this.actor.health <= 0){
          setTimeout(()=>{
            this.youLose();
          },2000)
        }
      },1000)

    }
  })
};
Battle.prototype.thirdMagic = function () {
  document.body.removeChild(document.getElementsByClassName("magicModalContainer")[0]);
  let trans = new Translate();
  let compare = document.getElementById("compare");
  compare.addEventListener("click", ()=>{
    if(trans.compare()==true){
      document.body.removeChild(document.getElementsByClassName("translateContainer")[0]);
      batarang();
      this.enemy.health+=-randomInteger(26,33);
      setTimeout(()=>{
        this.redrawHP();
        setTimeout(()=>{
          this.enemyAttack();
        })
      },3000)
      if(this.enemy.health <= 0 ){
        a.level++;
        if(a.level>20){
          setTimeout(()=>{
            this.finalLevel()
          },2000)
        }
        else {
          setTimeout(()=>{
            this.finalMove()
          },2000)
        }
      }
      else {
        setTimeout(()=>{
          if(this.actor.health <= 0){
            setTimeout(()=>{
              this.youLose();
            },500)
          }
        },4500)
      }
    }
    else {
      document.body.removeChild(document.getElementsByClassName("translateContainer")[0]);
      miss(0);
      setTimeout(()=>{
        this.enemyAttack();
        if(this.actor.health <= 0){
          setTimeout(()=>{
            this.youLose();
          },2000)
        }
      },1000)
    }
  })
}
Battle.prototype.foursMagic = function () {
    document.body.removeChild(document.getElementsByClassName("magicModalContainer")[0]);
    let match = new createMatchMatch(10,'<img src="images/cubes.jpg" style="width:100%;height:100%;"alt="">');
};
Battle.prototype.compareMatch = function () {
    document.body.removeChild(document.getElementsByClassName("game")[0]);
    goldrain();
    this.enemy.health+=-randomInteger(37,43);
    setTimeout(()=>{
      this.redrawHP();
      setTimeout(()=>{
        this.enemyAttack();
      },1000)
    },3000)
    if(this.enemy.health <= 0 ){
      a.level++;
      if(a.level>20){
        setTimeout(()=>{
          this.finalLevel()
        },2000)
      }
      else {
        setTimeout(()=>{
          this.finalMove()
        },2000)
      }
    }
    else {
      setTimeout(()=>{
        if(this.actor.health <= 0){
          setTimeout(()=>{
            this.youLose();
          },500)
        }
      },4500)
    }
  };
  Battle.prototype.enemyAttack = function () {
  if(randomInteger(0,4)!=4){
    if(this.enemy.health>0){
      let temp =randomInteger(15,30);
      this.actor.health+= -temp;

      fireballEnemy();
        this.redrawHP();
    }
  }
  else{
    miss(1);
  }
};
Battle.prototype.finalMove = function () {
  let finalMoveContainer = document.body.appendChild(elt("div","finalMoveContainer"));
  let finalMoveModal = finalMoveContainer.appendChild(elt("div", "calcModal"));
  let text = finalMoveModal.appendChild(elt("h1"));
  text.innerHTML = "Congratulation!!";
  let buttonNext = finalMoveModal.appendChild(elt("div","magicButton"));
  buttonNext.innerHTML = "Next";
  buttonNext.addEventListener("click",this.nextMonster);
  let buttonBack = finalMoveModal.appendChild(elt("div","magicButton"));
  buttonBack.innerHTML = "Back to menu";
  buttonBack.addEventListener("click", this.backToMenu);
};
Battle.prototype.nextMonster = function () {
  document.body.removeChild(document.getElementsByClassName("finalMoveContainer")[0]);
  a.actor.health = 100;
  enemyIndex++;
  a.changeBackgrond();
  var newEnemy = new Enemy();
  a.battle = new Battle(a.actor,newEnemy);
};
Battle.prototype.backToMenu = function () {
  let obj = {
    level: a.level,
    name: a.actor.name
  }
  let serialObj = JSON.stringify(obj);
  localStorage.setItem(localStorage.length,serialObj);
  let localArray = [];
  for(let i=0; i<localStorage.length; i++){
      let returnObj = JSON.parse(localStorage.getItem(i));
      localArray.push(returnObj);
  }
  localArray.sort(compareNumeric);
  localArray = localArray.slice(0,10);
  localStorage.clear();
  for(let i=0; i<localArray.length; i++)
  {
  let temp = JSON.stringify(localArray[i]);
  localStorage.setItem(i,temp);
  }
  if(document.getElementsByClassName("finalMoveContainer")[0]){
    document.body.removeChild(document.getElementsByClassName("finalMoveContainer")[0]);
  }
  if(document.getElementsByClassName("chooseMagicModal")[0]){
    document.body.removeChild(document.getElementsByClassName("magicModalContainer")[0])
  }
  document.body.removeChild(document.getElementsByClassName("battleDisplay")[0]);
  setTimeout(()=>{
    a = new createStartMenu(document.body);
  },150)
};
Battle.prototype.youLose = function (){
  let finalMoveContainer = document.body.appendChild(elt("div","finalMoveContainer"));
  let finalMoveModal = finalMoveContainer.appendChild(elt("div", "calcModal"));
  let text = finalMoveModal.appendChild(elt("h1"));
  text.innerHTML = "You Lose";
  let button = finalMoveModal.appendChild(elt("div","magicButton"));
  button.innerHTML = "Back to startMenu";
  button.addEventListener("click", this.backToMenu);
}
Battle.prototype.finalLevel = function () {
  let finalMoveContainer = document.body.appendChild(elt("div","finalMoveContainer"));
  let finalMoveModal = finalMoveContainer.appendChild(elt("div", "calcModal"));
  let text = finalMoveModal.appendChild(elt("h1"));
  text.innerHTML = "It was final level!!!";
  let button = finalMoveModal.appendChild(elt("div","calcModal"));
  button.innerHTML = "Back to Menu";
  button.addEventListener("click", this.backToMenu);
}
// класс актеров
function Actor(name,person) {
  this.name = name;
  this.person = person;
  this.health = 100;
}

//класс врагов или монстров потом автогенерация
function Enemy(){
  this.name = this.generateName();
  this.person = this.generateEnemy();
  this.health = 100;
}
Enemy.prototype.generateEnemy = function () {
    let container = elt("div", "enemyContainer");
    let head = container.appendChild(elt("div","headblock"));
    head.innerHTML = dataHeads[randomInteger(0,dataHeads.length-1)];
    let body = container.appendChild(elt("div","bodyblock"));
    body.innerHTML = dataBody[randomInteger(0,dataBody.length-1)];
    let leg = container.appendChild(elt("div","legblock"));
    leg.innerHTML = dataLegs[randomInteger(0,dataLegs.length-1)];
    return container;
};
Enemy.prototype.generateName = function () {
  let str ="";
  str+= firstName[randomInteger(0,firstName.length-1)];
  str+=" ";
  str+= secondName[randomInteger(0,secondName.length-1)];
  str+=" ";
  str+= thirdName[randomInteger(0,thirdName.length-1)];
  return str;
};
function fireball() {
  let battleGround = document.getElementsByClassName("battleGround")[0]
  let containerfireball = battleGround.appendChild(elt("div","containerfireball"));
  let fireContainer = battleGround.appendChild(elt("div","fireContainer"));
  containerfireball.classList.add("van")
  containerfireball.innerHTML = '<img src="images/fireball.png" alt="">';
  setTimeout(function (){
    setTimeout(()=>{
      let audio =new Audio();
      audio.src = 'audio/fire1.mp3';
      audio.autoplay = true;
    },0)
    containerfireball.classList.add("move-right");
    setTimeout(()=>{
      containerfireball.remove();
      fireContainer.innerHTML ='<img src="images/fireall1.png" alt="">';
      setTimeout(()=>{
        fireContainer.innerHTML ='<img src="images/fireall2.png" alt="">';
        setTimeout(()=>{
          fireContainer.remove();
        },250)
      },250)
    },2000)
  },150)
}
function fireballEnemy(){
  let battleGround = document.getElementsByClassName("battleGround")[0]
  let containerfireball = battleGround.appendChild(elt("div","containerfireball"));
  let fireContainer = battleGround.appendChild(elt("div","fireContainerActor"));
  containerfireball.classList.add("vanEnemy");
  containerfireball.innerHTML = '<img src="images/fireball2.png" alt="">';
  setTimeout(function (){
    setTimeout(()=>{
      let audio =new Audio();
      audio.src = 'audio/fire.mp3';
      audio.autoplay = true;
    },0)
    containerfireball.classList.add("move-left");
    setTimeout(()=>{
      containerfireball.remove();
      fireContainer.innerHTML ='<img src="images/fireall1.png" alt="">';
      setTimeout(()=>{
        fireContainer.innerHTML ='<img src="images/fireall2.png" alt="">';
        setTimeout(()=>{
          fireContainer.remove();
        },250)
      },250)
    },2000)
  },150)
}
function flyStrike() {

  let battleGround = document.getElementsByClassName("battleGround")[0];
  let flycontainer = battleGround.appendChild(elt("div","flycontainer"));

  flycontainer.id = "opacity-transform";
  flycontainer.innerHTML = '<img src="images/fly.png" alt="" style="width:100%; height:100%">';
  flycontainer.classList.add("vanFly");
  setTimeout(()=>{
    setTimeout(()=>{
      let audio =new Audio();
      audio.src = 'audio/fly.mp3';
      audio.autoplay = true;
    },0)
    flycontainer.classList.add("move-rightFly");
    setTimeout(()=>{
      flycontainer.remove();
    },2000)
  },300)
}
function batarang() {
  let battleGround = document.getElementsByClassName("battleGround")[0];
  let batarangContainer = battleGround.appendChild(elt("div","batarangContainer"));
  let batarangBlock = batarangContainer.appendChild(elt("div","batarang"));
  batarangBlock.innerHTML = '<img src="images/batarang.png" alt="" style="width:100%; height:100%">'
  batarangContainer.classList.add("vanBatarang");
  setTimeout(()=>{
    setTimeout(()=>{
      let audio =new Audio();
      audio.src = 'audio/bat.mp3';
      audio.autoplay = true;
    },0)
    batarangContainer.classList.add("move-rightBatarang");
    setTimeout(()=>{
    batarangContainer.remove();
    },2000)
  },150)
}
function miss(n) {
  let battleGround = document.getElementsByClassName("battleGround")[0];
  let missContainer = battleGround.appendChild(elt("div","missContainer"));
  missContainer.innerHTML ="MISS";
  if(n==0){
    missContainer.classList.add("vanmissActor");
  }
  else{
    missContainer.classList.add("vanmissEnemy");
  }
  setTimeout(()=>{
    missContainer.classList.add("move-up");
    setTimeout(()=>{
      missContainer.remove();
    },1000)
  },100)
}

function goldrain() {
  let battleGround = document.getElementsByClassName("battleGround")[0];
  let containerfireball = battleGround.appendChild(elt("div","containerfireballrain"));
  containerfireball.innerHTML = '<img src="images/fireball3.png" alt="" style="width:100%; height:100%">';
  containerfireball.classList.add("vanOne");
  setTimeout(()=>{
    setTimeout(()=>{
      let audio =new Audio();
      audio.src = 'audio/rain.mp3';
      audio.autoplay = true;
    },0)
    containerfireball.classList.add("move-down");
    let containerfireball2 = battleGround.appendChild(elt("div","containerfireballrain"));
    containerfireball2.innerHTML = '<img src="images/fireball3.png" alt="" style="width:100%; height:100%">';
    containerfireball2.classList.add("vanTwo");
    setTimeout(()=>{
      containerfireball2.classList.add("move-down");
      let containerfireball3 = battleGround.appendChild(elt("div","containerfireballrain"));
      containerfireball3.innerHTML = '<img src="images/fireball3.png" alt="" style="width:100%; height:100%">';
      containerfireball3.classList.add("vanThree");
      setTimeout(()=>{
        containerfireball.remove();
        containerfireball3.classList.add("move-down");
        let containerfireball4 = battleGround.appendChild(elt("div","containerfireballrain"));
        containerfireball4.innerHTML = '<img src="images/fireball3.png" alt="" style="width:100%; height:100%">';
        containerfireball4.classList.add("vanFour");
        setTimeout(()=>{
          containerfireball4.classList.add("move-down");
          setTimeout(()=>{
            containerfireball2.remove();
            setTimeout(()=>{
              containerfireball3.remove();
              setTimeout(()=>{
                containerfireball4.remove();
              },300)
            },500)
          },300)
        },20)
      },300)
    },500)
  },300)
}
let playnow = document.getElementById("playnow");
playnow.addEventListener("click", ()=>{
  document.getElementsByClassName("LandingPage")[0].style.display ="none";
  a = new createStartMenu(document.body);
  document.body.style.width = "100vw";
  document.body.style.height ="100vh";
})
