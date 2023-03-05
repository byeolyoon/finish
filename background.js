const images = ["01.jpg","02.jpg","03.jpg"]

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `.${choseImage}`;

document.body.appendChild(bgImage);
