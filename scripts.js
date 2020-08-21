// Make Cards
const sectionCards_jpg = document.querySelector("section.cards_jpg ");
const card_jpg = document.querySelector("div.card_jpg");
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

jpgs.map(jpg => {
  const card_jpgClone = card_jpg.cloneNode(true);
  card_jpgClone.querySelector("img").src = jpg.thumb;
  card_jpgClone.setAttribute("id", jpg.jpg_id);
  sectionCards_jpg.appendChild(card_jpgClone);
});
card_jpg.remove();
// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards_jpg = [...document.querySelectorAll(".cards_jpg .card_jpg")];

cards_jpg.forEach(card_jpg => {
  card_jpg.addEventListener("click", () => {
    modal.querySelector(
      ".Im1"
    ).src = `${card_jpg.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

function closemodal() {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector(".Im1").src = ``;
  document.querySelector("body").style.overflow = "initial";
}

document.querySelector(".close-modal").addEventListener("click", () => {
  closemodal();
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

const sectionCards_gif = document.querySelector("section.cards_gif");
const card_gif = document.querySelector("div.card_gif");
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
  }
];

gifs.map(gif => {
  const card_gifClone = card_gif.cloneNode(true);
  card_gifClone.querySelector("img").src = gif.thumb;
  card_gifClone.setAttribute("id", gif.gif_id);
  sectionCards_gif.appendChild(card_gifClone);
});
card_gif.remove()

// Modal actions
const cards_gif = [...document.querySelectorAll(".cards_gif .card_gif")];

cards_gif.map(card_gif => {
  card_gif.addEventListener("click", () => {
    modal.querySelector(
      ".Im1"
    ).src = `${card_gif.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

function closemodal() {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector(".Im1").src = ``;
  document.querySelector("body").style.overflow = "initial";
}
// MENU RESPONSIVO