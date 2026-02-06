const mainTitle = document.querySelector('h1');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent)
})

const colorToggleButton = document.querySelector('.toggle-button');

colorToggleButton.addEventListener('click', () => {
  colorToggleButton.classList.toggle('switch-color');
})