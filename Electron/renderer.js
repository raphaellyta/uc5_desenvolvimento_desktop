const limpar = document.getElementById('limpar')
const visor = document.getElementById('visor')
let op

limpar.addEventListener('click', () => {
    visor.value = ""
})
// document.getElementById('b7').addEventListener('click', () => {
//     visor.value += document.getElementById('b7').textContent
// })
let botoes = document.querySelectorAll('button')
botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        if (botao.className === 'num') {
            visor.value += botao.textContent.trim()
        } else if (botao.className === 'op') {
            visor.value += botao.textContent
            op = botao.textContent.trim()
        } else if (botao.id === 'igual') {
            let conteudo = visor.value.split(op)
            switch (op) {
                case '+':
                    visor.value = Number(conteudo[0]) + Number(conteudo[1])
                    break
                case '-':
                    visor.value = Number(conteudo[0]) - Number(conteudo[1])
                    break
                case '*':
                    visor.value = Number(conteudo[0]) * Number(conteudo[1])
                    break

                case '/':
                    visor.value = Number(conteudo[0]) / Number(conteudo[1])
                    break

            }
        }
    })
})
