// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");
/* 
const videos = [
  {
    title: "Esse aqui  Animado com JS puro e CSS Animation | Mayk Brito",
    duration: "57 min",
    thumb: "img/jpg/D020.jpg",
    video_id: "GykTLqODQuU"
  },
  {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "img/jpg/Gigante1024.jpg",
    video_id: "HN1UjzRSdBk"
  },
  {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "img/jpg/D019.jpg",
    video_id: "rAzHvYnQ8DY"
  }
]; */

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});