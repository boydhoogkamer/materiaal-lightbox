const allContent = document.querySelectorAll('.card-content');
const allCards = document.querySelectorAll('.card');

let cardContent = [];

for(let i=0; i < allContent.length; i++) {
    cardContent.push(allContent[i]);
    allContent[i].remove();
}

function CreateModal(num) {
    let modal = document.createElement('div');
    modal.className = 'modal';


    let modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = cardContent[num].innerHTML;
    modal.append(modalContainer);
    document.body.append(modal);
}

for(let i=0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', function(){
        CreateModal(i)
    })
}