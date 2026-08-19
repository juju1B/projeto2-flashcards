// Banco de dados de flashcards focados em óptica e robótica
const flashcardsData = {
    propriedades: [
        {
            pergunta: "O que é o Princípio da Dualidade Onda-Partícula da luz e qual sua importância em sensores robóticos?",
            resposta: "A luz se comporta como onda (propagação) e partícula/fóton (interação). Na robótica, entender os fótons é crucial para o funcionamento de sensores fotoelétricos e câmeras digitais (sensores CMOS)."
        },
        {
            pergunta: "Qual é a velocidade aproximada da luz no vácuo e como robôs medem distância usando essa constante?",
            resposta: "Cerca de 300.000 km/s. Sensores LiDAR emitem pulsos de luz laser e calculam o tempo que o feixe leva para ir e voltar (Time-of-Flight), mapeando o ambiente em 3D."
        }
    ],
    reflexao: [
        {
            pergunta: "Diferencie reflexão especular de reflexão difusa no contexto de sensores ópticos.",
            resposta: "Especular ocorre em superfícies lisas (espelhos), refletindo em uma só direção. Difusa ocorre em superfícies irregulares (paredes), espalhando a luz. Sensores de proximidade robóticos dependem da reflexão difusa para detectar objetos comuns."
        },
        {
            pergunta: "O que diz a Lei da Reflexão e qual seu impacto na calibração de sensores de luz?",
            resposta: "O ângulo de incidência é sempre igual ao ângulo de reflexão. Robôs usam isso para prever trajetórias de feixes laser e evitar falsas leituras causadas por superfícies muito brilhantes."
        }
    ],
    espelhos: [
        {
            pergunta: "Por que robôs móveis autônomos utilizam espelhos convexos em seus sistemas ópticos?",
            resposta: "Espelhos convexos aumentam o campo de visão (ângulo amplo), permitindo que uma única câmera robótica montada no topo detecte obstáculos em 360° (visão omnidirecional)."
        },
        {
            pergunta: "Qual o risco do uso de espelhos côncavos próximos a sensores robóticos sensíveis?",
            resposta: "Espelhos côncavos convergem os raios de luz para um ponto focal. Isso pode concentrar radiação infravermelha ou solar, superaquecendo ou queimando o sensor de imagem do robô."
        }
    ],
    fenomenos: [
        {
            pergunta: "Como o fenômeno da refração da luz afeta robôs submarinos (ROVs)?",
            resposta: "A luz muda de velocidade e direção ao passar da água para o vidro protetor da câmera. Se o software do robô não corrigir essa distorção por refração, ele errará o cálculo de distância dos objetos."
        },
        {
            pergunta: "De que forma o fenômeno da polarização ajuda robôs na detecção de materiais?",
            resposta: "Filtros polarizadores em câmeras robóticas reduzem o reflexo intenso de superfícies metálicas ou molhadas, permitindo que algoritmos de visão computacional identifiquem objetos claramente."
        }
    ],
    lentes: [
        {
            pergunta: "Qual o papel de uma lente convergente no sistema de visão computacional de um robô?",
            resposta: "Ela foca a luz refletida pelo ambiente diretamente sobre o sensor digital (CCD/CMOS), gerando uma imagem nítida para processamento."
        },
        {
            pergunta: "O que é 'distorção de lente' (como efeito barril) e como robôs lidam com isso?",
            resposta: "É uma aberração geométrica causada por lentes angulares (olho de peixe). Robôs executam rotinas de calibração matemática para corrigir a imagem antes de aplicar algoritmos de navegação."
        }
    ],
    "corpo-humano": [
        {
            pergunta: "Qual a analogia mecânica entre a íris/pupila humana e as câmeras dos robôs?",
            resposta: "A íris regula a entrada de luz alterando a pupila. Nas câmeras robóticas, o mecanismo do 'diafragma' (abertura) ou o tempo de exposição digital controlam essa quantidade de luz."
        },
        {
            pergunta: "Como o foco dinâmico do cristalino humano é replicado em garras robóticas guiadas por visão?",
            resposta: "O olho deforma o cristalino (acomodação visual). Robôs usam sistemas de autofoco com micromotores ou lentes líquidas que mudam de curvatura via estímulo elétrico para focar objetos próximos e distantes instantaneamente."
        }
    ]
};

// Variáveis de estado da aplicação
let currentCategory = "propriedades";
let currentIndex = 0;

// Seletores do DOM
const categorySelect = document.getElementById("category-select");
const flashcard = document.getElementById("flashcard");
const cardCategoryText = document.getElementById("card-category-text");
const cardQuestion = document.getElementById("card-question");
const cardAnswer = document.getElementById("card-answer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const cardCounter = document.getElementById("card-counter");

// Função para atualizar os dados do card visível
function updateCard() {
    const currentList = flashcardsData[currentCategory];
    const cardData = currentList[currentIndex];

    // Remove classe de virado para garantir que comece pela pergunta
    flashcard.classList.remove("flipped");

    // Pequeno delay para atualizar o texto enquanto o card reseta a face
    setTimeout(() => {
        cardCategoryText.textContent = categorySelect.options[categorySelect.selectedIndex].text;
        cardQuestion.textContent = cardData.pergunta;
        cardAnswer.textContent = cardData.resposta;
        cardCounter.textContent = `${currentIndex + 1} / ${currentList.length}`;
    }, 150);
}

// Evento: Clique para virar o card
flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

// Evento: Mudar de categoria
categorySelect.addEventListener("change", (e) => {
    currentCategory = e.target.value;
    currentIndex = 0;
    updateCard();
});

// Evento: Botão Avançar
nextBtn.addEventListener("click", () => {
    const currentList = flashcardsData[currentCategory];
    currentIndex = (currentIndex + 1) % currentList.length;
    updateCard();
});

// Evento: Botão Voltar
prevBtn.addEventListener("click", () => {
    const currentList = flashcardsData[currentCategory];
    currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
    updateCard();
});

// Inicialização do site
updateCard();
