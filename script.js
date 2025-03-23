// Espera que la página cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Cambiar color de fondo al hacer clic en un botón
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        document.body.style.backgroundColor = '#e0f7fa'; // Cambia el fondo a un color más claro
        alert('¡Has cambiado el color de fondo!');
    });
    
    // Función para cambiar el contenido de una tarjeta
    const card = document.querySelector('.card');
    card.addEventListener('click', function() {
        card.querySelector('h2').textContent = '¡Has clickeado la tarjeta!';
        card.style.backgroundColor = '#d0f0c0'; // Cambiar color de fondo de la tarjeta
    });
});
