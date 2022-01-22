const bg = document.querySelector("body");

let bg_img = [];

const RandomImg = () => {
  fetch(`https://source.unsplash.com/featured/?landscape-hd/1920x1080`).then(
    (response) => {
      document.body.style.backgroundImage = `url(${response.url})`;
      document.body.style.backgroundSize = "cover";
    }
  );
};

window.addEventListener("load", RandomImg);
