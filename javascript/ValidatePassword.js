// Проверка пароля на его длину и совпадение при подтверждении пароля
document.querySelector('form').onsubmit = function () {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Проверка длины пароля
    if (password.length < 8) {
        alert("В пароле должно быть минимум 8 символов");
        return false; // Отклоняем отправку формы
    }

    // Проверка совпадений паролей при подтверждении пароля
    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return false; // Отклоняем отправку формы
    }

    return true; // Разрешаем отправку формы, если все проверки пройдены
};

// Кнопка "Показать пароль"
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

togglePassword.onclick = function () {
    togglePasswordField('password');
};

toggleConfirmPassword.onclick = function () {
    togglePasswordField('confirm_password');
};

function togglePasswordField(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}



// Возможность использовать в имени только буквы латинского и кириллического алфавита
const secureNameInput = document.getElementById('username');
const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s'-]+$/;

secureNameInput.oninput = function() {
    validateName();
}

function validateName() {
    const nameValue = secureNameInput.value;
    if (!nameRegex.test(nameValue)) {
        secureNameInput.value = nameValue.slice(0, -1); // Убираем последний недопустимый символ
        alert("Имя может содержать только буквы латинского и кириллического алфавита");
    }
}

// Возможность использовать в пароле только буквы латинского алфавита и цифры
const securePasswordInput = document.getElementById('password');
const secureConfirmPasswordInput = document.getElementById('confirm_password');
const passwordRegex = /^[A-Za-z0-9]*$/;

securePasswordInput.oninput = validatePasswords;
secureConfirmPasswordInput.oninput = validatePasswords;

function validatePasswords() {
    const passwordValue = securePasswordInput.value;
    const confirmPasswordValue = secureConfirmPasswordInput.value;

    // Проверка пароля
    if (!passwordRegex.test(passwordValue)) {
        securePasswordInput.value = passwordValue.slice(0, -1); // Убираем последний недопустимый символ
        alert("Пароль может содержать только цифры и буквы латинского алфавита");
    }

    // Проверка подтверждения пароля
    if (!passwordRegex.test(confirmPasswordValue)) {
        secureConfirmPasswordInput.value = confirmPasswordValue.slice(0, -1); // Убираем последний недопустимый символ
        alert("Пароль может содержать только цифры и буквы латинского алфавита");
    }
}