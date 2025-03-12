const logo = document.querySelector('.header__logo');
const logoName = document.querySelector('.logo__name');

logo.addEventListener('mouseenter', () => {
    logoName.classList.remove('rotated');
    logoName.classList.add('rotating'); // Запускаем вращение

    // Убираем класс rotating после завершения анимации
    setTimeout(() => {
        logoName.classList.remove('rotating');
    }, 800); // 500 миллисекунд = 0.8 секунды (длительность анимации)
});

logo.addEventListener('mouseleave', () => {
    logoName.classList.add('rotated'); // Устанавливаем конечное состояние
    logoName.classList.remove('rotating'); // Убедимся, что убрали вращение
});

const likeButtons = document.querySelectorAll('.card__like'); // Находим ВСЕ кнопки лайка

likeButtons.forEach(button => {  // Перебираем каждую кнопку
    button.addEventListener('click', function(event) {
        event.preventDefault();

        const liked = this.dataset.liked === 'true';

        if (liked) {
            this.dataset.liked = 'false';
        } else {
            this.dataset.liked = 'true';
        }
    });
});
document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
})