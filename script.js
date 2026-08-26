// Banco de dados de flashcards: 1 pergunta + 1 imagem por tema
const flashcardsData = {
    propriedades: [
        {
            imagem: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
            pergunta: "O que é o Princípio da Dualidade Onda-Partícula da luz e qual sua importância em sensores robóticos?",
            resposta: "A luz se comporta como onda (propagação) e partícula/fóton (interação). Na robótica, entender os fótons é crucial para o funcionamento de sensores fotoelétricos e câmeras digitais (sensores CMOS)."
        }
    ],
    reflexao: [
        {
            imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
            pergunta: "Diferencie reflexão especular de reflexão difusa no contexto de sensores ópticos.",
            resposta: "Especular ocorre em superfícies lisas, refletindo em uma só direção. Difusa ocorre em superfícies irregulares, espalhando a luz. Sensores de proximidade robóticos dependem da reflexão difusa para detectar objetos comuns."
        }
    ],
    espelhos: [
        {
            imagem: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
            pergunta: "Por que robôs móveis autônomos utilizam espelhos convexos em seus sistemas ópticos?",
            resposta: "Espelhos convexos aumentam o campo de visão (ângulo amplo), permitindo que uma única câmera robótica montada no topo detecte obstáculos em 360° (visão omnidirecional)."
        }
    ],
    fenomenos: [
        {
            imagem: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=600&q=80",
            pergunta: "Como o fenômeno da refração da luz afeta robôs submarinos (ROVs)?",
            resposta: "A luz muda de velocidade e direção ao passar da água para o vidro protetor da câmera. Se o software do robô não corrigir essa distorção por refração, ele errará o cálculo de distância dos objetos."
        }
    ],
    lentes: [
        {
            imagem: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
            pergunta: "Qual o papel de uma lente convergente no sistema de visão computacional de um robô?",
            resposta: "Ela foca a luz refletida pelo ambiente diretamente sobre o sensor digital (CCD/CMOS), gerando uma imagem nítida para processamento."
        }
    ],
    "corpo-humano": [
        {
            imagem: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
            pergunta: "Qual a analogia mecânica entre a íris/pupila humana e as câmeras dos robôs?",
            resposta: "A íris regula a entrada de luz alterando a pupila. Nas câmeras robóticas, o mecanismo do 'diafragma' (abertura) ou o tempo de exposição digital controlam essa quantidade de luz."
        }
    ]
};

// Variáveis de estado
let currentCategory = "propriedades";
let currentIndex = 0;

// Seletores do DOM
const categorySelect = document.getElementById("category-select");
const flashcard = document.getElementById("flashcard");
const cardImage = document.getElementById("card-image");
const cardCategoryText = document.getElementById("card-category-text");
const cardQuestion = document.getElementById("card-question");
const cardAnswer = document.getElementById("card-answer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const cardCounter = document.getElementById("card-counter");

// Função para atualizar os dados do card
function updateCard() {
    const currentList = flashcardsData[currentCategory];
    const cardData = currentList[currentIndex];

    flashcard.classList.remove("flipped");

    setTimeout(() => {
        cardImage.src = cardData.imagem;
        cardCategoryText.textContent = categorySelect.options[categorySelect.selectedIndex].text;
        cardQuestion.textContent = cardData.pergunta;
        cardAnswer.textContent = cardData.resposta;
        cardCounter.textContent = `${currentIndex + 1} / ${currentList.length}`;
    }, 150);
}

// Evento: Virar o card
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

// Inicialização
updateCard();