const date = new Date();

function updateYear() {
    document.getElementById('updateYearDate').textContent = String(date.getFullYear());
}

setInterval(updateYear, 1000);