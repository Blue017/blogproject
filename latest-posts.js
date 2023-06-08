const postSlider = document.querySelector('.post-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;
let cardSize;

const totalScrollableWidth = () => postSlider.scrollWidth - postSlider.clientWidth;

nextBtn.addEventListener('click', () => {
  if (scrollAmount < totalScrollableWidth()) {
    scrollAmount += cardSize;
  } else {
    scrollAmount = 0;
  }
  postSlider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth',
  });
  updateActiveDots(Math.floor(scrollAmount / cardSize) + 1); // Llamamos a la función para actualizar las bolitas resaltadas
});

prevBtn.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= cardSize;
  } else {
    scrollAmount = totalScrollableWidth();
  }
  postSlider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth',
  });
  updateActiveDots(); // Llamamos a la función para actualizar las bolitas resaltadas
});

function updateActiveDots() {
  var dots = document.querySelectorAll('.dot');
  var activeIndex = Math.floor(scrollAmount / cardSize);
  dots.forEach(function(dot, index) {
    if (index >= activeIndex && index < activeIndex + 4) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var postSliderContainer = document.querySelector(".post-slider");
  var dotsContainer = document.querySelector(".dots-container");

  // Simulación de una fuente de datos de posts
  var posts = [
    {
      title: "Título de la Publicación 1",
      date: "2023-06-05",
      image: "imagen-publicacion-1.jpg"
    },
    {
      title: "Título de la Publicación 2",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 3",
      date: "2023-06-04",
      image: "imagen-publicacion-3.jpg"
    },
    {
      title: "Título de la Publicación 4",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 5",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 6",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 7",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 8",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 9",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 10",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    // Agregar más objetos de post según sea necesario
  ];

  // Recorrer los posts y crear las tarjetas dinámicamente

  posts.forEach(function(post, index) {
    var postCard = document.createElement("div");
    postCard.className = "post-card";

    var postLink = document.createElement("a");
    postLink.href = "detalle-publicacion.html";

    var postImage = document.createElement("img");
    postImage.src = post.image;
    postImage.alt = "Imagen de la publicación";

    var postTitle = document.createElement("h3");
    postTitle.textContent = post.title;

    var postDate = document.createElement("p");
    postDate.textContent = "Fecha: " + post.date;

    postLink.appendChild(postImage);
    postLink.appendChild(postTitle);
    postLink.appendChild(postDate);

    postCard.appendChild(postLink);

    postSliderContainer.appendChild(postCard);

    cardSize = postCard.offsetWidth;

    var dot = document.createElement("div");
    dot.classList.add("dot");
    if (index < 4) {
      dot.classList.add("active-dot");
    }
    dotsContainer.appendChild(dot);
  });
});