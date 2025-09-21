

let images = ["image/IMG_9438.jpg", "image/email.png", "image/git.png", "image/insta.PNG", "image/linkedinlogo.PNG"];
let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  document.getElementById("currentImage").src = images[currentIndex];
}

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

function changeImage(img) {
  document.getElementById("currentImage").src = img;
  currentIndex = images.indexOf(img);
}
