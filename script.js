const questions = [
    {
        question: "1. Qual é a principal função da linguagem HTML (HyperText Markup Language) no desenvolvimento Front-end de uma aplicação web?",
        options: ["Definir o estilo e o layout visual dos elementos da página.", "Gerenciar a lógica de negócio e a comunicação com o servidor.", "Estruturar o conteúdo da página, definindo títulos, parágrafos, links e imagens.", "Adicionar interatividade e manipular o DOM (Document Object Model)."],
        answer: "Estruturar o conteúdo da página, definindo títulos, parágrafos, links e imagens."
    },
    {
        question: "2. No contexto de uma aplicação web Full-Stack, qual componente é geralmente responsável por processar as requisições, interagir com o banco de dados e aplicar as regras de negócio?",
        options: ["Front-end", "Serviço de Proxy", "Protocolo HTTP", "Back-end"],
        answer: "Back-end"
    },
    {
        question: "3. Qual é o uso mais comum da linguagem Java em aplicações web corporativas ou de grande escala como a que você está desenvolvendo?",
        options: ["Desenvolvimento do Front-end (lado do cliente) para manipulação do DOM.", "Criação de estilos e formatação visual (CSS-in-Java).", "Desenvolvimento do Back-end (lado do servidor), utilizando frameworks como Spring Boot ou Java EE.", "Compilação de código JavaScript para otimização de performance no navegador."],
        answer: "Desenvolvimento do Back-end (lado do servidor), utilizando frameworks como Spring Boot ou Java EE."
    },
    {
        question: "4. Qual das seguintes tecnologias é usada primariamente para definir o visual, as cores e o layout de uma página web?",
        options: ["JavaScript", "CSS", "Python", "SQL"],
        answer: "CSS"
    },
    {
        question: "5. No contexto do desenvolvimento Front-end, qual é a principal responsabilidade do JavaScript?",
        options: ["Garantir a persistência dos dados no servidor de forma síncrona.", "Estruturar o conteúdo da página e definir a semântica dos elementos.", "Adicionar interatividade, manipular o DOM e realizar requisições assíncronas ao servidor.", "Definir os endpoints da API REST do Back-end."],
        answer: "Adicionar interatividade, manipular o DOM e realizar requisições assíncronas ao servidor."
    },
    {
        question: "6. Qual dos seguintes é um conceito fundamental em Java que permite que uma classe herde campos e métodos de outra classe?",
        options: ["Encapsulamento", "Polimorfismo", "Herança", "Abstração"],
        answer: "Herança"
    },
    {
        question: "7. Qual protocolo é a base da comunicação de dados na World Wide Web e é usado para solicitar e entregar as páginas web?",
        options: ["FTP (File Transfer Protocol)", "SMTP (Simple Mail Transfer Protocol)", "HTTP (Hypertext Transfer Protocol)", "TCP (Transmission Control Protocol)"],
        answer: "HTTP (Hypertext Transfer Protocol)"
    },
    {
        question: "8. Em um Back-end Java, o que um desenvolvedor usa para expor funcionalidades e permitir a comunicação entre o Front-end e o Back-end?",
        options: ["Interfaces de Programação de Aplicações (APIs)", "Folhas de Estilo em Cascata (CSS)", "Linguagem de Marcação de Hipertexto (HTML)", "Máquina Virtual Java (JVM)"],
        answer: "Interfaces de Programação de Aplicações (APIs)"
    },
    {
        question: "9. Qual tipo de banco de dados é ideal para armazenar dados estruturados em tabelas com esquemas fixos, sendo consultado via SQL (Structured Query Language)?",
        options: ["Banco de Dados Orientado a Grafos", "Banco de Dados Relacional", "Banco de Dados NoSQL (Not Only SQL)", "Banco de Dados Chave-Valor"],
        answer: "Banco de Dados Relacional"
    },
    {
        question: "10. Qual é um dos principais benefícios de utilizar um sistema de controle de versão, como o Git, em um projeto de desenvolvimento de quiz?",
        options: ["Executar o código Java diretamente no navegador sem a necessidade da JVM.", "Aumentar a velocidade de renderização da página web no Front-end.", "Rastrear alterações no código, facilitar a colaboração em equipe e permitir reverter para versões anteriores.", "Automatizar a estilização dos componentes CSS e HTML."],
        answer: "Rastrear alterações no código, facilitar a colaboração em equipe e permitir reverter para versões anteriores."
    },
    {
        question: "11. Qual framework Java é amplamente reconhecido por simplificar a criação de aplicações Back-end robustas, incluindo o desenvolvimento de APIs REST?",
        options: ["React", "Django", "Spring Boot", "Angular"],
        answer: "Spring Boot"
    },
    {
        question: "12. O que o termo 'Cross-Origin Resource Sharing' (CORS) aborda em uma aplicação web?",
        options: ["A capacidade de o Front-end ser estilizado em diferentes navegadores.", "A segurança, permitindo ou bloqueando que um recurso (Back-end) seja acessado por uma origem (Front-end) diferente da sua própria.", "O compartilhamento de código entre o Front-end e o Back-end usando a mesma linguagem de programação.", "A criação de servidores virtuais que podem rodar código de diferentes origens simultaneamente."],
        answer: "A segurança, permitindo ou bloqueando que um recurso (Back-end) seja acessado por uma origem (Front-end) diferente da sua própria."
    },
    {
        question: "13. Qual estrutura de dados é mais comumente utilizada para troca de informações entre o Front-end e o Back-end, especialmente em APIs REST?",
        options: ["XML (Extensible Markup Language)", "PDF (Portable Document Format)", "JSON (JavaScript Object Notation)", "TXT (Plain Text)"],
        answer: "JSON (JavaScript Object Notation)"
    },
    {
        question: "14. Qual dos seguintes elementos de Front-end é responsável por permitir a coleta de dados de entrada do usuário em um quiz (ex: nome, seleção de resposta)?",
        options: ["O elemento <header> do HTML.", "O elemento <style> do CSS.", "O elemento <form> do HTML, contendo campos como <input> e <button>.", "O objeto console.log do JavaScript."],
        answer: "O elemento <form> do HTML, contendo campos como <input> e <button>."
    },
    {
        question: "15. O que significa 'compilação' no ciclo de vida de um programa Java?",
        options: ["O processo de execução do código Java pela Máquina Virtual Java (JVM).", "A fase em que o código-fonte Java é traduzido em bytecode (arquivos .class).", "A criação de uma interface gráfica do usuário para a aplicação.", "A instalação de dependências e bibliotecas externas ao projeto."],
        answer: "A fase em que o código-fonte Java é traduzido em bytecode (arquivos .class)."
    },
    {
        question: "16. Qual termo descreve um desenvolvedor que trabalha e tem domínio sobre as camadas Front-end e Back-end de uma aplicação web?",
        options: ["Desenvolvedor UI/UX", "Desenvolvedor Back-end Sênior", "Engenheiro de DevOps", "Desenvolvedor Full-Stack"],
        answer: "Desenvolvedor Full-Stack"
    },
    {
        question: "17. Qual dos seguintes não é um princípio fundamental da Programação Orientada a Objetos (POO), base da linguagem Java?",
        options: ["Herança", "Modularidade", "Encapsulamento", "Polimorfismo"],
        answer: "Modularidade"
    },
    {
        question: "18. O que é um 'Endpoint' em uma API REST de Back-end?",
        options: ["Um componente visual no Front-end que marca o fim da página.", "A URL específica que representa um recurso ou uma funcionalidade acessível no servidor.", "A última linha de código em um arquivo Java.", "A ferramenta de estilização de código usada para padronizar a sintaxe."],
        answer: "A URL específica que representa um recurso ou uma funcionalidade acessível no servidor."
    },
    {
        question: "19. Qual dos métodos HTTP é usado para solicitar dados do servidor (como buscar a lista de perguntas do quiz)?",
        options: ["POST", "PUT", "DELETE", "GET"],
        answer: "GET"
    },
    {
        question: "20. O que é um 'framework' de desenvolvimento, como o Spring Boot (Java) ou o React (JavaScript)?",
        options: ["Um sistema operacional para servidores web que hospeda a aplicação.", "Uma coleção de ferramentas, bibliotecas e convenções que fornecem uma estrutura básica para o desenvolvimento rápido de aplicações.", "Uma linguagem de programação que é compilada diretamente em código de máquina.", "O hardware físico onde o código da aplicação é executado e armazenado."],
        answer: "Uma coleção de ferramentas, bibliotecas e convenções que fornecem uma estrutura básica para o desenvolvimento rápido de aplicações."
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    nextButton.disabled = true;
    nextButton.innerText = "Próxima Pergunta"; // Reseta o texto do botão
    showQuestion();
}

function showQuestion() {
    // Se for a última pergunta, muda o texto do botão.
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerText = "Ver Resultado";
    } else {
        nextButton.innerText = "Próxima Pergunta";
    }

    optionsElement.innerHTML = '';
    
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn', 'option');
        button.addEventListener('click', () => selectAnswer(button, option, currentQuestion.answer));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedButton, selectedOption, correctAnswer) {
    const isCorrect = selectedOption === correctAnswer;
    
    // Desabilita todos os botões após a seleção
    Array.from(optionsElement.children).forEach(button => {
        button.disabled = true;
        // Destaca a resposta correta e a selecionada
        if (button.innerText === correctAnswer) {
            button.classList.add('correct');
        } else if (button === selectedButton && !isCorrect) {
            button.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        score++;
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        // Limpa o feedback de cores
        Array.from(optionsElement.children).forEach(button => {
            button.classList.remove('correct', 'incorrect');
        });
        showQuestion();
        nextButton.disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.innerText = `Sua pontuação é: ${score} de ${questions.length}`;
}

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', startQuiz);

// Inicia o Quiz
startQuiz();