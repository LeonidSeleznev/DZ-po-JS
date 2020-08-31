'use strict';

const modal = document.querySelector('.wrap');
const close = document.querySelector('span');
const open = document.querySelector('button');

close.addEventListener('click', function(){
    modal.classList.add('hide');
});

open.addEventListener('click', function(){
    modal.classList.remove('hide');
});