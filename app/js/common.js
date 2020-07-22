"use strict";


	let logo = document.getElementById('open_menu');

	let menu_main = document.getElementById('main');

	logo.addEventListener('click', function () {
		menu_main.classList.toggle('menu-show');
	});