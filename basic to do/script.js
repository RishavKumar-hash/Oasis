function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var taskItem = document.createElement("li");
    taskItem.textContent = taskInput;

    var pendingList = document.getElementById("pendingList");
    pendingList.appendChild(taskItem);

    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
        completeTask(taskItem);
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        deleteTask(taskItem);
    };

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    document.getElementById("taskInput").value = "";
}

function completeTask(taskItem) {
    var completedList = document.getElementById("completedList");
    completedList.appendChild(taskItem);
    taskItem.querySelector("button").remove(); // Remove complete button
    taskItem.classList.add("completed");
}

function deleteTask(taskItem) {
    taskItem.remove();
}
