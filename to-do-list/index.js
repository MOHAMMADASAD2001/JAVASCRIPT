let task = document.getElementById ("task") 
let add = document.getElementById ("add-task")
let datatask;

if (localStorage.tasks != null) {
    datatask = JSON.parse (localStorage.getItem("tasks"));
}    else {
    datatask = []

    }

add.onclick = function () {
    let newtask = {
        task: task.value,
    }
    datatask.push (newtask);
    localStorage.setItem ("tasks" , JSON.stringify(datatask) )
    show ()
    clear ()
};

function clear ()
{
    task.value = "";

}

function show () {
    let table = '';
for ( let i = 0; i < datatask.length; i++){
    table += `
    <tr>
            <td>${datatask[i].task}</td>
            <td><button id="delete-${i}" onclick="deleteTask(${i})">Delete</button></td>
            <td><button id="update-${i}" onclick="updateTask(${i})">Update</button></td>
        </tr>
    `;
}



    document.getElementById ("body").innerHTML = table;
}
function deleteTask(index) {
    datatask.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(datatask));
    show();
}

function updateTask(index) {
    let updatedTask = prompt("Enter the updated task:", datatask[index].task);
    if (updatedTask !== null) {
        datatask[index].task = updatedTask;
        localStorage.setItem("tasks", JSON.stringify(datatask));
        show();
    }
}

show();