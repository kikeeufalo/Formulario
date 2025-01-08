const enderecoEmail = document.querySelector('#input-id-email')
const enderecoSenha = document.querySelector('#input-id-senha')
const messageErro = document.querySelector('#mensagemP1')
const buttonLogin = document.querySelector('#button-login')

buttonLogin.addEventListener('click', function (e) {
    let caractereEnderocoEmail = enderecoEmail.value
    let caractereEnderecoSenha = enderecoSenha.value

    if (
        caractereEnderocoEmail.length == '' ||
        caractereEnderecoSenha.length == ''
    ) {
        e.preventDefault()
        messageErro.style.display = 'block'
        messageErro.innerHTML = 'Insira todos os dados corretamente'
        resetMessage()
    }
})

// função para resetar as mensagens de erro
function resetMessage() {
    if (messageErro) {
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

            }, 50)
        }, 2000)
    }