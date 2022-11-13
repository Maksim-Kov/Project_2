
let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu__body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


// let button = document.querySelectorAll('btn');

// button.forEach (btn => {
// 	btn.addEventListener('click', function () {
// 		button.forEach(butt => butt.classList.remove('active'));
// 		this.classList.add('active');
// 	})
// })


// let link = document.querySelector('.btn');
// link.addEventListener('click', function(){
// 	link.classList.toggle('active');
// })

// let link = document.querySelector('.btn');
// link.onclick = (Event) => {
// 	Event.target.classList.add('active')
// }