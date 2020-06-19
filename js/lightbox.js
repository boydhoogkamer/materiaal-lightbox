const allContent = document.querySelectorAll('.card-content');
const allCards = document.querySelectorAll('.card');

let cardContent = [];

for(let i=0; i< allContent.length; i++) {
    cardContent.push(allContent[i]);
    allContent[i].remove();
}