

let myList = document.getElementsByTagName("li");
let i;
for (i = 0; i < myList.length; i++) {
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
let j;
for (j = 0; j < close.length; j++) {
    close[j].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function newTodo() {
    let todo = document.getElementById("todoInput").value;
    let li = document.createElement("li");
    let text = document.createTextNode(todo);
    li.appendChild(text);
    if (todo === '') {
        alert("Add whatever you like to the list.");
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("todoInput").value = "";
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    let k;
    for (k = 0; k < close.length; k++) {
        close[k].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);