// document.write(10000)
// $(document).ready(function() {
// 	$('.icon-menu').click(function(event) {
// 		$('.icon-menu, .menu__body').toggleClass('active');
// 	});
// });

let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu__body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
