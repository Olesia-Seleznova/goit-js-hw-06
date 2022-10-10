function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const div = document.querySelector("#controls");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[ata-destroy]');
const numberRef = document.querySelector("#number");

let value = 0;
let colection = [];

numberRef.addEventListener("number", (event) => {

})    

function createBoxes(amount) {

}


// Користувач вводить кількість елементів в input і 
// натискає кнопку Створити, після чого рендериться
// колекція.Натисненням на кнопку Очистити, колекція 
// елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр 
// - число.Функція створює стільки < div >, скільки вказано в amount 
// і додає їх у div#boxes.
// кількість <div> = кількість amount і пушить їх у div#boxes
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
