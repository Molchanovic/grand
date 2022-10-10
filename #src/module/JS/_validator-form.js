var userName = document.querySelector('.form-username');
var userPassword = document.querySelector('.form-password');
var userPassword2 = document.querySelector('.form-password2');
var userEmail = document.querySelector('.form-email');
var regularExpression = /(?=.*[а-яА-ЯёЁ])/g;
var regularEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

//! Логин пользователя
userName.onblur = function () {
	if (userName.value == "") {
		userName.classList.add('input-error');
		return false;
	}
};
userName.onfocus = function () {
	if (userName.classList.contains("input-error")) { // сбросить состояние "ошибка", если оно есть 
		userName.classList.remove('input-error');
	}
}

//! E-mail пользователя
userEmail.onblur = function () {
	if ((userEmail.value == "")) {
		userEmail.classList.add('input-error');
		return false;
	}
	if (!regularEmail.test(userEmail.value)) {
		userEmail.classList.add('input-error');
		userEmail.classList.add('input-regularEmail');
		return false;
	}
}

userEmail.onfocus = function () {
	if (userEmail.classList.contains("input-error")) {
		userEmail.classList.remove('input-error');
		userEmail.classList.remove('input-regularEmail');
	}

}
//! Пароль пользователя
userPassword.onblur = function () {
	if (regularExpression.test(userPassword.value)) {
		userPassword.classList.add('input-error');
		userPassword.classList.add('input-cyrillic');
		return false;
	}
	else if ((!userPassword.value) || (5 >= userPassword.value.length)) {
		userPassword.classList.add('input-error');
		userPassword.classList.add('input-min6');
		return false;
	}
}
userPassword.onfocus = function () {
	userPassword.classList.remove('input-error');
	userPassword.classList.remove('input-cyrillic');
}

userPassword2.onblur = function () {
	if ((userPassword.value) != (userPassword2.value)) {
		userPassword2.classList.add('input-error');
		userPassword2.classList.add('input-password-mismatch');
		return false;
	}
}

userPassword2.onfocus = function () {
	userPassword2.classList.remove('input-error');
	userPassword2.classList.remove('input-password-mismatch');
}

function validate() {
	if (userName.value == "") {
		userName.classList.add('input-error');
		return false;
	}
	else if ((userEmail.value == "") || (!regularEmail.test(userEmail.value))) {
		userEmail.classList.add('input-error');
		return false;
	}
	else if ((regularExpression.test(userPassword.value)) ||
		(!userPassword.value) ||
		(5 >= userPassword.value.length)) {
		userPassword.classList.add('input-error');
		return false;
	}
	else if ((userPassword.value) != (userPassword2.value)) {
		userPassword2.classList.add('input-error');
		return false;
	}

	return true;
}
