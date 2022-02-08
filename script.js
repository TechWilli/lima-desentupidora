const backToTopButton = document.querySelector('.scroll-to-top-button');
const whatsappHref = document.querySelector('#whatsapp-send-message');

// trick to remove the url hash
function removeHashFromUrl() {
  history.replaceState({}, document.title, window.location.href.split('#')[0]);
}

function addWhatsAppHref() {
  console.log('whatsappHref', whatsappHref)
  const messageToSend = 'Olá, vim pelo site https://limadesentupidora.com.br. Preciso de mais informações sobre!';
  whatsappHref.href = `https://api.whatsapp.com/send?phone=5513996255448&text=${encodeURI(messageToSend)}`;
}


// on button click its returns to the top of page
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  removeHashFromUrl();
});

window.onload = () => {
  removeHashFromUrl();
  addWhatsAppHref();
}