const backToTopButton = document.querySelector('.scroll-to-top-button');
const whatsappHref = document.querySelectorAll('.whatsapp-send-message');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.menu-warpper');
const navbar = document.querySelector('.navbar');
const contactMeInside = document.querySelector('.contact-me-inside');
const contactMeOurside = document.querySelector('.contact-me-outside');
const sectionDesentupidora = document.querySelector(".our-services-wrapper");
const sectionSobre = document.querySelector(".about-us-wrapper");
const sectionContatos = document.getElementById("section-contatos");
const servicesMenuItem = document.querySelector('.services-menu-item');
const aboutMenuItem = document.querySelector('.about-menu-item');
const contactMenuItem = document.querySelector('.contact-menu-item');
const header = document.querySelector('.nav-menu');


// trick to remove the url hash
function removeHashFromUrl() {
  history.replaceState({}, document.title, window.location.href.split('#')[0]);
}

function addWhatsAppHref() {
  // console.log('whatsappHref', whatsappHref)
  const messageToSend = 'Olá, vim pelo site https://limadesentupidora.com.br. Preciso de mais informações sobre!';
  whatsappHref[0].href = `https://api.whatsapp.com/send?phone=5513996255448&text=${encodeURI(messageToSend)}`;
  whatsappHref[1].href = `https://api.whatsapp.com/send?phone=5513996255448&text=${encodeURI(messageToSend)}`;
  whatsappHref[2].href = `https://api.whatsapp.com/send?phone=5513996255448&text=${encodeURI(messageToSend)}`;
}

function handleWhatsappClick() {
  whatsappHref[1].click()
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  removeHashFromUrl();
}

function triggerMenuBehavior() {
  navMenu.classList.toggle('hide-menu');
  contactMeInside.classList.toggle('hide-contact-me-inside');
  hamburgerMenu.classList.toggle('hamburger-menu-close');
}

// on button click its returns to the top of page
backToTopButton.addEventListener('click', goToTop);

hamburgerMenu.addEventListener('click', triggerMenuBehavior)

window.addEventListener('resize', () => {
  if (window.innerWidth < 620) {
    contactMeOurside.classList.add('hide-contact-me-outside');
    contactMeInside.classList.remove('hide-contact-me-outside');
  } else {
    contactMeOurside.classList.remove('hide-contact-me-outside');
    contactMeInside.classList.add('hide-contact-me-outside');

  }
})


servicesMenuItem.addEventListener('click', triggerMenuBehavior)
aboutMenuItem.addEventListener('click', triggerMenuBehavior)
contactMenuItem.addEventListener('click', triggerMenuBehavior)


window.onload = () => {
  if (window.innerWidth < 620) {
    contactMeOurside.classList.add('hide-contact-me-outside');
  }
  removeHashFromUrl();
  addWhatsAppHref();
}