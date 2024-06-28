function getStarted() {
    window.location.href = "index.html";
}

function closeWelcomeModal() {
    var modal = document.getElementById("welcomeModal");
    modal.style.display = "none";
}

window.onload = function() {
    var modal = document.getElementById("welcomeModal");
    modal.style.display = "block";
}
