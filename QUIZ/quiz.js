const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "12"],
        correctAnswer: "8"
    }
];

 let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');

function displayQuestion() {
    const { question, options } = questions[currentQuestionIndex];

    questionElement.textContent = question;

    // becuz options is an array , we are using map method of array to map all the options with HTML Buttons
    // at once.
    optionsElement.innerHTML = options.map(option => `<button>${option}</button>`).join('');
    optionsElement.addEventListener('click', handleOptionClick);
}

function handleOptionClick(event) {
    
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
        
    }
}

function showResult() {
    alert(`Your score: ${score} out of ${questions.length}`);
    resetQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

nextButton.addEventListener('click', displayQuestion());

// Initial display
displayQuestion();
