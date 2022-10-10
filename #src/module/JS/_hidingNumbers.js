//Hiding numbers
const openPhone = document.querySelectorAll('.open-phone');
const closePhone = document.querySelectorAll('.close-phone');
	
	function OpenPhone() {
		//yaCounter25309613.reachGoal('openPhone'); //Цель яндекс метрики
		for (let i = 0; i < openPhone.length; i++) { // проходим циклом по всем элементам объекта
			openPhone[i].classList.add('open-phone_none');
			for (let i = 0; i < closePhone.length; i++) { // проходим циклом по всем элементам объекта
				closePhone[i].classList.add('open-phone_none');
			}
		}
		return false;
	};