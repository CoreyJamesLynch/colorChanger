let title = document.querySelector('#title');
let colorChanger = document.querySelector('#colorChanger');
let body = document.querySelector('body');

colorChanger.addEventListener('click', () => {
  let color = colorRandomize();
  title.innerHTML = `${color}`;
  body.style = `background-color: ${color}`;
});

const colorRandomize = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`
}
