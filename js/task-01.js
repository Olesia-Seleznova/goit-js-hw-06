const categoriesRef = document.querySelector('#categories');

const itemsRef = categoriesRef.querySelectorAll('.item');

const titleRef = document.querySelectorAll('h2');
console.log(`Number of categories: ${titleRef.length}`);

itemsRef.forEach(item => {
    const itemCategoty = item.firstElementChild;
    const elementsInCategory = itemCategoty.nextElementSibling; 
    console.log(`Category: ${itemCategoty.textContent}`);
    console.log(`Elements: ${elementsInCategory.classList.length}`);
    });
