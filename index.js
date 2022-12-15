// function addList(){
//     var dst = document.querySelector(".toDoListAll");
//     var list = document.createElement("div");
//     list.className = "toDoList";
//     var input = document.createElement("input");
//     input.placeholder = "What's on your mind?";
//     input.setAttribute("type", "text");

//     var span = document.createElement("span");
//     var btn = document.createElement("button");
//     btn.className = "";
//     btn.setAttribute("onclick", "addList();");
//     btn.innerHTML = "ADD";
//     btn.style.marginLeft = "0.2rem";
//     createText();
//     list.appendChild(input);
//     list.appendChild(span);
//     list.appendChild(btn);
//     dst.appendChild(list);
// }
var taskCount = 0;
var finishedTaskCount = 0;
function createText(){
    var lastInput = document.querySelector(".form").firstElementChild.value
    if (lastInput.length > 0){
    var div = document.createElement("div");
    div.className = "row";
    var h3 = document.createElement("h3");
    h3.className = "col-8";
    h3.innerHTML = lastInput;
    var checkbox = document.createElement("input");
    checkbox.className = "checkbox col-2";
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("onclick","lineThrough(this);");
    div.appendChild(checkbox);
    div.appendChild(h3);
    div.appendChild(document.createElement("hr"));
    document.querySelector(".writtenList").appendChild(div);
    document.querySelector(".form").firstElementChild.value = "";
    taskCount++;
    update();} else {
        alert("Ops! You forgot to type your task.");

    }
}

function lineThrough(checkbox) {
    if (checkbox.checked == true){
        checkbox.nextElementSibling.style.textDecoration = "line-through";
        finishedTaskCount++;
    } else {
        checkbox.nextElementSibling.style.textDecoration = "none";
        finishedTaskCount--;
    }
    update();
}

function clearAll(){
    location.reload();
}

function update(){
    document.querySelector("#total").innerHTML = `Total Task Count = ${taskCount}`;
    document.querySelector("#finished").innerHTML = `Finished Task Count = ${finishedTaskCount}`;
}