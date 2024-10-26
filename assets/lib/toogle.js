const hamburgerButton = document.querySelector(".menu");
const navigation = document.querySelector("nav");
hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}
