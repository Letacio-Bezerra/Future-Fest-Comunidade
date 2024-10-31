let perguntas = [];

const formPergunta = document.getElementById('formPergunta');
const inputPergunta = document.getElementById('pergunta');
const listaPerguntas = document.getElementById('listaPerguntas');

// Função para renderizar a lista de perguntas
function renderizarLista() {
    listaPerguntas.innerHTML = perguntas.map((pergunta, index) =>
        `<li>
            <span>${pergunta.texto}</span>
            <button onclick="adicionarResposta(${index})">Responder</button>
            <button onclick="editarPergunta(${index})">Editar</button>
            <button onclick="removerPergunta(${index})">Remover</button>
            <ul>
                ${pergunta.respostas.map(resposta => `<li>${resposta}</li>`).join('')}
            </ul>
        </li>`
    ).join('');
}

// Adiciona uma nova pergunta
formPergunta.addEventListener('submit', (e) => {
    e.preventDefault();
    const novaPergunta = inputPergunta.value.trim();
    if (novaPergunta) {
        perguntas.push({ texto: novaPergunta, respostas: [] });
        inputPergunta.value = '';
        renderizarLista();
    }
});

// Remove uma pergunta
function removerPergunta(index) {
    perguntas.splice(index, 1);
    renderizarLista();
}

// Edita uma pergunta
function editarPergunta(index) {
    const novaPergunta = prompt("Editar pergunta:", perguntas[index].texto);
    if (novaPergunta) {
        perguntas[index].texto = novaPergunta.trim();
        renderizarLista();
    }
}

// Adiciona uma resposta a uma pergunta
function adicionarResposta(index) {
    const novaResposta = prompt("Digite sua resposta:");
    if (novaResposta) {
        perguntas[index].respostas.push(novaResposta.trim());
        renderizarLista();
    }
}
