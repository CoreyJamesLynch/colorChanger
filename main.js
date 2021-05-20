let title = document.querySelector('#title');
let colorChanger = document.querySelector('#colorChanger');
let body = document.querySelector('body');

colorChanger.addEventListener('click', () => {
  let colors = colorControl(colorRandomize());
  title.innerHTML = `${colors[1]}`;
  title.style = `color: ${colors[0]}`;
  body.style = `background-color: ${colors[1]}`;
});

const colorRandomize = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = [r, g, b];
  return rgb;
};

const colorControl = (rgbArr) => {
  let r1 = rgbArr[0];
  let g1 = rgbArr[1];
  let b1 = rgbArr[2];
  let r2 = Math.abs(r1 - 255);
  let g2 = Math.abs(g1 - 255);
  let b2 = Math.abs(b1 - 255);
  let backgroundColor = `rgb(${r1}, ${g1}, ${b1})`;
  let textColor = `rgb(${r2}, ${g2}, ${b2})`;
  return [backgroundColor, textColor];
};
