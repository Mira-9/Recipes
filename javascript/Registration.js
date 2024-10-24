document.querySelector('form').onsubmit = function () {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return false;
    }
    return true;
};