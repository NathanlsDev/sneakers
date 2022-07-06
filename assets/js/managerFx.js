const open = document.querySelector('#openSandwich');
const close = document.querySelector('#closeSandwich');

open.addEventListener('click', () => {classAndEffectsManager();});
close.addEventListener('click', () => {classAndEffectsManager();});

function classAndEffectsManager (){
  const navBar = document.querySelector('.header__nav');
  navBar.classList.toggle('hidden');
  open.classList.toggle('vanish');

  const gallery = document.querySelector('#glry');
  gallery.classList.toggle('index')
};