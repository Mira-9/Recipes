const massFetch = ['LoginToProfileForm.html', 'LoginForm.html', 'RegistrationForm.html']

for (let i= 0; i < massFetch.length; i++) {
    if (massFetch[i]) {
        console.log('Mass fetch succeeded.')
    }
    else {
        console.log('Mass fetch failed.')
    }
}

function openAllModals(modalId, overlayId, OpenFile) {
    fetch(OpenFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(modalId).innerHTML = data
            document.getElementById(modalId).style.display = 'block'
            document.getElementById(overlayId).style.display = 'block'

            const closeButton = document.querySelectorAll('.close-button')
            if (!modalId) {
                return undefined
            } else {
                closeButton.forEach(function (button) {
                    button.addEventListener('click', function () {
                        closeModalWindow(modalId, overlayId)
                    })
                })
            }
        })
}

function closeModalWindow(closeModalId, closeOverlayId) {
    document.getElementById(closeModalId).style.display = 'none'
    document.getElementById(closeOverlayId).style.display = 'none'
}

const modalMappingModalWindow = {
    'openLoginToProfileForm': {
        modalId: 'loginToProfileForm',
        overlayId: 'loginToProfileFormOverlay',
        OpenFile: '../components/loginToProfileForm/LoginToProfileForm.html'
    },
    'openLoginForm': {
        modalId: 'loginForm',
        overlayId: 'loginFormOverlay',
        OpenFile: '../components/loginForm/LoginForm.html'
    },
    'openLoginFormIndex': {
        modalId: 'loginForm',
        overlayId: 'loginFormOverlay',
        OpenFile: '../components/loginForm/LoginForm.html'
    },
    'openRegisterForm': {
        modalId: 'registrationForm',
        overlayId: 'registrationFormOverlay',
        OpenFile: '../components/registrationForm/registrationForm.html'
    }
}

// Добавляем обработчики событий для каждой кнопки
Object.keys(modalMappingModalWindow).forEach(buttonId => {
    document.getElementById(buttonId).addEventListener('click', (event) => {
        event.preventDefault()
        const {modalId, overlayId, OpenFile} = modalMappingModalWindow[buttonId]
        openAllModals(modalId, overlayId, OpenFile)
    })
})