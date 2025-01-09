const inputEmail = document.querySelector('#input-email')
const inputCod = document.querySelector('#input-cod')
const buttonVerific = document.querySelector('#button-verific')
const message = document.querySelector('#message')

let verific = true

// verificador de caracteres do E-mail
inputEmail.addEventListener('input', function() {
    let ver = 100
    if (inputEmail.value.length > ver) {
        inputEmail.value = inputEmail.value.slice(0, ver)
        message.style.display = 'block'
        message.innerHTML = 'Insira um E-mail valido ou tente outro'
        if (verific) {
            verific = false
            resetMessage()
        }
    }
})

// Verificador do código
inputCod.addEventListener('input', function() {
    if (inputCod.value.length > 4) {
        inputCod.value = inputCod.value.slice(0, 4)

        message.style.display = 'block'
        message.innerHTML = 'Apenas 4 (quatro) digitos'
        if (verific) {
            verific = false
            resetMessage()
        }
    }
})


buttonVerific.addEventListener('click', function(e) {
    if (inputEmail.value.length == '') {
        e.preventDefault()
        message.style.display = 'block'
        message.innerHTML = 'Insira um email valido'
        resetMessage()
    }else if (inputCod.value.length == '') {
        e.preventDefault()
        message.style.display = 'block'
        message.innerHTML = 'Insira o código correto'
        resetMessage()
    }
})

function resetMessage() {
    setTimeout(() => {
        let opacidade = 1
        const intervalo = setInterval(() => {
            message.style.opacity = opacidade
            opacidade -= 0.1

            if (opacidade <= 0) {
                message.style.display = 'none'
                message.style.opacity = '1'
                clearInterval(intervalo)
            }

            verific = true

        }, 50)
    }, 2000)
}