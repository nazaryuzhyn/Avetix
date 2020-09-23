let inputEmail = document.querySelector('.input-email');
let inputName = document.querySelector('.input-name');
let textareaMessage = document.querySelector('.textarea-message');

document.addEventListener('click', function () {
	if (inputEmail.value !== '') {
		inputEmail.classList.add('isset-input');
	}else {
		inputEmail.classList.remove('isset-input');
	}
	if (inputName.value !== '') {
		inputName.classList.add('isset-input');
	}else {
		inputName.classList.remove('isset-input');
	}
	if (textareaMessage.value !== '') {
		textareaMessage.classList.add('isset-input');
	}else {
		textareaMessage.classList.remove('isset-input');
	}
})

document.addEventListener('keydown', function () {
	if (inputEmail.value !== '') {
		inputEmail.classList.add('isset-input');
	}else {
		inputEmail.classList.remove('isset-input');
	}
	if (inputName.value !== '') {
		inputName.classList.add('isset-input');
	}else {
		inputName.classList.remove('isset-input');
	}
	if (textareaMessage.value !== '') {
		textareaMessage.classList.add('isset-input');
	}else {
		textareaMessage.classList.remove('isset-input');
	}
})