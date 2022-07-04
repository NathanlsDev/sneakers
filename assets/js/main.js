const sandwich = document.querySelector('#sandwich');
sandwich.addEventListener('click', () => {
  const ul = document.querySelector('.header__ul');
  ul.classList.toggle('toggle');

  const hidden = document.querySelector('#icon2');
  hidden.classList.toggle('hidden');

  const show = document.querySelector('#icon1');
  show.classList.toggle('hidden');

  filter();
});

function filter(){
  const nav = document.querySelector('.header__nav');
  nav.classList.toggle('luminous')
}