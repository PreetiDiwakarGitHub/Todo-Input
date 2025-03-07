let tasks = [];

function AddTask() {
    let taskText = document.getElementById("Task").value.trim();
    if (taskText === "") return;

    tasks.push({ text: taskText, completed: false });
    document.getElementById("Task").value = "";
    AllTasks();
}

function AllTasks() {
    let taskList = document.getElementById("tasklist");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i].text;

        let completeBtn = document.createElement("button");
        completeBtn.textContent = tasks[i].completed ? "Completed" : "Complete";
        completeBtn.disabled = tasks[i].completed;
        completeBtn.onclick = function () {
            tasks[i].completed = true;
            AllTasks();
        };

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = function () {
            tasks.splice(i, 1);
            AllTasks();
        };

        li.appendChild(completeBtn);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }
}

function CompletedTasks() {
    let taskList = document.getElementById("tasklist");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) {
            let li = document.createElement("li");
            li.textContent = tasks[i].text;

            let completedBtn = document.createElement("button");
            completedBtn.textContent = "Completed";
            completedBtn.disabled = true;

            li.appendChild(completedBtn);
            taskList.appendChild(li);
        }
    }
}