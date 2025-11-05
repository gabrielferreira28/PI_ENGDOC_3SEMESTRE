const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Exibir Menu Mobile
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

// Adiciona o evento de clique ao menu mobile
menu.addEventListener('click', mobileMenu);

// Função para destacar o menu ativo ao rolar a página
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const projectMenu = document.querySelector('#project-page');
  const telasMenu = document.querySelector('#Telas--Software')
  let scrollPos = window.scrollY;

  // Adiciona a classe 'highlight' ao item do menu correspondente
if (window.innerWidth > 960) {
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    projectMenu.classList.remove('highlight');
    telasMenu.classList.remove('highlight');

    if (scrollPos < 600) {
        homeMenu.classList.add('highlight');
    } else if (scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
    } else if (scrollPos < 2000) { // Ajuste a altura para o projeto
        projectMenu.classList.add('highlight');
    } else {
        telasMenu.classList.add('highlight'); // Adiciona para as telas
    }
}


  // Remove a classe 'highlight' em telas menores
  if (elem && window.innerWidth < 960) {
    elem.classList.remove('highlight');
  }
};

// Adiciona o evento de rolagem à janela
window.addEventListener('scroll', highlightMenu);


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Fechar o menu mobile ao clicar em um item do menu
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


document.addEventListener("DOMContentLoaded", function() {
  // Função para rolar suavemente até uma seção
  const smoothScrollToSection = (event, sectionId) => {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionTop - navHeight;

      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
  };

  // Rolar suavemente até a seção "Desenvolvimento"
  document.getElementById("project-page").addEventListener("click", (event) => {
      smoothScrollToSection(event, "desenvolvimento");
  });

  // Rolar suavemente até a seção "Sobre"
  document.getElementById("saiba-mais-btn").addEventListener("click", (event) => {
      smoothScrollToSection(event, "Telas-software");
  });
});
 


  
  