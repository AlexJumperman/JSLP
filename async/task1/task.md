- Create a new HTML page with the following body:
``` 
<button type="button">Start timer (0/3)</button>
<div id="timers"></div>
```
- Write a JavaScript function `startTimer` that takes the number of seconds as a parameter and:
  - Returns a Promise that resolves itself after the specified value.
  - The promise resolves with a string similar to `Done in 6 seconds!`.
- Create the JavaScript code for the following requirements:
  - Every time the button is pressed, a new timer must be started using the function defined above, with a random duration between `2` and `9` seconds (it must be an integer value, including `2` and `9`).
  - The label of the button must reflect at all times the number of timers currently running:
  `Start Timer (0/3)`, or `Start Timer (1/3)`, etc.
  - If `3` timers are running, the button must become disabled until at least one timer stops.
  - When there are less than 3 timers running, the button must be enabled.
  - When a timer finishes:
    - Add a new `div` to the `#timers` element, displaying the text returned by the Promise
    e.g. `Done in 6 seconds!`
    - Update the button to reflect the number of timers still running.
- Use your creativity to add nice styling to the application.