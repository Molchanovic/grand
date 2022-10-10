function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

function ibgm() {

	let ibgM = document.querySelectorAll(".ibg-m");
	for (var i = 0; i < ibgM.length; i++) {
		if (ibgM[i].querySelector('img')) {
			ibgM[i].style = '-webkit-mask-image: url(' + ibgM[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibgm();