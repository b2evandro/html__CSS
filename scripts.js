// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const jpgs = [
  {
    jpg_id: "D011.jpg",
    thumb: "img/jpg/D011.jpg"
  },
  {
    jpg_id: "D020.jpg",
    thumb: "img/jpg/D020.jpg"
  },
  {
    jpg_id: "Gigante1024.jpg",
    thumb: "img/jpg/Gigante1024.jpg"
  },
  {
    jpg_id:"D019.jpg",
    thumb: "img/jpg/D019.jpg"
  },
  {
    jpg_id:"foto4.jpg",
    thumb: "img/jpg/foto4.jpg"
  },
  {
    jpg_id:"NewZeland_1024.jpg",
    thumb: "img/jpg/NewZeland_1024.jpg"
  }
];


jpgs.map(jpg => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = jpg.thumb;
  cardClone.setAttribute("id", jpg.jpg_id);
  sectionCards.appendChild(cardClone);
});

  

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      ".Im1"
    ).src = `img/jpg/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector(".Im1").src = ``;
  document.querySelector("body").style.overflow = "initial";
});




// MENU RESPONSIVO