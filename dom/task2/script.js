import {CapitalQuiz} from "./CapitalQuizz.js";

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const game = new CapitalQuiz(data);

        document.querySelectorAll('.button').forEach((button, index) => {
            button.addEventListener('click', function(e) {
                game.checkAnswer(this);
                setTimeout(() => {
                    game.newQuestion();
                }, 1000);
            });
        })

        game.newQuestion();
    });
