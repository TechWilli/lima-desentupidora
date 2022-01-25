const backToTopButton = document.querySelector('.scroll-to-top-button');

// trick to remove the url hash
function removeHashFromUrl() {
  history.replaceState({}, document.title, window.location.href.split('#')[0]);
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
}