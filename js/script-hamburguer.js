document.querySelector('.button').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('isOpen');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
    });
    
    // eventos para fechar o menu, ele basicamente faz o inverso do script anterior
    //quando vc clicar no elemento .fechaMenu
    
    document.querySelector('.fechaMenu').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('isOpen');
    document.querySelector('.fechaMenu').classList.toggle('isClose');
    });