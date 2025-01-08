const inputNome = document.querySelector('#nome')
const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')
const inputTell = document.querySelector('#telefone')
const elementoResposta = document.querySelector('#elemento-resposta')
const buttonSubmit = document.querySelector('#submit')

let maxCaracteres = 100 // caracteres maximos 100
let maxSenha = 20 // Senha maxima 20
let maxTell = 15 // Numero maximo permitido 15

buttonSubmit.addEventListener('click', function (e) {
    e.preventDefault()
    console.log('foi')

    let caracteresNome = inputNome.value
    let caracteresEmail = inputEmail.value
    let caracteresSenha = inputSenha.value
    let caracterestell = inputTell.value


    // verifica se algum input excedeu o limite de caracteres
    if (caracteresNome.length > maxCaracteres || caracteresEmail.length > maxCaracteres) {
        e.preventDefault()
        if (caracteresNome.length > caracteresEmail.length) {
            elementoResposta.style.display = 'block'
            elementoResposta.innerHTML = `Nome muito grande`
            resetMessage()
        } else {
            elementoResposta.style.display = 'block'
            elementoResposta.innerHTML = `E-mail muito grande`
            resetMessage()
        }
    } else if (caracteresSenha.length > maxSenha) {
        e.preventDefault()
        elementoResposta.style.display = 'block'
        elementoResposta.innerHTML = 'Senha muito grande'
        resetMessage()
    } else if (caracterestell.length > maxTell) {
        e.preventDefault()
        elementoResposta.style.display = 'block'
        elementoResposta.innerHTML = 'Telefone Invalido'
        resetMessage()
    }

    // verificando se há algum input vazio
    if (
        caracteresNome.length == '' ||
        caracteresEmail.length == '' ||
        caracteresSenha.length == '' ||
        caracterestell.length == ''
    ) {
        e.preventDefault()
        elementoResposta.style.display = 'block'
        elementoResposta.innerHTML = 'Insira todos os dados'
        resetMessage()
    }
})

inputTell.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');  // Remove tudo o que não for número
    if (value.length <= 2) {
        value = value.replace(/(\d{2})(\d{0,0})/, '($1) $2');
    } else if (value.length <= 7) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,0})/, '($1) $2-$3')
    } else {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    }
    e.target.value = value
})


// função para resetar as mensagens de erro
function resetMessage() {
    setTimeout(() => {
        let opacidade = 1
        const intervalo = setInterval(() => {
            elementoResposta.style.opacity = opacidade
            opacidade -= 0.1

            if (opacidade <= 0) {
                elementoResposta.style.display = 'none'
                elementoResposta.style.opacity = '1'
                clearInterval(intervalo)
            }

        }, 50)
    }, 2000)
}