// =========================================
// BANCO DE DADOS DOS FLASHCARDS
// =========================================

const flashcardsData = {

    // -----------------------------------------
    // PROPRIEDADES DA LUZ
    // -----------------------------------------

    propriedades: [

        {
            imagem:
                "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",

            pergunta:
                "O que é o Princípio da Dualidade Onda-Partícula da luz e qual sua importância em sensores robóticos?",

            resposta:
                "A luz se comporta como onda e como partícula, chamada fóton. Na robótica, esse conceito é importante para compreender o funcionamento de sensores fotoelétricos, câmeras digitais e sensores CMOS."
        }

    ],


    // -----------------------------------------
    // FENDA DUPLA
    // FOTO REAL DO EXPERIMENTO
    // -----------------------------------------

    "fenda-dupla": [

        {
            imagem:
                "iPHOTO-2026-09-02-11-03-51 (1).jpg",

            pergunta:
                "O que o experimento de fenda dupla com laser demonstra sobre a natureza da luz?",

            resposta:
                "O experimento demonstra a natureza ondulatória da luz por meio da interferência. Quando a luz passa pelas duas fendas, ocorre interferência construtiva e destrutiva, formando regiões claras e escuras no anteparo."
        }

    ],


    // -----------------------------------------
    // REFLEXÃO
    // -----------------------------------------

    reflexao: [

        {
            imagem:
                "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",

            pergunta:
                "Diferencie reflexão especular de reflexão difusa no contexto de sensores ópticos.",

            resposta:
                "A reflexão especular ocorre em superfícies lisas, refletindo a luz principalmente em uma direção. A reflexão difusa ocorre em superfícies irregulares, espalhando a luz em várias direções."
        }

    ],


    // -----------------------------------------
    // ESPELHOS
    // -----------------------------------------

    espelhos: [

        {
            imagem:
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",

            pergunta:
                "Por que robôs móveis autônomos utilizam espelhos convexos em seus sistemas ópticos?",

            resposta:
                "Espelhos convexos aumentam o campo de visão, permitindo que uma câmera ou sistema óptico observe uma área maior do ambiente."
        }

    ],


    // -----------------------------------------
    // FENÔMENOS DA LUZ
    // -----------------------------------------

    fenomenos: [

        {
            imagem:
                "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=600&q=80",

            pergunta:
                "Como o fenômeno da refração da luz afeta robôs submarinos (ROVs)?",

            resposta:
                "A luz muda de velocidade e direção ao passar da água para o vidro que protege a câmera. Essa alteração pode causar distorções nas imagens e afetar os cálculos de distância."
        }

    ],


    // -----------------------------------------
    // LENTES
    // -----------------------------------------

    lentes: [

        {
            imagem:
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",

            pergunta:
                "Qual o papel de uma lente convergente no sistema de visão computacional de um robô?",

            resposta:
                "A lente convergente direciona e focaliza a luz sobre o sensor digital da câmera, formando uma imagem que poderá ser processada pelo sistema computacional do robô."
        }

    ],


    // -----------------------------------------
    // CORPO HUMANO
    // -----------------------------------------

    "corpo-humano": [

        {
            imagem:
                "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",

            pergunta:
                "Qual a analogia entre a íris/pupila humana e as câmeras dos robôs?",

            resposta:
                "A íris humana regula a quantidade de luz que entra pela pupila. Nas câmeras robóticas, o diafragma e o tempo de exposição desempenham funções semelhantes."
        }

    ],


    // -----------------------------------------
    // SENSOR DE GÁS E FUMAÇA
    // FOTO REAL DO EXPERIMENTO
    // -----------------------------------------

    "sensor-gas-fumaca": [

        {
            imagem:
                "iPHOTO-2026-09-02-11-03-10 (2).jpg",

            pergunta:
                "Como funciona o sensor de gás e fumaça conectado ao Arduino?",

            resposta:
                "O sensor detecta alterações na concentração de determinados gases ou fumaça no ambiente. O Arduino recebe o sinal do sensor, processa a informação e pode acionar LEDs, displays ou outros dispositivos para indicar diferentes níveis de alerta."
        }

    ]

};


// =========================================
// VARIÁVEIS DE ESTADO
// =========================================

let currentCategory = "propriedades";

let currentIndex = 0;


// =========================================
// ELEMENTOS DO HTML
// =========================================

const categorySelect =
    document.getElementById("category-select");

const flashcard =
    document.getElementById("flashcard");

const cardImage =
    document.getElementById("card-image");

const cardCategoryText =
    document.getElementById("card-category-text");

const cardQuestion =
    document.getElementById("card-question");

const cardAnswer =
    document.getElementById("card-answer");

const prevBtn =
    document.getElementById("prev-btn");

const nextBtn =
    document.getElementById("next-btn");

const cardCounter =
    document.getElementById("card-counter");


// =========================================
// ATUALIZAR O FLASHCARD
// =========================================

function updateCard() {

    const currentList =
        flashcardsData[currentCategory];

    const cardData =
        currentList[currentIndex];


    // Volta o card para a frente

    flashcard.classList.remove("flipped");


    // Pequeno atraso para deixar a animação suave

    setTimeout(() => {

        // Imagem

        cardImage.src =
            cardData.imagem;

        cardImage.alt =
            "Imagem do experimento";


        // Categoria

        cardCategoryText.textContent =
            categorySelect
                .options[
                    categorySelect.selectedIndex
                ]
                .text;


        // Pergunta

        cardQuestion.textContent =
            cardData.pergunta;


        // Resposta

        cardAnswer.textContent =
            cardData.resposta;


        // Contador

        cardCounter.textContent =
            `${currentIndex + 1} / ${currentList.length}`;

    }, 150);

}


// =========================================
// VIRAR O CARD
// =========================================

flashcard.addEventListener("click", () => {

    flashcard.classList.toggle("flipped");

});


// =========================================
// TROCAR CATEGORIA
// =========================================

categorySelect.addEventListener(
    "change",
    (event) => {

        currentCategory =
            event.target.value;

        currentIndex = 0;

        updateCard();

    }
);


// =========================================
// BOTÃO AVANÇAR
// =========================================

nextBtn.addEventListener("click", () => {

    const currentList =
        flashcardsData[currentCategory];


    currentIndex =
        (currentIndex + 1) %
        currentList.length;


    updateCard();

});


// =========================================
// BOTÃO VOLTAR
// =========================================

prevBtn.addEventListener("click", () => {

    const currentList =
        flashcardsData[currentCategory];


    currentIndex =
        (currentIndex - 1 + currentList.length) %
        currentList.length;


    updateCard();

});


// =========================================
// INICIALIZAÇÃO
// =========================================

updateCard();
