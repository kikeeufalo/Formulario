const inputNome = document.querySelector('#nome')
const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')
const inputTell = document.querySelector('#telefone')
const elementoResposta = document.querySelector('#elemento-resposta')

inputNome.addEventListener('input', function() {
    if (inputNome.value.length > 3) {
        console.log('dd')
    }
})

buttonSubmit.addEventListener('click', function(e) {
    // verificando se há algum input vazio
    if (
        inputNome.value.length == '' ||
        inputEmail.value.length == '' ||
        inputSenha.value.length == '' ||
        inputTell.value.length == ''
    ) {
        e.preventDefault()
        elementoResposta.style.display = 'block'
        elementoResposta.innerHTML = 'Insira todos os dados.'
        resetMessage()
    }
})

inputTell.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '')  // Remove tudo que não for número

    if (value.length <= 10) {
        // Formato para telefones fixos: (XX) XXXX-XXXX
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    } else {
        // Formato para celulares: (XX) XXXXX-XXXX
        value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
    }

    // Aplica o valor formatado ao input
    e.target.value = value

    // Limitar o tamanho máximo
    if (e.target.value.length > maxTell) {
        e.target.value = e.target.value.slice(0, maxTell)
    }
})

// Permitir apagar os caracteres especiais
inputTell.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace') {
        let value = e.target.value
        if (value.endsWith(' ') || value.endsWith('-') || value.endsWith(')')) {
            e.target.value = value.slice(0, -1)  // Remove o último caractere especial
        }
    }
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