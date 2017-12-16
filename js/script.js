// --- Typed --- //
function type(){
	var word = $('.loop-typed');
	$(word).typed({
		strings: ['Javascript','jQuery','Ajax','ReactJs','AngularJs','SenchaJs','BackboneJs','Html5','Stylesheet','Bootstrap','Foundation','Animate.css','Normalize.css','GitHub','Grunt'],
		loop: true,
		typeSpeed: 150,
		shuffle: true,
		backDelay: 1500
	});
}
// --- Counter -- //
function countUp(){
	var count = $('.counter');
	count.counterUp({
		delay: 10,
		time: 3000
	});
}
// --- Parallax --- //
/*function parallax(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var position = (barra * 0.10);

		$('.main').css({
			'background-position': '0 -' + position + 'px'            
		});       
       
	});
}*/
// --- Menun --- //
function menu(){
	var button = $('.nav-button');
	var body = $('body');
	var cont = 1;
	$(button).on('click', function(){
		console.log('click');
		if (cont == 1) {
			$(this).addClass('open');
			$(body).addClass('sideopen');
			cont = 0;
		}else{
			cont = 1;
			$(this).removeClass('open');
			$(body).removeClass('sideopen');
		}
	});
}
// --- ScrollHeader --- //
function scrollheader(){
	var header = $('header');
	var pos = 50;
	$(window).scroll(function() {
		var offy = $(header).offset().top;
		if (offy > pos) {
			$(header).addClass('scroll');
		}else{
			$(header).removeClass('scroll')
		}
	});
}
// --- Anchor --- //
function anchor(){
	$('.anchor').on('click', function(event){
		event.preventDefault();
		var ancla = $(this).attr('href');
		$('body,html').stop(true,true).animate({
			scrollTop: $(ancla).offset().top -60
		},1250, 'easeInOutExpo');
	});
}
// Document Ready //
$(document).ready(function() {
	type();
	countUp();
	//parallax();
	menu();
	scrollheader();
	anchor();
	new WOW().init();
});