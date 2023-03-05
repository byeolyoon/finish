const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // = const toDoList = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"

let toDos = [];


function sayHello(item){
    console.log("this is the turn off",item);
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos) )
}

function deleteToDo(event) {
    const li = event.target.parentElement; //x버튼을 클릭할 때 event를 얻게 됨 event는 target을 줌 target은 button->부모는 li
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id) ); //li.id가 number타입이어서 string으로 바꿔줌
    saveToDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //handleToDoSumbit에서 온 newTofdo 텍스트
    const button = document.createElement("button");
    button.innerText =  "  ❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSumbit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),

    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); //newtodo -> input value를 비우기 전의 값을 나타내는 string
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSumbit)
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


