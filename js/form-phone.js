'use strict';

(function (){

	let phone = document.querySelector('.phone');
	let wrapPhone = document.querySelector('.wrap-phone');
	let iconPhone = document.querySelector('.phone__icon');
	let iconClose = document.querySelector('.close__icon');
	let iconPhoneBlue = document.querySelector('.icon-phone-blue');

	phone.onclick = function() {
		wrapPhone.classList.toggle('hidden');
		iconPhone.classList.toggle('hidden');
		iconClose.classList.toggle('hidden');
		phone.classList.toggle('icon-phone-blue');
	}

	let removeWrap = function(evt){
		if(evt.keyCode === 27){
			wrapPhone.classList.add('hidden');
			iconClose.classList.add('hidden');
			iconPhone.classList.remove('hidden');
			phone.classList.add('icon-phone-blue');
		}
	}

	document.addEventListener('keydown', removeWrap);

})();