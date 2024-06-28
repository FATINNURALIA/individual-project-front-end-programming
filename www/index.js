function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementsByClassName("tablinks")[0].click();

function addTask() {
    var taskList = document.getElementById("taskList");
    var newTask = document.getElementById("newTask").value;

    if (newTask.trim() === "") return;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newTask));

    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("Remove"));
    removeButton.onclick = function() {
        taskList.removeChild(li);
        saveData();
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
    document.getElementById("newTask").value = "";
    saveData();
}

function addEvent() {
    var eventList = document.getElementById("eventList");
    var eventName = document.getElementById("eventName").value;
    var eventDate = document.getElementById("eventDate").value;

    if (eventName.trim() === "" || eventDate.trim() === "") return;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(eventName + " (" + eventDate + ")"));

    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("Remove"));
    removeButton.onclick = function() {
        eventList.removeChild(li);
        saveData();
    };

    li.appendChild(removeButton);
    eventList.appendChild(li);
    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    saveData();
}

function saveData() {
    var tasks = [];
    var events = [];

    var taskList = document.getElementById("taskList").getElementsByTagName("li");
    for (var i = 0; i < taskList.length; i++) {
        tasks.push(taskList[i].childNodes[0].nodeValue);
    }

    var eventList = document.getElementById("eventList").getElementsByTagName("li");
    for (var i = 0; i < eventList.length; i++) {
        events.push(eventList[i].childNodes[0].nodeValue);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("events", JSON.stringify(events));
}

function loadData() {
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    var events = JSON.parse(localStorage.getItem("events") || "[]");

    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(tasks[i]));

        var removeButton = document.createElement("button");
        removeButton.appendChild(document.createTextNode("Remove"));
        removeButton.onclick = (function(li) {
            return function() {
                taskList.removeChild(li);
                saveData();
            };
        })(li);

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    var eventList = document.getElementById("eventList");
    eventList.innerHTML = "";
    for (var i = 0; i < events.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(events[i]));

        var removeButton = document.createElement("button");
        removeButton.appendChild(document.createTextNode("Remove"));
        removeButton.onclick = (function(li) {
            return function() {
                eventList.removeChild(li);
                saveData();
            };
        })(li);

        li.appendChild(removeButton);
        eventList.appendChild(li);
    }
}

window.onload = loadData;
