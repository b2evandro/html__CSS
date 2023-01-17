


// Make Cards

const jpgs = [
  {
    jpg_id: "img/jpg/D011.jpg",
    thumb: "img/jpg/D011.jpg"
  },
  {
    jpg_id: "img/jpg/D020.jpg",
    thumb: "img/jpg/D020.jpg"
  },
  {
    jpg_id: "img/jpg/Gigante1024.jpg",
    thumb: "img/jpg/Gigante1024.jpg"
  },
  {
    jpg_id: "img/jpg/D019.jpg",
    thumb: "img/jpg/D019.jpg"
  },
  {
    jpg_id: "img/jpg/foto4.jpg",
    thumb: "img/jpg/foto4.jpg"
  },
  {
    jpg_id: "img/jpg/NewZeland_1024.jpg",
    thumb: "img/jpg/NewZeland_1024.jpg"
  }
];
const gifs = [
  {
    gif_id: "img/gif/G001.gif",
    thumb: "img/gif/G001.gif"
  },
  {
    gif_id: "img/gif/G198.gif",
    thumb: "img/gif/G198.gif"
  },
  {
    gif_id: "img/gif/G012.gif",
    thumb: "img/gif/G012.gif"
  },
  {
    gif_id: "img/gif/G008.gif",
    thumb: "img/gif/G008.gif"
  },
  {
    gif_id: "img/gif/G032.gif",
    thumb: "img/gif/G032.gif"
  },
  {
    gif_id: "img/gif/G002.gif",
    thumb: "img/gif/G002.gif"
  }


];

const section_jpg = document.querySelector("section.jpg");
const jpg_card_default = document.querySelector("div.card_jpg");
jpgs.map(jpg => {
  const clone_jpg = jpg_card_default.cloneNode(true);
  clone_jpg.querySelector("img").src = jpg.thumb;
  clone_jpg.querySelector("img").setAttribute("id", jpg.jpg_id);
  section_jpg.appendChild(clone_jpg);
});
jpg_card_default.remove();

const section_gif = document.querySelector("section.gif");
const gif_card_default = document.querySelector("div.card_gif");
gifs.map(gif => {
  const clone_gif = gif_card_default.cloneNode(true);
  clone_gif.querySelector("img").src = gif.thumb;
  clone_gif.querySelector("img").setAttribute("id", gif.gif_id);
  section_gif.appendChild(clone_gif);
});
gif_card_default.remove()


// Modal actions

const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");

const imagens = [...document.querySelectorAll(".card_jpg img, .card_gif img")];

imagens.forEach(imagem => {
  imagem.addEventListener("click", () => {
    modal.querySelector(
      ".img-modal"
    ).src = `${imagem.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

function closemodal() {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector(".img-modal").src = ``;
  document.querySelector("body").style.overflow = "initial";
}

document.querySelector(".close-modal").addEventListener("click", () => {
  closemodal();
});

document.querySelector("#back_to_top").addEventListener("click", () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
});
document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    closemodal();
  }
};

// MENU RESPONSIVO