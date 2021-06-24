// DOM Document Onject Model
/*Abre  e fecha o menu quando clicar no icone: hamburguer e x*/
const nav = document.querySelector('#header nav') //procura o seletor
const toggle = document.querySelectorAll("nav .toggle")

for(const element of toggle){
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/*Quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da página quando der o scroll 
function changeHeaderWhenScroll() {
  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight

  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  }
  else {
   header.classList.remove('scroll')
  }
}


/*Testimonials-Swiper*/
const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard:true,
});

/*ScrollReveal: mostrar elementos quando der rolagem na página*/
const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700,
  reset:true
})

scrollReveal.reveal(
`#home .image, #home .text, 
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials,
#contact .title, #contact .links,
footer .brand, footer .social`,

{interval: 100})

/*Botão voltar para o topo*/
function backTotop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY>=560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backTotop()
})