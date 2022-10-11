class Modal {
    constructor(item) {
        this.item = item;
    }
    hide() {
        this.item.classList.remove('modal_show');
    }
    show() {
        this.item.classList.add('modal_show');
    }
    static hideAll() {
        document.querySelectorAll('.modal_show').forEach(item => {
            item.classList.remove('modal_show');
        });
    }
}

window.addEventListener('keydown', event => {
    if (event.keyCode === 27) Modal.hideAll();
});

document.querySelectorAll('[data-toggle="modal"]').forEach(item => {
    const modalId = item.dataset.target,
    modalWrap = document.getElementById(modalId),
    modal = new Modal(modalWrap);
    
    item.addEventListener('click', () => modal.show());
    
    modalWrap.addEventListener('click', event => {
        const target = event.target;
        
        if (target.closest('.modal__close') || !target.closest('.modal__dialog'))
            modal.hide();
    });
});