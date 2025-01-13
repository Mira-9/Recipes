function updateYear(date) {
    document.getElementById('updateYearDate').textContent = String(date.getFullYear());
}
setInterval(() => updateYear(new Date()), 1000);