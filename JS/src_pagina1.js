const enderecoEmail = document.querySelector('#input-id-email')
const enderecoSenha = document.querySelector('#input-id-senha')
const messageErro = document.querySelector('#mensagemP1')
const buttonLogin = document.querySelector('#button-login')

// Verificador para o MessageErro
let ver = true

// Verifica os caracteres do E-mail
enderecoEmail.addEventListener('input', function() {
    let tam = 100
    if (enderecoEmail.value.length > tam) {
        enderecoEmail.value = enderecoEmail.value.slice(0, tam)
        messageErro.style.display = 'block'
        messageErro.innerHTML = 'Seu Nome está muito grande'
        if (ver) {
            ver = false
            resetMessage()
        }
    }
})

// Verifica os caracteres da Senha
enderecoSenha.addEventListener('input', function() {
    let tam = 20
    if (enderecoSenha.value.length > tam) {
        enderecoSenha.value = enderecoSenha.value.slice(0, tam)
        messageErro.style.display = 'block'
        messageErro.innerHTML = 'Sua senha está muito grande'
        if (ver) {
            ver = false
            resetMessage()
        }
    }
})


// verificando se os inputs estão vazios
buttonLogin.addEventListener('click', function(e) { 
    if (
        enderecoEmail.value.length == '' ||
        enderecoSenha.value.length == ''
    ) {
        e.preventDefault()
        messageErro.style.display = 'block'
        messageErro.innerHTML = 'Insira todos os dados corretamente'
        resetMessage()
    }
})

// função para resetar as mensagens de erro
function resetMessage() {
    setTimeout(() => {
        let opacidade = 1
        const intervalo = setInterval(() => {
            messageErro.style.opacity = opacidade
            opacidade -= 0.1

            if (opacidade <= 0) {
                messageErro.style.display = 'none'
                messageErro.style.opacity = '1'
                clearInterval(intervalo)
            }

            ver = true
        }, 50)
    }, 2000)
}