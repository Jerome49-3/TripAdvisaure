const toogle = () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("toogle");
};
export default toogle;

ocument.addEventListener("DOMContentLoaded", () => {
  document.getElementById("boxHambuger").addEventListener("click", toogle);
});
