const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () => {
    // Добавляем класс active кнопке (чтобы сработал крестик)
    menuBtn.classList.toggle('active');
    
    // Добавляем класс active списку (чтобы выехало меню)
    menu.classList.toggle('active'); 
});