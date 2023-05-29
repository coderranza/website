// Obtenemos todos los elementos de encabezado de toggle
const toggleHeaders = document.querySelectorAll('.toggle-header');

// Iteramos sobre los encabezados y agregamos un listener de clic a cada uno
toggleHeaders.forEach((header) => {
  header.addEventListener('click', toggleExperience);
});

// Función para alternar la visibilidad del contenido del toggle
function toggleExperience() {
  // Obtenemos el elemento de contenido del toggle correspondiente al encabezado
  const content = this.nextElementSibling;

  // Obtenemos el icono del encabezado
  const icon = this.querySelector('.material-icons');

  // Verificamos si el contenido está activo o no
  const isActive = content.classList.contains('active');

  // Contraemos cualquier otro contenido expandido
  const expandedContent = document.querySelector('.toggle-content.active');
  if (expandedContent && expandedContent !== content) {
    expandedContent.style.maxHeight = '0';
    expandedContent.classList.remove('active');
    const expandedIcon = expandedContent.previousElementSibling.querySelector('.material-icons');
    if (expandedIcon) {
      expandedIcon.textContent = 'add';
    }
  }

  // Alternamos la clase "active" para mostrar u ocultar el contenido
  content.classList.toggle('active');

  // Verificamos si el contenido está activo o no
  if (content.classList.contains('active')) {
    // Establecemos la altura máxima del contenido para que se expanda completamente
    content.style.maxHeight = content.scrollHeight + 'px';
    // Cambiamos el icono a "-"
    icon.textContent = 'remove';
  } else {
    // Establecemos una altura máxima específica al contraer el contenido
    content.style.maxHeight = '0';
    // Cambiamos el icono a "+"
    icon.textContent = 'add';
  }
}
