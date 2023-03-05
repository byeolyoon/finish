const images = ["https://github.com/byeolyoon/finish/blob/main/01.jpg?raw=true","02.jpg","03.jpg"]

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);
