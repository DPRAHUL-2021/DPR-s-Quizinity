
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");
const enterBtn = document.getElementById("enterButton");
const quiz = document.getElementById("quiz");
const details = document.getElementById("details");
let msg = document.querySelector(".msg");
const app = document.querySelector(".app");
    
let currentQuestionIndex = 0;
let score = 0;

const updatename = async ()=>{
    let name = document.querySelector(".nameenter input");
    let nameValue = name.value;
    msg.style.display = "flex";
    msg.classList.add("msg-styling");
    msg.innerText = `Hello! ${nameValue}`;
}

function startQuiz(name,type)
{
    if (selectCategory.value === "Sports") 
    {
        questions = sportsQuestions;
    } 
    else if(selectCategory.value === "Politics")
    {
        questions = politicsQuestions; 
    }
    else if(selectCategory.value === "General Trivia")
    {
        questions = generalQuestions; 
    }
    else if(selectCategory.value === "Movies")
    {
        questions = moviesQuestions; 
    }
    else if(selectCategory.value === "Web Development")
    {
        questions = webdevQuestions; 
    }
    else if(selectCategory.value === "Food")
    {
        questions = foodQuestions;
    }
    else if(selectCategory.value === "Riddles")
    {
        questions = riddleQuestions;
    }
    else
    {
        questionElement.innerHTML = `No! Category Selected`;
    }
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    details.style.transition = "all"
    details.style.display = "none"
    quiz.style.display = "block";
    updatename();
    showQuestion();
}


function showQuestion()
{
    resetQuestion()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    app.style.margintop = "40px";

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetQuestion()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = "true";
    })
    nextButton.style.display = "block";
}

function showScore()
{
    app.style.marginTop = "100px";
    resetQuestion();
    let name = document.querySelector(".nameenter input");
    let nameValue = name.value;
    msg.style.display = "none";

    questionElement.style.textAlign = "center";
    questionElement.style.margin = "20px";
    questionElement.style.padding = "15px";
    questionElement.style.fontSize = "30px";
    questionElement.style.fontWeight = "500";
    questionElement.innerHTML = `${nameValue} - You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
} 

function handleNextQuestion()
{
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextQuestion();
    }
    else{
        questionElement.style.margin = "10px";
        questionElement.style.padding = "5px";
        questionElement.style.fontSize = "25px";
        questionElement.style.fontWeight = "400";
        questionElement.style.textAlign = "left";
        app.style.marginTop = "40px";
        startQuiz();
    }
})


enterBtn.addEventListener("click",()=>{
    const nameInput = document.getElementById("nameHolder").value;
    const selectCategory = document.getElementById("selectCategory").option;
    app.style.marginTop = "40px";
    startQuiz(nameInput,selectCategory);

})
