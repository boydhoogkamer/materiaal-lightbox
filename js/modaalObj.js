const modaalObj = {
    allContent: document.querySelectorAll('.card-content'),
    allCards: document.querySelectorAll('.card'),
    cardContent: [],

    exitModal: function() {
        document.getElementById('modal').remove();
    },
    CreateModal: function(num) {
        let modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'modal';
        modal.addEventListener('click', this.exitModal)
    
    
        let close = document.createElement('i');
        close.className = 'fa fa-close';
        close.style.fontSize = '1.7em';
        close.addEventListener('click', this.exitModal)
        let modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        modalContainer.innerHTML = this.cardContent[num].innerHTML;
        modalContainer.addEventListener('click', function(e){
            e.stopPropagation();
        })
        modalContainer.prepend(close);
        modal.append(modalContainer);
        document.body.append(modal);
    },

    init: function() {
        for(let i=0; i < this.allContent.length; i++) {
            this.cardContent.push(this.allContent[i]);
            this.allContent[i].remove();
        }
        for(let i=0; i < this.allCards.length; i++) {
            this.allCards[i].addEventListener('click', function(){
            modaalObj.CreateModal(i)
            })
        }
    }
}


