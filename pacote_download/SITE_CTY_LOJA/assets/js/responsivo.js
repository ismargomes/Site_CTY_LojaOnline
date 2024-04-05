//Adicione um script JavaScript para controlar a exibição do menu em dispositivos móveis:
// const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
// const menu = document.querySelector('ul');

// mobileMenuIcon.addEventListener('click', function() {
//   menu.classList.toggle('active');
// });

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');

  if(menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  }else {
    menuMobile.classList.add('open');
  }

}
