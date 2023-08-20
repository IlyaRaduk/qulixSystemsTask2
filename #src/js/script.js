document.addEventListener('DOMContentLoaded', function () {
    // Бургер меню
    const btnOpenBurgerMenu = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger-menu');
    const body = document.querySelector('body');

    const toggleMenu = function () {
        btnOpenBurgerMenu.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        body.classList.toggle('burger-active');
    }

    btnOpenBurgerMenu.addEventListener('click', toggleMenu);

    //закрытие бургер меню при переходе на ссылку с меню
    const burgerMenuLinks = document.querySelectorAll('.burger-menu .menu a');
    burgerMenuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (body.classList.contains('burger-active')) {
                btnOpenBurgerMenu.classList.remove('active');
                burgerMenu.classList.remove('active');
                body.classList.remove('burger-active')
            }
        });
    });

    //Появление блоков анимация
    function createObserverAndAnimate(blocks, callback) {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    callback(entry.target, index);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        blocks.forEach((block) => {
            observer.observe(block);
        });
    }

    function animateBlock(block, index) {
        setTimeout(() => {
            block.classList.add('active');
        }, index * 300);
    }

    const schemeBlocks = document.querySelectorAll('.scheme__item');
    const insuranceBlocks = document.querySelectorAll('.insurance__item');
    const optionBlocks = document.querySelectorAll('.option__item');

    createObserverAndAnimate(schemeBlocks, animateBlock);
    createObserverAndAnimate(insuranceBlocks, animateBlock);
    createObserverAndAnimate(optionBlocks, animateBlock);
});