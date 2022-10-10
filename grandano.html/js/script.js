
const BASKET_MIN = document.querySelector('.basket-min');


window.onload = function () { //ожидание полной загрузки страницы
	// let isMobile = {
	// 	Android: function () { return navigator.userAgent.match(/Android/i); },
	// 	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	// 	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	// 	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	// 	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	// 	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	// };               
      


	//переменные      
	// var search = document.getElementsByClassName('search')[0];//получаем класс элемента по которому будем кликать для вызова формы поиска
	// var search_close = document.getElementsByClassName('close-search-form')[0];//получаем класс элемента по которому будем кликать для вызова формы поиска
	// var search_active = document.getElementsByClassName('search-form')[0];//получаем класс элемента формы поиска
	// var navUser = document.getElementsByClassName('icon-user')[0];//получаем класс элемента по которому будем кликать для вызова меню пользователя
	// var navUserList = document.getElementsByClassName('sub-menu__list')[0];//получаем класс элемента с меню пользователя





	//Вызов формы обратного звонка
	document.querySelector('.phone-block__polygon').addEventListener('click', ev => {//Выбираем дом элимента и вешаем событие клик
		document.querySelector('.block-form').classList.toggle('block-form_block');//добавляем класс если его нет и наоборот
		ev.stopPropagation();
		document.addEventListener('click', e => {
			if (e.target != document.querySelector('.block-form')) {
				document.querySelector('.block-form').classList.remove('block-form_block');
			}
		})
	})
	//Показ каталога в хедере
	if (document.querySelector('#homepage')) {
		document.querySelector('.menu__list').classList.add('menu__list_block');
	}
	if(document.querySelector('.header__menu')) {
		document.querySelector('.header__menu').addEventListener('click', ev => {//Выбираем дом элимента и вешаем событие клик
		document.querySelector('.menu__list').classList.toggle('menu__list_block');//добавляем класс если его нет и наоборот
		ev.stopPropagation();
		document.addEventListener('click', e => {
			if ((e.target != document.querySelector('.menu__list')) && (!document.querySelector('#homepage'))) {
				document.querySelector('.menu__list').classList.remove('menu__list_block');
			}
		})
	})
	//Показ каталога в мобильной версии         
	document.querySelector('.header__mob-btn').addEventListener('click', ev => {//Выбираем дом элимента и вешаем событие клик

		document.querySelector('.header__bottom').classList.toggle('header__bottom_block');//добавляем класс если его нет и наоборот
		ev.stopPropagation();
		document.addEventListener('click', e => {
			if (e.target != document.querySelector('.header__bottom')) {
				//document.querySelector('.header__bottom').classList.remove('header__bottom_block');
			}
		})
	})
	}
	


	//Главное меню (бургер)
	// document.querySelector('.menu__btn').addEventListener('click', ev => {//Выбираем дом элимента и вешаем событие клик
	// 	document.querySelector('.menu__list').classList.toggle('menu__list_open');//добавляем класс если его нет и наоборот
	// 	document.querySelector('.menu__btn').classList.toggle('menu__btn_open');//добавляем класс если его нет и наоборот
	// 	ev.stopPropagation();
	// 	document.addEventListener('click', e => {
	// 		if (e.target != document.querySelector('.menu__list')) {
	// 			document.querySelector('.menu__list').classList.remove('menu__list_open');
	// 			document.querySelector('.menu__btn').classList.remove('menu__btn_open');
	// 		}
	// 	})
	// })

}
if (document.querySelector('.tabs')) {


	var $tabs = function (target) {
		var
			_elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
			_eventTabsShow,
			_showTab = function (tabsLinkTarget) {
				var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
				tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
				tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
				tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
				// если следующая вкладка равна активной, то завершаем работу
				if (tabsLinkTarget === tabsLinkActive) {
					return;
				}
				// удаляем классы у текущих активных элементов
				if (tabsLinkActive !== null) {
					tabsLinkActive.classList.remove('tabs__link_active');
				}
				if (tabsPaneShow !== null) {
					tabsPaneShow.classList.remove('tabs__pane_show');
				}
				// добавляем классы к элементам (в завимости от выбранной вкладки)
				tabsLinkTarget.classList.add('tabs__link_active');
				tabsPaneTarget.classList.add('tabs__pane_show');
				document.dispatchEvent(_eventTabsShow);
			},
			_switchTabTo = function (tabsLinkIndex) {
				var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
				if (tabsLinks.length > 0) {
					if (tabsLinkIndex > tabsLinks.length) {
						tabsLinkIndex = tabsLinks.length;
					} else if (tabsLinkIndex < 1) {
						tabsLinkIndex = 1;
					}
					_showTab(tabsLinks[tabsLinkIndex - 1]);
				}
			};

		_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

		_elemTabs.addEventListener('click', function (e) {
			var tabsLinkTarget = e.target;
			// завершаем выполнение функции, если кликнули не по ссылке
			if (!tabsLinkTarget.classList.contains('tabs__link')) {
				return;
			}
			// отменяем стандартное действие
			e.preventDefault();
			_showTab(tabsLinkTarget);
		});

		return {
			showTab: function (target) {
				_showTab(target);
			},
			switchTabTo: function (index) {
				_switchTabTo(index);
			}
		}

	};

	$tabs('.tabs');
}


if (document.querySelector('.banners-swiper')) {
	new Swiper('.banners-swiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		//preloadImages: false,
		lazy: true,
		//watchSlidesVisibility: true,
		loop: true,
		// navigation: {
		//   nextEl: '.arrow__next',
		//   prevEl: '.arrow__prev',
		// },    
		// pagination: {
		//        el: ".banners__pagination",
		//        clickable: true,
		//        renderBullet: function (index, className) {
		//          return '<span class="' + className + '">' + (index + 1) + "</span>";
		//        },
		// 		} 
		scrollbar: {
			el: ".banners__pagination",
			hide: true,
		},
	});
}
if (document.querySelector('.cards-slaider-news')) {
	new Swiper('.cards-slaider-news', {
		slidesPerView: 1,
		spaceBetween: 30,
		//preloadImages: false,
		lazy: true,
		//watchSlidesVisibility: true,
		loop: true,
		navigation: {
			nextEl: '.arrow__next',
			prevEl: '.arrow__prev',
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 10,
			}
		}
	});
}

if (document.querySelector('.product-slaider')) {
	var swiper = new Swiper(".product-pagination", {
		spaceBetween: 2,
		slidesPerView: 3,
		//mousewheel: true,
		direction: "vertical",
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		//loop: true,
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 6,
			},
		},
	});
	var swiper2 = new Swiper(".product-slaider", {
		spaceBetween: 0,
		loop: true,
		// navigation: {
		// 	nextEl: ".swiper-button-next",
		// 	prevEl: ".swiper-button-prev",
		// },
		thumbs: {
			swiper: swiper,
		},

		scrollbar: {
			el: ".about-product__scrollbar",
		},
	});
}


if (document.querySelector('.cards-slaider')) {

	var cardsSlaider = new Swiper(".cards-slaider", {
		slidesPerView: 1,
		spaceBetween: 1,
		//preloadImages: false,
		lazy: true,
		//watchSlidesVisibility: true,
		loop: true,
		navigation: {
			nextEl: '.arrow__next',
			prevEl: '.arrow__prev',
		},
		breakpoints: {

			576: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 5,
			},
			1600: {
				slidesPerView: 5,
				spaceBetween: 10,
			}
		}
	});
}

if (document.querySelector('.cards-slaider_basket')) {

	var cardsSlaiderBasket = new Swiper(".cards-slaider_basket", {
		slidesPerView: 1,
		spaceBetween: 1,
		//preloadImages: false,
		lazy: true,
		//watchSlidesVisibility: true,
		loop: true,
		navigation: {
			nextEl: '.arrow__next',
			prevEl: '.arrow__prev',
		},
		breakpoints: {

			768: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
		}
	});
}

if (document.querySelector('.onenews-slaider')) {
	var onenewsSlaider = new Swiper('.onenews-slaider', {
		slidesPerView: 1,
		spaceBetween: 1,
		//preloadImages: false,
		lazy: true,
		//watchSlidesVisibility: true,
		loop: true,
		navigation: {
			nextEl: '.arrow__next',
			prevEl: '.arrow__prev',
		},
		breakpoints: {

			576: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 10,
			}
		}
	});
}

//Крестик при открытом меню-бургере
if (document.querySelector('.header__mob-btn')) {
	(function () {
		const burgerMobBtn = document.querySelector('.header__mob-btn');
		burgerMobBtn.addEventListener('click', () => {
			burgerMobBtn.classList.toggle('header__mob-btn_active');
		})
	}());
}



if (document.querySelector('.basket-product__amount')) {

	const counter = function () {
		const btns = document.querySelectorAll('.counter__btn');
	  
	  
		btns.forEach(btn => {
		  btn.addEventListener('click', function () {
			const direction = this.dataset.direction;
			const inp = this.parentElement.querySelector('.counter__value');
			const currentValue = +inp.value;
			let newValue;
	  
			if (direction === 'plus') {
			  newValue = currentValue + 1;
			  if (newValue === 100) {
				newValue = currentValue + 0;
			  }
			}
			else {
			  newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
			}
	  
			inp.value = newValue;
		  })
		})
	  
	  }
	  
	  counter();

}












//===Модули===============================
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}



function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click" , function (e){
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnLock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if(doUnLock) {
			bodyUnLock();
		}
	}
}



function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPaddingValue.length > 0){
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	 body.style.paddingRight = lockPaddingValue;
	 body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function (){
		if (lockPadding.length > 0){
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function (){
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e){
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});



(function(){
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css){
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function(){
	if (!Element.prototype.matches){
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
	}
})(); //Модальное окно  //!Сниппет "!modal" html


	
let tooltipElem;
	document.addEventListener('mouseover', (ev) => {
		let target = ev.target;
		// если у нас есть подсказка...
		let tooltipHtml = target.dataset.tooltip;
		if (!tooltipHtml) return;

		// элемент для подсказки
		tooltipElem = document.createElement('div');
		tooltipElem.className = 'tooltip';
		tooltipElem.innerHTML = tooltipHtml;
		document.body.append(tooltipElem);

		// спозиционируем его сверху от аннотируемого элемента (top-center)
		let coords = target.getBoundingClientRect();

		let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
		if (left < 0) left = 0; // не заезжать за левый край окна

		let top = coords.top - tooltipElem.offsetHeight - 5;
		if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
			top = coords.top + target.offsetHeight + 5;
		}

		tooltipElem.style.left = left + 'px';
		tooltipElem.style.top = top + 'px';
	});

	document.addEventListener('mouseout', () => {
		if (tooltipElem) {
			tooltipElem.remove();
			tooltipElem = null;
		}
	}); //Тултип  //!Сниппет "!tooltip" html



//@//@include('../module/JS/_validator-form.js', {}) //Валидатор форм  //!Сниппет "!forma" html
if (document.getElementsByClassName("accordion")) {
	let acc = document.getElementsByClassName("accordion");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("accordion_active");
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
}
 //Валидатор форм  //!Сниппет "!accordion" html

if (document.querySelector('.tel')) {
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
	const elems = document.querySelectorAll(selector);

	function mask(event) {
		const keyCode = event.keyCode;
		const template = masked,
			def = template.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		console.log(template);
		let i = 0,
			newValue = template.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
			});
		i = newValue.indexOf("_");
		if (i !== -1) {
			newValue = newValue.slice(0, i);
		}
		let reg = template.substr(0, this.value.length).replace(/_+/g,
			function (a) {
				return "\\d{1," + a.length + "}";
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
			this.value = newValue;
		}
		if (event.type === "blur" && this.value.length < 5) {
			this.value = "";
		}

	}

	for (const elem of elems) {
		elem.addEventListener("input", mask);
		elem.addEventListener("focus", mask);
		elem.addEventListener("blur", mask);
	}
	
}

// use

// maskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__'); //Маска номера телефона (библиотека)
	maskPhone('.tel');//Вызов функции маски номера телефона
}

if (document.querySelector('.ordering')) {


	let orderingBtn = document.querySelector('.ordering__btn');
	let orderingData = document.querySelector('.ordering__data');
	let dataValue = document.querySelector('.data-value');
	let dataValueBtn = document.querySelector('.data-value__btn');
	let orderingItem = document.querySelector('.ordering__item');
	orderingBtn.addEventListener('click', ev => {
		orderingData.classList.add('ordering__data_none');
		dataValue.classList.remove('data-value_none');
	});
	dataValueBtn.addEventListener('click', ev => {
		dataValue.classList.add('data-value_none');
		orderingData.classList.remove('ordering__data_none');
		orderingItem.classList.remove('ordering__item_full');
	});





}
if (document.querySelector('#date-none')) {


	function timer() {
		var nowDate = new Date();
		var dateEnd = Date.parse(document.getElementById('date-none').textContent);
		var achiveDate = new Date(dateEnd);
		var result = (achiveDate - nowDate) + 1000;
		if (result < 0) {
			var elmnt = document.getElementById('timer');
			elmnt.innerHTML = '<div class="banner-time__number-block"><div class="banner-time__subtext"><span>Акция закончена</span></div>';
			return undefined;
		}
		var seconds = Math.floor((result / 1000) % 60);
		var minutes = Math.floor((result / 1000 / 60) % 60);
		var hours = Math.floor((result / 1000 / 60 / 60) % 24);
		var days = Math.floor(result / 1000 / 60 / 60 / 24);
		if (seconds < 10) seconds = '0' + seconds;
		if (minutes < 10) minutes = '0' + minutes;
		if (hours < 10) hours = '0' + hours;
		var elmnt = document.getElementById('timer');
		//  elmnt.innerHTML = '<div class="banner-time__number-block"> <div class="banner-time__number">' + days + '</div>	<div class="banner-time__subtext">дней</div></div><div class="banner-time__number-block"> <div class="banner-time__number">' + hours + '</div>	<div class="banner-time__subtext">часов</div></div><div class="banner-time__number-block"> <div class="banner-time__number">' + minutes + '</div>	<div class="banner-time__subtext">минут</div></div><div class="banner-time__number-block"> <div class="banner-time__number">' + seconds + '</div>	<div class="banner-time__subtext">секунд</div></div>';
		document.getElementById('timeDays').innerHTML = days;
		document.getElementById('timeHours').innerHTML = hours;
		document.getElementById('timeMinutes').innerHTML = minutes;
		document.getElementById('timeSeconds').innerHTML = '<span>' + seconds + '</span>';
		setTimeout(timer, 1000);
	}
	window.onload = function () {
		timer();
	}
}

if (document.getElementById('sliderR')) {
	var stepsSlider = document.getElementById('sliderR');
	var input0 = document.getElementById('inputNumberMin');
	var input1 = document.getElementById('inputNumberMax');
	var inputs = [input0, input1];

	noUiSlider.create(stepsSlider, {
		start: [0, 50000],
		connect: true,
		step: 10,
		range: {
			'min': 10,
			'max': 50000
		}
	});

	stepsSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});
}



if (document.querySelector('.basket-min')) {

	let Value = document.querySelector('.header__cart-btn');
	

	Value.addEventListener('click', ev => {
		Value.classList.toggle('header__cart-btn_active');
		BASKET_MIN.classList.toggle('basket-min_active');
		ev.stopPropagation();

	});
	window.addEventListener('click', e => {
		const target = e.target // находим элемент, на котором был клик
		if (!target.closest('.basket-min')) {
			Value.classList.remove('header__cart-btn_active');
			BASKET_MIN.classList.remove('basket-min_active');
		}
	});



}