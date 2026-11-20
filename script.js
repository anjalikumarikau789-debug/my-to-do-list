const inputbox = document.getElementById('inputbox');
const addbtn = document.getElementById('addbtn');
const todolist = document.getElementById('todolist');

let edittodo = null;

const addtodo = () => {
    const inputtext = inputbox.value.trim();

    if (inputtext.length <= 0) {
        alert("You must write something in your to do");
        return false;
    }

    if (addbtn.value === "Edit") {
        edittodo.previousElementSibling.innerHTML = inputtext;
        edittodo = null;
        addbtn.value = "Add";
        inputbox.value = "";
    } else {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputtext;
        li.appendChild(p);

        const editbtn = document.createElement("button");
        editbtn.innerText = "Edit";
        editbtn.classList.add("btn", "editbtn");
        li.appendChild(editbtn);

        const deletebtn = document.createElement("button");
        deletebtn.innerText = "Remove";
        deletebtn.classList.add("btn", "deletebtn");
        li.appendChild(deletebtn);

        todolist.appendChild(li);
        inputbox.value = "";
    }
}

const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todolist.removeChild(e.target.parentElement);
    }
    if (e.target.innerHTML === "Edit") {
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value = "Edit";
        edittodo = e.target;
    }
}

addbtn.addEventListener('click', addtodo);
todolist.addEventListener('click', updateTodo);