"use strict"

// COUNTER

 window.addEventListener("load", windowLoad);

 function windowLoad(){
	function digitsCountersInit(digitsCountersItems){
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if(digitsCounters){
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}
 

	function digitsCountersAnimate(digitsCounter){
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounte) : 1500;
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if(!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress *(startPosition+startValue));
			if (progress < 1 ){
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

		let options = {
			threshold: 0.3
		}
		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting){
					const targetElement = entry.target;
					const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
					if(digitsCountersItems.length){
						digitsCountersInit(digitsCountersItems);
					}
					observer.unobserve(targetElement);
				}
			});
		}, options);

		let sections = document.querySelectorAll('.counters');
		if (sections.length){
			sections.forEach(section => {
				observer.observe(section);
			});
		}
}


// END COUNTER


// FORM


const form = document.querySelector('.form');
form.addEventListener('submit', function(e){
	e.preventDefault();
	sendMessage(form);
})

async function sendMessage(form){
	const formData = new FormData(form);
	if (formData){
		const url = '/php/sendmessage.php';
		const response = await fetch(url,{
			method: "POST",
			body: formData
		});
		if(response.ok){
			form.reset();
			alert('Form sent!');
		}
		else{
			alert('Error');
		}
	}
}

// SLIDER


const swiper = new Swiper('.slider', {
  // Optional parameters
  direction: 'horizontal',
	slidesPerView: 1,
	// autoplay: {
	// 	delay: 3000,
	// 	stopOnLastSlide: true,
	// 	disableOnInteraction: false,
	// 	},
	spaceBetween: 10,
	loop: true,
	speed: 900,

	breakpoints: {
		767: {
			slidesPerView: 1.4,
			autoplay: {
				delay: 4000,
				stopOnLastSlide: true,
				disableOnInteraction: false,
				},
			loop: true,
			speed: 900,
		},

	},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

});






// ARTICLE

// function imageInit() {
// 	const images = document.querySelectorAll('.article__image');
// 	if(images.length) {
// 		images.forEach(image => {
// 			const imageItem = image.querySelector('img');
// 			const padding = imageItem.offsetHeight / imageItem.offsetWidth * 100;
// 			image.style.paddingBottom = `${padding}%`;
// 			imageItem.classList.add('init');
// 		});
// 	}
// }

// function gridInit(){
// 	const items = document.querySelector('.articles__items');
// 	const itemsGrid = new Isotope(items, {
// 		itemSelector: '.article',
// 		percentPosition: true,
// 		masonry: {
// 			fitWidth: true,
// 			gutter: 20
// 		},
// 	});

// 	document.addEventListener('click', documentActions);

// 	function documentActions(event){
// 		console.log(event);
// 		const targetElement = event.target;
// 		if (targetElement.closest('.filter-articles__item')){
// 			const filterItem = targetElement.closest('.filter-articles__item');
// 			const filterValue = filterItem.dataset.filter;
// 			const filterActiveItem = document.querySelector('.filter-articles__item.active');

// 			filterValue === "*" ? itemsGrid.arrange({filter:``}):
// 				itemsGrid.arrange({filter:`[data-filter="${filterValue}"]`});
// 			filterActiveItem.classList.remove('active')
// 			filterItem.classList.add('active')
			
// 			event.preventDefault();
// 		}
// 	}
// }



	

// window.addEventListener('load', windowLoad);

// function windowLoad(){
// 	// imageInit();
// 	gridInit();


// }






