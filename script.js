const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVariable;",
            "int myVariable;",
            "let myVariable()"
        ],
        correta: 0
    },
    {
        pergunta: "Como se escreve um comentário em uma única linha em JavaScript?",
        respostas: [
            "/* Comentário */",
            "// Comentário",
            "# Comentário"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número inteiro?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "Number()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função de 'isNaN()' em JavaScript?",
        respostas: [
            "Verificar se o valor é um número",
            "Verificar se o valor é NaN (Not a Number)",
            "Verificar se o valor é nulo"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída de 'typeof null' em JavaScript?",
        respostas: [
            "'null'",
            "'undefined'",
            "'object'"
        ],
        correta: 2
    },
    {
        pergunta: "Qual operador é usado para atribuir um valor a uma variável?",
        respostas: [
            "=",
            "==",
            "==="
        ],
        correta: 0
    },
    {
        pergunta: "Como você cria uma função em JavaScript?",
        respostas: [
            "function:myFunction() {}",
            "function myFunction() {}",
            "def myFunction() {}"
        ],
        correta: 1
    },
    {
        pergunta: "Como você chama uma função chamada 'myFunction' em JavaScript?",
        respostas: [
            "call myFunction",
            "myFunction()",
            "myFunction[]"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de comparar dois valores, inclusive o tipo, em JavaScript?",
        respostas: [
            "a == b",
            "a = b",
            "a === b"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a saída de '2 + 2 + '2'' em JavaScript?",
        respostas: [
            "'22'",
            "'24'",
            "'42'"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas



for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input'). value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }



        quizItem.querySelector('dl').appendChild(dt)
    }

quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}