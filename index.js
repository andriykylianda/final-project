const gameData = [
{
reguest: "Перша згадка про найдавніших людей на території сучасної України датується?",
a: "2 млн років тому",
b: "1 млн років тому",
c: "900 тис років тому ",
correct: "b",
},
{
reguest: "Дата смерті Данила Галицького?",
a: "1234p",
b: "1254p",
c: "1264p",
correct: "c"
},

{
reguest: " У якому році перша згадка про українських козаків у писемних джерелах?",
a: "1340p",
b: "1453p",
c: "1489p",
correct: "c",
},
{
reguest: " Дата створення Загальної Української Ради (ЗУР)?",
a: "1890p",
b: "1914p",
c: "1917p",
correct: "b",
},
{

reguest: " Дата прийняття Верховною Радою УРСР Акта проголошення незалежності України?",
a: "1990p",
b: "1991p",
c: "1992p",
correct: "b"
}
];
const game = document.getElementById("game");
const answerEls = document.querySelectorAll(".answer");
const reguestEl = document.getElementById("reguest");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const button = document.getElementById("answerbutton")

let currentGame = 0;
let score = 0;

 const deselectAnswer = () => {
    answerEls.forEach((answer) => (answer.checked = false)) 
    };
const getSelected = () => {
    let answer;
    answerEls.forEach((answerEls) => {
        if (answerEls.checked) answer =
        answerEls.id

    });
    return answer;
};
const loadGame = () => {
    deselectAnswer();
    const currentGameData = gameData[currentGame];
    reguestEl.innerText = currentGameData.reguest
    a_text.innerText = currentGameData.a
    b_text.innerText = currentGameData.b
    c_text.innerText = currentGameData.c
};

loadGame();
button.addEventListener("click", () => {
    const answer = getSelected();
    if(answer) {
        if (answer === gameData[currentGame].correct)
        score++;
        currentGame++;
        if (currentGame < gameData.length) loadGame();
        else {
            game.innerHTML = `<h2>Ви відповіли правильно ${score}/${gameData.length} запитань</h2>
            <button onclick="history.go(0)">Play Again</button>
            `;

        }

    }
})
 