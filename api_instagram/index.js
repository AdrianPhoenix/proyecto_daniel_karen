const container = document.querySelector(".container");

const data = [
  {
    urlImgProfile: "./assets/profile.jpg",
    user: "turismo_dk",
    location: "Caracas",
    urlImg: "./assets/1.jpg",
    likes: "0 Me gusta",
    description: "Descripción de la publicación...",
    comments: "Ver todos los comentarios",
    urlPost: "https://www.instagram.com/p/DJTKx0SgKae/?img_index=1",
  },
  {
    urlImgProfile: "./assets/profile.jpg",
    user: "turismo_dk",
    location: "Caracas",
    urlImg: "./assets/2.jpg",
    likes: "1,234 Me gusta",
    description: "Descripción de la publicación...",
    comments: "Ver todos los comentarios",
    urlPost: "https://www.instagram.com",
  },
  {
    urlImgProfile: "./assets/profile.jpg",
    user: "turismo_dk",
    location: "Caracas",
    urlImg: "./assets/3.jpg",
    likes: "1,234 Me gusta",
    description: "Descripción de la publicación...",
    comments: "Ver todos los comentarios",
    urlPost: "https://www.instagram.com",
  },
  {
    urlImgProfile: "./assets/profile.jpg",
    user: "turismo_dk",
    location: "Caracas",
    urlImg: "./assets/4.jpg",
    likes: "1,234 Me gusta",
    description: "Descripción de la publicación...",
    comments: "Ver todos los comentarios",
    urlPost: "https://www.instagram.com",
  },
  {
    urlImgProfile: "./assets/profile.jpg",
    user: "turismo_dk",
    location: "Caracas",
    urlImg: "./assets/5.jpg",
    likes: "1,234 Me gusta",
    description: "Descripción de la publicación...",
    comments: "Ver todos los comentarios",
    urlPost: "https://www.instagram.com",
  },
  {
    urlImgProfile: "./assets/profile.jpg",
    user: "turismo_dk",
    location: "Caracas",
    urlImg: "./assets/6.jpg",
    likes: "1,234 Me gusta",
    description: "Descripción de la publicación...",
    comments: "Ver todos los comentarios",
    urlPost: "https://www.instagram.com",
  },
];

const createCard = (card) => {
  return `
    <div class="card">
      <!-- Header -->
      <div class="card-header">
        <img src="${card.urlImgProfile}" alt="Profile Picture" class="profile-pic" />
        <div class="user-info">
          <h3>${card.user}</h3>
          <p>${card.location}</p>
        </div>
      </div>

      <!-- Image -->
      <div class="card-image">
        <a href="${card.urlPost}" target="_blank">
          <img src="${card.urlImg}" alt="Post Image" />
        </a>
      </div>

      <!-- Footer -->
      <div class="card-footer">
        <div class="actions">
          <button class="like-btn">❤️</button>
          <button class="comment-btn">💬</button>
          <button class="share-btn">📤</button>
        </div>
        <p class="likes">${card.likes}</p>
        <p class="description">
          <strong>${card.user}</strong> ${card.description}
        </p>
        <p class="comments">${card.comments}</p>
      </div>
    </div>
  `;
};

// Generar las cards dinámicamente
data.forEach((card) => {
  container.insertAdjacentHTML("beforeend", createCard(card));
});