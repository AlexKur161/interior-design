$(document).ready(function(){
    const cross = document.querySelector('.cross');
	const mirrow = document.querySelector('.header-bg');
	const menuMobil = document.querySelector('.diz-mobil');
	const contactWrap = document.querySelector('.contact-wrap');
	if (cross) {
		const nav = document.querySelector('nav.navigation');
		cross.addEventListener('click', function(e) {
			cross.classList.toggle('cross--active');
			mirrow.classList.toggle('mirrow-height');
			menuMobil.classList.toggle('mobil-nav');
			contactWrap.classList.toggle('phone-wrap-mobil');
		});
	}
});