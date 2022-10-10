

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
var swiper = new Swiper(".product-slaider__pagination", {
	spaceBetween: 10,
	slidesPerView: 4,
	lazy: true,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-slaider__slide", {
	spaceBetween: 10,
	lazy: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
	scrollbar: {
		el: ".swiper__scrollbar",
		draggable: true
	},
});
var cardsSlaider = new Swiper('.cards-slaider', {
	slidesPerView: 5,
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

