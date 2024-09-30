const filterBox = document.querySelectorAll('.articles__item');
const filterButtons = document.querySelectorAll('.filter-articles__item');
const filterButtonsActive = document.querySelector('.active');
let filterClassActive= filterButtonsActive.dataset['filter'];
console.log(filterButtons)

filterBox.forEach( elem => {
	if(!elem.classList.contains(filterClassActive) ) {
		elem.classList.add('hide');
	}
})

document.querySelector('.articles__filter').addEventListener('click', (event)=> {
	if (event.target.tagName !== "BUTTON") return false;

	let filterClass = event.target.dataset['filter'];
	
	filterButtons.forEach( e =>{
		e.classList.remove('active')
//		if(e.classList.contains(filterClass)){
	//		e.classList.add('active')
	//	}
		
		// else(
		// 	e.classList.add('active')
		// 	)
	})
	
	event.target.classList.add('active');
	
	filterBox.forEach( elem => {
		elem.classList.remove("hide")
		if(!elem.classList.contains(filterClass) ) {
			elem.classList.add('hide');
		}
	})
})
