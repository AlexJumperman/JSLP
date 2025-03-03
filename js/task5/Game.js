export class Game{
    #choiceCount = 7;
    #currentTurn = 1;
    #currentChoice;

    constructor() {
        this.#currentChoice = Math.floor(Math.random() * 100) + 1;
    }

    start(){
        while(this.#takeShotAndContinue(prompt('Take a shot'))){}
    }

    #takeShotAndContinue(number){
        number = parseInt(number);

        if(isNaN(number)){
            alert(`Input must be number! You have ${this.#choiceCount - this.#currentTurn} tries left.`);
            return true;
        }

        if(number === this.#currentChoice){
            alert(`You won in ${this.#currentTurn} tries!`)
            return false;
        }

        if(this.#currentTurn === this.#choiceCount){
            alert(`You lost! The magic number was ${this.#currentChoice}`);
            return false;
        }

        alert(`The magic number is ${number > this.#currentChoice ? 'lesser' : 'greater'} than ${number}! You have ${this.#choiceCount - this.#currentTurn} tries left.`)
        this.#currentTurn++;
        return true;
    }
}