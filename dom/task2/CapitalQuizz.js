export class CapitalQuiz{

    constructor(countries) {
        this.countries = countries;
        this.score = 0;
        this.currentTry = 0;
        this.correctAnswer = '';
    }

    newQuestion() {
        if (this.currentTry >= 10) {
            this.#saveRanking(prompt("Game Over! Please enter your name to see the ranking:"));
            this.#showRanking();
            return;
        }
        this.currentTry++;

        const randomCountry = this.#getRandomCountry();
        const answers = this.#getRandomAnswers(randomCountry.city);

        document.getElementById("question").innerHTML = `Q#${this.currentTry}. What is the capital of ${randomCountry.country}?`;
        for (let i = 0; i < 4; i++) {
            const button = document.getElementById(`option${i + 1}`);
            button.textContent = answers[i];
            button.classList.remove("correct", "incorrect");
        }

        this.correctAnswer = randomCountry.city;
    }

    checkAnswer(button){
        const isCorrect = this.correctAnswer === button.textContent;
        button.classList.add(isCorrect ? "correct" : "incorrect");
        if(isCorrect){
            this.score++;
        }
    }

    #saveRanking(userName) {
        let rankings = JSON.parse(localStorage.getItem("ranking")) || [];
        rankings.push({ name: userName, score: this.score });
        rankings.sort((a, b) => b.score - a.score);
        localStorage.setItem("ranking", JSON.stringify(rankings));
    }

    #showRanking() {
        const rankings = JSON.parse(localStorage.getItem("ranking")) || [];
        let rankingHtml = "<h2>Ranking</h2><ol>";
        rankings.forEach(entry => {
            rankingHtml += `<li>${entry.name}: ${entry.score} points</li>`;
        });
        rankingHtml += "</ol>";
        document.getElementById("game").innerHTML = rankingHtml;
    }

    #getRandomAnswers(correctAnswer) {
        const answers = [correctAnswer];

        while (answers.length < 4) {
            const wrongAnswer = this.#getRandomCountry().city;
            if (!answers.includes(wrongAnswer)) {
                answers.push(wrongAnswer);
            }
        }

        return answers.sort(() => Math.random() - 0.5);
    }

    #getRandomCountry(){
        return this.countries[Math.floor(Math.random() * this.countries.length)];
    }
}