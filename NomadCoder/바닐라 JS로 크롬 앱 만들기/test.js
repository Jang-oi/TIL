// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const taskForm = document.querySelector(".js-taskForm"),
    taskInput = taskForm.querySelector("input"),
    pendingList = document.querySelector(".js-pendingList"),
    finishList = document.querySelector(".js-finishList");

const PENDING_LS = 'PENDING',
    FINISHED_LS = 'FINISHED';

// submit 할 시 이벤트 생성 handle 을 통해 input 값을
// local storage 에 저장 및 pending 에 뿌려줌.
// handlesubmit(), paint(), btn(delete, pending, finish)

let pendings = [];
let finishs = [];

function pendingTask(event) {
    const btn = event.target;
    const li = btn.parentNode;

    pendingList.appendChild(li);
}

function finishTask(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.querySelector("span");
    btn.innerText = "◀";

    finishList.appendChild(li);
    const taskObj = {
        text: span.textContent,
        id  : parseInt(li.id)
    };
    finishs.push(taskObj);

    localStorage.setItem(FINISHED_LS, JSON.stringify(finishs));

    btn.addEventListener("click",pendingTask);


}

function deleteTask(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanToDos = pendings.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    pendings = cleanToDos;
    localStorage.setItem(PENDING_LS, JSON.stringify(pendings));
}

function paint(text) {

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const pendingBtn = document.createElement("button");
    const span = document.createElement("span");
    const penId = pendings.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTask);
    pendingBtn.innerText = "✅"
    pendingBtn.addEventListener("click", finishTask);

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(pendingBtn);
    li.id = penId;

    pendingList.appendChild(li);
    const taskObj = {
        text: text,
        id  : penId
    };
    pendings.push(taskObj);
    localStorage.setItem(PENDING_LS, JSON.stringify(pendings));
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    paint(currentValue);
    taskInput.value = "";
}

function loadTask() {
    const pendingTask = localStorage.getItem(PENDING_LS);
    const finishTask = localStorage.getItem(FINISHED_LS);

    if(pendingTask !== null) {
        const parsedToDos = JSON.parse(pendingTask);
        parsedToDos.forEach(function (toDo) {
            paint(toDo.text);
        })
    }
}

function init() {
    loadTask();
    taskForm.addEventListener("submit", handleSubmit);
}

init();
