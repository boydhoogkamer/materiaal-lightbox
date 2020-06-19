const allContent = document.querySelectorAll('.card-content');
const allCards = document.querySelectorAll('.card');

let cardContent = [];

for(let i=0; i < allContent.length; i++) {
    cardContent.push(allContent[i]);
    allContent[i].remove();
}

function exitModal() {
    document.getElementById('modal').remove();
}

function CreateModal(num) {
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modal';
    modal.addEventListener('click', exitModal)

    let modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = cardContent[num].innerHTML;
    modalContainer.addEventListener('click', function(e){
        e.stopPropagation();
    })
    modal.append(modalContainer);
    document.body.append(modal);
}

for(let i=0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', function(){
        CreateModal(i)
    })
}