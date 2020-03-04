'use strict';
/*
3. a. Сделайте модальное (появляющееся и исчезающее) окно
 */

const btn = document.querySelector('.myBtn');
const modalWindow = document.querySelector('.modal-content');
const span = document.querySelector('.span-x');

span.addEventListener('click', function () {
    modalWindow.classList.add('close-modal')
});

btn.addEventListener('click', function () {
    modalWindow.classList.remove('close-modal')
});