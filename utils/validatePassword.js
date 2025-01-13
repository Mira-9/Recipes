document.querySelector('form').onsubmit = function (event) {
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirm_password')

    // Проверка длины пароля
    if (password.value.length < 8) {
        alert("В пароле должно быть минимум 8 символов")
        password.value = '';  // Очищаем поле пароля
        event.preventDefault();  // Останавливаем отправку формы
    }
    // Проверка на совпадение паролей
    else if (password.value !== confirmPassword.value) {
        alert("Пароли не совпадают, введите пароль заново")
        confirmPassword.value = ''
        event.preventDefault()
    }
    // Если пароль соответствует требованиям
    else if (password.value.length >= 8 && password.value === confirmPassword.value) {
        alert("Пароль успешно зарегистрирован")
    }
}