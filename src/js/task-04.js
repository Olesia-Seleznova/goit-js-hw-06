const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", (event) => {
    counterValue = counterValue - 1;
    const valueRef = document.querySelector("span");
    valueRef.textContent = counterValue;
    
})

incrementBtn.addEventListener("click", (event) => {
    counterValue += 1;
    const valueRef = document.querySelector("span");
    valueRef.textContent = counterValue;
    
})

console.log(counterValue);
