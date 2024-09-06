const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
         enunciado: "Qual dos dois é seu passatempo favorito?",
        alternativas: [
            {
                texto: "ler livros.",
                afirmacao: "Você geralmente tem uma curiosidade insaciável e um desejo constante de explorar novas ideias e mundos, o que enriquece sua visão de mundo e suas conversas."
            },
            {
                texto: "Ouvir músicas.",
                afirmacao: "Se você é uma pessoa que gosta de ouvir música muitas vezes encontra na melodia e nas letras uma forma profunda de expressão emocional e um meio de conectar-se com diferentes aspectos da vida e da experiência humana."
            }
        ]
    },
    {
        enunciado: "Você prefere:",
        alternativas: [
            {
                texto: "Aprender por meio de leitura.",
                afirmacao: "Você geralmente valoriza a profundidade e a reflexão, buscando compreender conceitos e informações de maneira detalhada e abrangente. A leitura permite uma imersão no conteúdo, possibilitando uma assimilação mais lenta e reflexiva do conhecimento."
            },
            {
                texto: "Experiências práticas.",
                afirmacao: "Você tendem a valorizar a aplicação direta do conhecimento, buscando entender conceitos por meio da ação e da experimentação. Para você, o aprendizado se torna mais eficaz quando podem testar e ajustar suas habilidades em situações reais, o que facilita a internalização e a retenção do conhecimento."
            }
        ]
    },
    {
        enunciado: "Você prefere resolver problemas complexos de forma:",
        alternativas: [
            {
                texto: "Independente.",  
                afirmacao: "Você geralmente é vista como autossuficiente e proativa. Valoriza a autonomia e a capacidade de enfrentar desafios de maneira autônoma, o que pode refletir uma grande confiança em suas próprias habilidades e um forte desejo de controle sobre o processo de resolução de problemas."
            },
            {
                texto: "Com outras pessoas para encontrar solucões.",
                afirmacao: "Você geralmente é vista como colaborativa e valorizadora do trabalho em equipe.  Acredita que a troca de ideias e a diversidade de perspectivas podem levar a soluções mais eficazes e inovadoras, destacando sua habilidade em comunicação e cooperação."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "VOCÊ É";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();