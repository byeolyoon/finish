const images = ["./moment/01.jpg","./moment/02.jpg","./moment/03.jpg"]

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./moment/${choseImage}`;

document.body.appendChild(bgImage);
