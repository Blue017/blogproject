const postSlider = document.querySelector('.post-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;
const cardSize = postSlider.offsetWidth / 4; // Ajusta el número según el ancho de las tarjetas

nextBtn.addEventListener('click', () => {
  postSlider.scrollTo({
    left: (scrollAmount += cardSize),
    behavior: 'smooth',
  });
});

prevBtn.addEventListener('click', () => {
  postSlider.scrollTo({
    left: (scrollAmount -= cardSize),
    behavior: 'smooth',
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Obtener la referencia al contenedor de las tarjetas
  var postSlider = document.querySelector(".post-slider");

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
      title: "Título de la Publicación 2",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 2",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 2",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 2",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 2",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 2",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 2",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    {
      title: "Título de la Publicación 2",
      date: "2023-06-04",
      image: "imagen-publicacion-2.jpg"
    },
    // Agregar más objetos de post según sea necesario
  ];

  // Recorrer los posts y crear las tarjetas dinámicamente
  posts.forEach(function(post) {
    var postCard = document.createElement("div");
    postCard.className = "post-card";

    var postLink = document.createElement("a");
    postLink.href = "detalle-publicacion.html"; // Reemplaza con la ruta correcta de detalle de la publicación

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

    postSlider.appendChild(postCard);
  });
});