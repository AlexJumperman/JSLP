export class Countdown {
    constructor(hours, minutes, seconds, container) {
        this.totalSeconds = hours * 3600 + minutes * 60 + seconds;
        this.container = container;
        this.interval = null;
        this.createCountdownElement();
    }

    createCountdownElement() {
        this.element = document.createElement("li");

        this.timeDisplay = document.createElement("span");
        this.updateDisplay();

        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.onclick = () => this.cancel();

        this.element.appendChild(this.timeDisplay);
        this.element.appendChild(cancelButton);
        this.container.appendChild(this.element);

        this.start();
    }

    updateDisplay() {
        const hours = Math.floor(this.totalSeconds / 3600);
        const minutes = Math.floor((this.totalSeconds % 3600) / 60);
        const seconds = this.totalSeconds % 60;
        this.timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    start() {
        this.interval = setInterval(() => {
            if (this.totalSeconds > 0) {
                this.totalSeconds--;
                this.updateDisplay();
            } else {
                this.cancel();
            }
        }, 1000);
    }

    cancel() {
        clearInterval(this.interval);
        this.element.remove();
    }
}