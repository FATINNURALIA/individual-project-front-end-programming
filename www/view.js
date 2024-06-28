function loadData() {
            var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            var events = JSON.parse(localStorage.getItem("events") || "[]");

            var taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            for (var i = 0; i < tasks.length; i++) {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(tasks[i]));
                taskList.appendChild(li);
            }

            var eventList = document.getElementById("eventList");
            eventList.innerHTML = "";
            for (var i = 0; i < events.length; i++) {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(events[i]));
                eventList.appendChild(li);
            }
        }

        window.onload = loadData;
    