//---------------ВКЛАДКИ НА СТРАНИЦЕ РЕГИСТРАЦИИ--------------
let tabs = document.querySelectorAll('.top-buttons button');
let content = document.querySelectorAll('.tabs-content div');

	for (let i = 0; i < tabs.length; i++) {
	  tabs[i].addEventListener('click', changeTab);
	}

function changeTab(e) {
	let tab = e.target.getAttribute('data-tab');
	for (let i = 0; i < tabs.length; i++) {
	    tabs[i].classList.remove('active');
	  }
	e.target.classList.add('active');

	for (let i = 0; i < content.length; i++) {
	    content[i].classList.remove('show');
	}
	document.querySelector('div[data-content='+tab+']').classList.add('show');
}

//------------------МОДАЛЬНОЕ ОКНО ЛОГИН----------------------
$(".subscribe").click(function(e){
	e.preventDefault();
	$(".register-form").fadeToggle(1000);
});
// ----------------------МОБИЛЬНОЕ МЕНЮ----------------------
$(function(){
	$(".open-btn").click(function() {
		$(".mobile-navi").addClass("show");
		$(".open-btn").css({"opacity":"0"});
	})
	$(".close-btn").click(function(){
		$(".mobile-navi").removeClass("show")
		$(".open-btn").css({"opacity":"1"});
	})
});

//--------------------ОФОРМЛЕНИЕ ЗАКАЗА----------------------
$(function() {
	$(".registr").click(function() {
		$(".login").addClass("bounceright");
		$(".checkout").removeClass("bounceleft");
		$(".checkout-welcome-text").addClass("showForm");
		$(".login-welcome-text").css({"opacity":"0"});
		setTimeout(function(){
			$(".login").slideUp(1000);
			$(".checkout").slideDown(700);
		}, 1000);

	});
	$(".log").click(function(){
		$(".checkout").addClass("bounceleft");
		$(".login").removeClass("bounceright");
		$(".checkout-welcome-text").fadeIn(800);
		$(".login-welcome-text").addClass("showForm");
		setTimeout(function(){
			$(".login").fadeIn(200);
			$(".checkout").slideUp(700);
		}, 1000);
	});
});
//--------------------МОДАЛЬНОЕ ОКНО С КОРЗИНОЙ---------------

$(".shopping-cart").click(function(e){
		e.preventDefault();
		$(".modal-bag").show(1000);
		$(".bag-mask").fadeIn(1000);
	});
$(".close").click(function(){
	$(".modal-bag").fadeOut(1000);
	$(".bag-mask").fadeOut(1000);
});

// ---------------МОДАЛЬНОЕ ОКНО - ОБРАТНЫЙ ЗВОНОК-----------
$(".callback-btn").click(function(){
	$(".callback-modal").show(1000);
	$(".callback-btn").addClass("active");
});
$(".callback-close").click(function() {
	$(".callback-modal").hide(1000);
	$(".callback-btn").removeClass("active");
});
// -------------------КНОПКА ПРОКРУТКИ-----------------------
$(window).scroll(function(e){
    let scroll = $(window).scrollTop();
      if (scroll >= 50) {
        $(".scrolltop-btn").addClass("show");
      } else {
        $(".scrolltop-btn").removeClass("show");
      }
});

$(".scrolltop-btn a").click(function(e){
	e.preventDefault(); 
	let href = $(this).attr("href");
	let position = $(href).offset().top;
	$("html, body").animate({scrollTop:position},1000);
});
// --------------------ДЕТАЛИ ПРОДУКТА------------------------
$(".push1").click(function(){
	$(".details1").slideToggle(600);
		$(".details2").slideUp(500);
	});
	$(".push2").click(function(){
		$(".details2").slideToggle(600);
		$(".details1").slideUp(500);
	});
// ----------------------------------------------------------