const backToTopButton = document.querySelector('.scroll-to-top-button');
const whatsappHref = document.querySelectorAll('.whatsapp-send-message');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.menu-warpper');
const navbar = document.querySelector('.navbar');
const contactMeInside = document.querySelector('.contact-me-inside');
const contactMeOurside = document.querySelector('.contact-me-outside');

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

// on button click its returns to the top of page
backToTopButton.addEventListener('click', goToTop);

hamburgerMenu.addEventListener('click', () => {
  console.log('clicou');
  navMenu.classList.toggle('hide-menu');
  contactMeInside.classList.toggle('hide-contact-me-inside');
  hamburgerMenu.classList.toggle('hamburger-menu-close');
})

window.addEventListener('resize', () => {
  if (window.innerWidth < 620) {
    contactMeOurside.classList.add('hide-contact-me-outside');
    contactMeInside.classList.remove('hide-contact-me-outside');
  } else {
    contactMeOurside.classList.remove('hide-contact-me-outside');
    contactMeInside.classList.add('hide-contact-me-outside');

  }
})

window.onload = () => {
  if (window.innerWidth < 620) {
    contactMeOurside.classList.add('hide-contact-me-outside');
  }
  removeHashFromUrl();
  addWhatsAppHref();
}