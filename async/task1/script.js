import {PromiseTimer} from "./PromiseTimer.js";

const pt = new PromiseTimer();

pt.button.addEventListener("click", () => {
    pt.run()
});

