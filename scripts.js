document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Gracias por comunicarte con Sergiocreww!, Estare en contacto contigo lo mas pronto posible');
    });
});
