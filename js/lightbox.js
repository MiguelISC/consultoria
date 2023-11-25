const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburguerL = document.querySelector('.menuhamburguer');
const cierra = document.querySelector('.close');

imagenes.forEach(imagen => {
	imagen.addEventListener('click', ()=> {
		aparecer(imagen.getAttribute('src'));
	});
});

contenedorLight.addEventListener('click', (e)=> {
	if (e.target == cierra) {
		contenedorLight.classList.toggle('show');
		imagenesLight.classList.toggle('showImage');
		hamburguerL.style.opacity = '1';
	}
});

const aparecer = (imagen)=> {
	imagenesLight.src = imagen;
	contenedorLight.classList.toggle('show');
	imagenesLight.classList.toggle('showImage');
	hamburguerL.style.opacity = '0';
}