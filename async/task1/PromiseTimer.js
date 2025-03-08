export class PromiseTimer{

    #timersContainer;
    #activeTimers = 0;
    #maxTimers = 3;

    constructor() {
        this.button = document.getElementById("startButton");
        this.#timersContainer = document.getElementById("timers");
    }

    run(){
        this.#activeTimers++;
        this.#updateButton();

        const duration = Math.floor(Math.random() * 8) + 2;
        this.#startTimer(duration).then(message => {
            const timerDiv = document.createElement("div");
            timerDiv.className = "timer-item";
            timerDiv.textContent = `Done in ${message} seconds!`;
            this.#timersContainer.appendChild(timerDiv);
            this.#activeTimers--;
            this.#updateButton();
        });
    }

    #startTimer(seconds) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(seconds);
            }, seconds * 1000);
        });
    }

    #updateButton() {
        this.button.textContent = `Start timer (${this.#activeTimers}/${this.#maxTimers})`;
        this.button.disabled = this.#activeTimers >= this.#maxTimers;
    }
}