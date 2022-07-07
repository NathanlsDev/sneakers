const inner = document.querySelector('#inner');
const outer = document.querySelector('#outer');
const quantity = document.querySelector('#quantity');
const cart = document.querySelector('.cart__counter');

let product = 0;

inner.addEventListener('click', () =>{
  product += 1;
  quantity.innerHTML = product;
  cart.innerHTML = product;
});

outer.addEventListener('click', () =>{
  product -= 1;
  quantity.innerHTML = product;
  cart.innerHTML = product;  
});



