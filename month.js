

// ======================================================================= Dahboard for the user ======================================================================

// ============================================== Questionarie for the user ==============================================

const questions = [
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        correctAnswer: 0,
        points: [40, 30, 20, 10]
    },
    // Add more questions with options and correct answers
];

let userAnswers = [];
let totalPoints = 0;

function generateQuestions() {
    const quizContainer = document.getElementById("quiz-container");

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            <label><input type="radio" name="q${index}" value="0"> ${q.options[0]}</label><br>
            <label><input type="radio" name="q${index}" value="1"> ${q.options[1]}</label><br>
            <label><input type="radio" name="q${index}" value="2"> ${q.options[2]}</label><br>
            <label><input type="radio" name="q${index}" value="3"> ${q.options[3]}</label><br>
            <button onclick="submitAnswer(${index})">Submit Answer</button>
            <p id="result${index}"></p>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

function submitAnswer(questionIndex) {
    const selectedOption = document.querySelector(`input[name="q${questionIndex}"]:checked`);

    if (selectedOption) {
        const points = questions[questionIndex].points[selectedOption.value];
        totalPoints += points;
        document.getElementById(`result${questionIndex}`).textContent = `Points: ${points}`;
        userAnswers[questionIndex] = selectedOption.value;
        document.querySelectorAll(`input[name="q${questionIndex}"]`).forEach(input => {
            input.disabled = true;
        });
    }
}

function calculatePercentage() {
    if (userAnswers.length === questions.length) {
        const percentage = (totalPoints / (questions.length * 40)) * 100;
        document.getElementById("result").textContent = `Final Percentage: ${percentage.toFixed(2)}%`;
        document.getElementById("final-submit").disabled = true;
    }
}

// Call function to generate questions when the page loads
generateQuestions();



// days navigation





function showBlock(blockId) {
    const blocks = document.querySelectorAll('.content-block');
    blocks.forEach(block => {
        if (block.id === blockId) {
            block.classList.remove('hidden');
        } else {
            block.classList.add('hidden');
        }
    });
}
