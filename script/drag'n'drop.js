const words = ["yellow","red","orange","car","bus","friedn","hero","pen","street"];
function CreateSort() {
  this.word = words[randomInteger(0,words.length-1)];
  this.drawSorttable();
}
CreateSort.prototype.drawSorttable = function () {
  let containerSorttable = document.body.appendChild(elt("div","containerSorttable"));
  let wrapper = containerSorttable.appendChild(elt("div","wrapper"));
  let button = containerSorttable.appendChild(elt("div","magicButton"));
  button.innerHTML = "compare";
  button.id = "compare";
  let ul = wrapper.appendChild(elt("ul"));
  ul.id = "list";
  for(let i=0;i<this.word.length; i++){
    ul.appendChild(elt("li"));
  }
  this.fill();

};
CreateSort.prototype.fill = function () {
  let lis = document.getElementsByTagName("li");
  let fillWord = shuffle(this.word.split(""));
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = fillWord[i];
  }
}
CreateSort.prototype.compare = function () {
  let lis = document.getElementsByTagName("li");
  let str ="";
  for (var i = 0; i < lis.length; i++) {
    str+=lis[i].innerHTML;
  }
  if(str == this.word){
    return true;
  }
  else{
    return false;
  }
};
CreateSort.prototype.sortable = function (rootEl){
    var dragEl, nextEl;

    // Делаем всех детей перетаскиваемыми
    [].slice.call(rootEl.children).forEach(function (itemEl){
        itemEl.draggable = true;
    });

    // Фнукция отвечающая за сортировку
    function _onDragOver(evt){
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';

        var target = evt.target;
        if( target && target !== dragEl && target.nodeName == 'LI' ){
            // Сортируем
            var rect = target.getBoundingClientRect();
            var next = (evt.clientY - rect.top)/(rect.bottom - rect.top) > .5;
            rootEl.insertBefore(dragEl, next && target.nextSibling || target);
        }
    }

    // Окончание сортировки
    function _onDragEnd(evt){
        evt.preventDefault();
        dragEl.classList.remove('ghost');
        rootEl.removeEventListener('dragover', _onDragOver, false);
        rootEl.removeEventListener('dragend', _onDragEnd, false);
    }

    // Начало сортировки
    rootEl.addEventListener('dragstart', function (evt){
        dragEl = evt.target; // Запоминаем элемент который будет перемещать
        nextEl = dragEl.nextSibling;

        // Ограничиваем тип перетаскивания
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('Text', dragEl.textContent);

        // Пописываемся на события при dnd
        rootEl.addEventListener('dragover', _onDragOver, false);
        rootEl.addEventListener('dragend', _onDragEnd, false);

        setTimeout(function (){
            // Если выполнить данное действие без setTimeout, то
            // перетаскиваемый объект, будет иметь этот класс.
            dragEl.classList.add('ghost');
        }, 0)
    }, false);
}
