const nameImput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameImput.addEventListener("input", (event) => {
    if (nameImput.textContent = !event.currentTarget.value) {
        nameOutput.textContent = "Anonymous";
    } else {nameOutput.textContent = event.currentTarget.value};
});

console.log(nameImput)