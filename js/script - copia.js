//BLOQUEO DESCARGA DE IMAGENES Y VISUALIZACION DE CODIGO FUENTE
// Bloquear teclas como F12, Ctrl+U, Ctrl+Shift+I

// document.addEventListener("keydown", function (event) {
//     Bloquea F12, Ctrl+U, Ctrl+Shift+I
//   if (
//     event.key === "F12" ||
//     (event.ctrlKey && event.shiftKey && event.key === "I") ||
//     (event.ctrlKey && event.key === "U")
//   ) {
//     event.preventDefault();
//   }
// });

// codigo de arriba validar si al descomentar se ejecutan los script de proteccion o bloquea algunos movimientos





// Bloquear clic derecho

document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Bloquea clic derecho
});




// Bloquear teclas como F12, Ctrl+U, Ctrl+Shift+I  Ctrl+Shift+J =metodo 03
// en caso de que ctrl+U no bloquee, pegar sig codigo, para redireccionar a otro sitio

document.onkeydown = function (event) {
  if (event.ctrlKey && event.key === "u") {
    window.location.href = "https://www.google.com"; // Redirige a otro sitio
    return false;
  }
};


// Bloquear el acceso al mapa si detectan herramientas de desarrollador
// cerrar la página si alguien abre las herramientas de inspección:

setInterval(function () {
  if (
    window.outerHeight - window.innerHeight > 100 ||
    window.outerWidth - window.innerWidth > 100
  ) {
    document.body.innerHTML = "";
    alert("Inspeccionar está deshabilitado.");
    window.location.href = "https://www.google.com";
  }
}, 1000);



// ACTIVAR LOS CODIGOS DE ARRIBA PARA EVITAR COPIA DE CODIGO





// Titulo en la barra de direcciones con movimiento
var txt = "Cursos Libros Videos Tutoriales > Aprende sin complicaciones A tu ritmo > rápido y accesible > Tu crecimiento empieza aquí > Fácil de entender > Listo para descargar ";
var espera = 140;
var refresco = null;
function rotulo_title() {
  document.title = txt;
  txt = txt.substring(1, txt.length) + txt.charAt(0);
  refresco = setTimeout("rotulo_title()", espera);
}
rotulo_title();

// menu hamburguesa
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Alternar menú al hacer clic en el botón
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});

// codigo de scroll circular

document.addEventListener("DOMContentLoaded", function () {
  const btnIrArriba = document.getElementById("btn-ir-arriba");

  // Mostrar el botón cuando el usuario se desplaza hacia abajo
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btnIrArriba.style.display = "flex";
    } else {
      btnIrArriba.style.display = "none";
    }
  });

  // Acción para ir arriba
  btnIrArriba.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// codigo complemento de scroll circular -puede ir aqui o directo el html hasta el final

function $(query) {
  return document.querySelector(query);
}

function getSource(n) {
  return "conic-gradient(var(--theme) " + n + "%, rgb(210,230,250) " + n + "%)";
}

window.onscroll = (ev) => {
  const scroll = Math.round(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );

  $("#scroll-circular").style.background = getSource(scroll);

  $("#percent").innerHTML = scroll + "%";
};

// Obtener los elementos del modal y el botón
//NOTA: podemos envolver el script en un window.onload o agregar un DOMContentLoaded para asegurar que el DOM esté completamente cargado antes de ejecutar el código.

document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".openModalBtn");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  openButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      modals[index].style.display = "block";
    });
  });

  closeButtons.forEach((close, index) => {
    close.addEventListener("click", function () {
      modals[index].style.display = "none";
    });
  });

  window.addEventListener("click", function (event) {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

// desplazamiento ajustado. se asegura de que la barra de navegación
// no cubra el título de la sección al hacer clic en los enlaces del menú.
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".footer-section h3");
  const isMobile = window.matchMedia("(max-width: 768px)").matches; // Detectar si es móvil

  sections.forEach((section) => {
    const content = section.nextElementSibling;

    // Solo aplicar el colapsado en móviles
    if (isMobile) {
      section.addEventListener("click", function () {
        this.classList.toggle("active");
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      });
    } else {
      content.style.display = "block"; // En PC siempre visible
    }
  });

  // complemento para descolapsar secciones del footer en móviles

  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
      const toggles = document.querySelectorAll(".toggle-section");
      toggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
          const content = this.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      });
    }
  });

  // ✅ Corrección del scroll suave en los enlaces del navbar
  const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - navHeight - 10,
          behavior: "smooth",
        });
      }
    });
  });
});



// 8️⃣ Slider infinito (corregido)

let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");

if (slider && slides.length) {
  let cloneSlides = [];

  slides.forEach((slide) => {
    let clone = slide.cloneNode(true);
    cloneSlides.push(clone);
  });

  cloneSlides.forEach((clone) => {
    slider.appendChild(clone);
  });

  // Ajuste para desplazamiento infinito sin parpadeo
  let slideWidth = slides[0].offsetWidth + 40; // Tamaño + margen
  slider.style.animation = `slideLeft ${slides.length * 3}s linear infinite`;
  slider.style.width = `${slides.length * 2 * slideWidth}px`; // Ajustar el ancho total
}


 // ✅ ONDAS TIPO SONAR PARA EFECTOEN BOTON ENVIAR -SECCION CONTACTO
function createWave(event) {
  const waveContainer = event.target.nextElementSibling;

  // Crear una nueva onda
  const wave = document.createElement("div");
  wave.classList.add("wave");

  // Agregar la onda al contenedor
  waveContainer.appendChild(wave);

  // Eliminar la onda después de la animación
  setTimeout(() => {
      wave.remove();
  }, 1000);
}


// ✅ FILTRO BUSQUEDAS POR CATEGORIA

// este codigo es sin iconos de categoria seleccionadas

// document.getElementById('category').addEventListener('change', function () {
//   const selected = this.value;
//   const cards = document.querySelectorAll('.card');

//   cards.forEach(card => {
//     const category = card.getAttribute('data-category');
//     if (selected === 'all' || category === selected) {
//       card.classList.remove('ocultanofiltro');
//     } else {
//       card.classList.add('ocultanofiltro');
//     }
//   });
// });

// este codigo es para poner icono a lado derecho de las categorias seleccionadas
// este codigo contiene la opcion para desplegar icono basico de categoria seleccionada
// const categoryIcons = {
//   all: '🔎',
//   bebidas: '🍹',
//   cocina: '🍳',
//   ciberseguridad: '🛡️',
//   esoterico: '🔮',
//   espiritual: '🧘‍♂️',
//   legal: '⚖️',
//   mascotas: '🐾',
//   oficios: '🛠️',
//   salud: '🩺',
//   superacion: '🚀'
// };

// const categorySelect = document.getElementById('category');
// const iconoFiltro = document.getElementById('icono-filtro');

// categorySelect.addEventListener('change', function () {
//   const selected = this.value;
//   const cards = document.querySelectorAll('.card');

//   cards.forEach(card => {
//     const category = card.getAttribute('data-category');
//     if (selected === 'all' || category === selected) {
//       card.classList.remove('ocultanofiltro');
//     } else {
//       card.classList.add('ocultanofiltro');
//     }
//   });

  // Actualizar icono
//   iconoFiltro.textContent = categoryIcons[selected] || '🔎';
// });

// este codigo contiene la opcion para desplegar icono fontawesome de categoria seleccionada

const categoryIcons = {
  all: 'fa-solid fa-filter',
  bebidas: 'fa-solid fa-martini-glass',
  cocina: 'fa-solid fa-utensils',
  ciberseguridad: 'fa-solid fa-shield-halved',
  esoterico: 'fa-solid fa-hat-wizard',
  espiritual: 'fa-solid fa-person-praying',
  legal: 'fa-solid fa-scale-balanced',
  mascotas: 'fa-solid fa-paw',
  oficios: 'fa-solid fa-hammer',
  salud: 'fa-solid fa-heart-pulse',
  superacion: 'fa-solid fa-rocket'
};

const categorySelect = document.getElementById('category');
const iconoFiltro = document.getElementById('icono-filtro');

categorySelect.addEventListener('change', function () {
  const selected = this.value;
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (selected === 'all' || category === selected) {
      card.classList.remove('ocultanofiltro');
    } else {
      card.classList.add('ocultanofiltro');
    }
  });

  // Cambiar icono
  const newIcon = categoryIcons[selected] || 'fa-solid fa-filter';
  iconoFiltro.className = newIcon;
});



 