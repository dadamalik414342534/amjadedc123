const quizData = [
    {question: "1. What does HTML stand for?", options: ["Hyper Text Markup Language", "High Transfer Markup Language", "Hyperlinks Text Management Language", "Home Tool Markup Language"], answer: 0},
    {question: "2. Which HTML tag is used to display an image?", options: ["<image>", "<pic>", "<img>", "<src>"], answer: 2},
    {question: "3. Which tag is used to create a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<url>"], answer: 0},
    {question: "4. CSS stands for?", options: ["Creative Style Sheets", "Computer Style Syntax", "Cascading Style Sheets", "Colorful Style Sheets"], answer: 2},
    {question: "5. Which property is used to change background color in CSS?", options: ["background-color", "bgcolor", "color", "background"], answer: 0},
    {question: "6. Which symbol is used for comments in CSS?", options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"], answer: 1},
    {question: "7. Inside which HTML element do we put JavaScript code?", options: ["<script>", "<js>", "<javascript>", "<code>"], answer: 0},
    {question: "8. Which keyword is used to declare a variable in JavaScript?", options: ["var", "int", "declare", "let"], answer: 0},
    {question: "9. Which method is used to display output in the browser console?", options: ["print()", "echo()", "console.log()", "alert()"], answer: 2},
    {question: "10. Which event occurs when the user clicks on an HTML element?", options: ["onmouseover", "onchange", "onmouseclick", "onclick"], answer: 3}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const resultEl = document.getElementById("result");

function startQuiz() {
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option");
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsEl.appendChild(btn);
    });
    nextBtn.style.display = "none";
    backBtn.style.display = currentQuestion > 0 ? "inline-block" : "none";
}

function selectAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) {
        score++;
    }
    nextBtn.style.display = "inline-block";
    const buttons = document.querySelectorAll(".option");
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) btn.style.background = "#55efc4";
        else if (i === selected && i !== correct) btn.style.background = "#ff7675";
    });
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
});

backBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});

function showResult() {
    document.getElementById("quiz").style.display = "none";
    resultEl.style.display = "block";
    resultEl.textContent = `🎉 Quiz Completed! You scored ${score} out of ${quizData.length}.`;
}
