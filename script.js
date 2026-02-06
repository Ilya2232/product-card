const mainTitle = document.querySelector('h1');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent)
})

const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('switch-color');
})