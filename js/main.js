const app = document.getElementById('portafolio');

const  typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
    .typeString('Proximamente - Portafolio de Proyectos')
    .pauseFor(200)
    .start()