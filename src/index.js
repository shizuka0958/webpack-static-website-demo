import './css/index.css'
import './css/adaption.css'
import $ from "jquery"

$(function(){
	var isChareHeight = true;
	//初始化执行的方法，判断是否当前需要黑色背景
	initColor();
	//屏幕滚动的监听
	window.onscroll = function() {
		var top = $(document).scrollTop()
		, headerDom = $('.pageHomeBox')
		, screenWidth = window.innerWidth;
		if (top > 4) {
			headerDom.css('background', '#000');
			
		} else {
			if (screenWidth > 960) {
				headerDom.css('background', 'none');
			} else {
				headerDom.css('background', '#000');
			}
		}
		if (isChareHeight) {
			chargeHeight(top);
		}
	}
	//屏幕宽度的监听
	window.onresize = function() {
		var top = $(document).scrollTop()
		, headerDom = $('.pageHomeBox')
		, screenWidth = window.innerWidth;
		if (screenWidth < 960) {
			headerDom.css('background', '#000');
		} else {
			if (top <= 4) {
				headerDom.css('background', 'none');
			} else {
				headerDom.css('background', '#000');
			}
		}
	}
	//点击下拉列表出现
	$('.mobileIcon').on('click', function(event) {
		var targetClass = event.target.className;
		if (targetClass == 'iconClose') {
			$('.slideUl').slideUp(300);
			$('.iconClose').hide();
			$('.lineBox').show();
		} else {
			$('.slideUl').slideDown(300);
			$('.iconClose').show();
			$('.lineBox').hide();
		}
		
	});
	//点击下拉列表中的选项时
	$('.slideUl span').on('click', function() {
		$('.slideUl').slideUp('slow');
		$('.iconClose').hide();
		$('.lineBox').show();
		scrollAnimate(this);
	});
	//点击大于960时导航的跳转标签
	$('.firstUl span').on('click', function() {
		clearStyle('span', '.firstUl');
		$(this).attr('class', 'aactive');
	});
	$('.tipBox span').on('click', function() {
		clearStyle('span', '.tipBox');
		$(this).attr('class', 'spanactive');
		scrollAnimate(this);
	});
	$('.firstUl li span').on('click', function() {
		scrollAnimate(this);
	});
	/**
	*页面滚动的方法
	*@param  target  点击的目标，以此获取需要滑动的目标
	**/
	function scrollAnimate(target) {
		isChareHeight = false;
		var targetName = $(target).attr('target');
	    let targetHeight = $(targetName).offset().top;
	    let body = $('body, html');
		body.animate({scrollTop: targetHeight}, 500, function() {
				isChareHeight = true;
				chargeHeight(targetHeight);
		});
	}
})
	
/**
*在进入页面的时候判断浏览器宽度，以便控制顶部颜色
**/
function initColor() {
	var top = $(document).scrollTop(),
	    headerDom = $('.pageHomeBox'),
	    screenWidth = window.innerWidth;

	if (screenWidth < 960) {
		headerDom.css('background', '#000');
	}
	if (top > 4) {
		headerDom.css('background', '#000');
	}
	chargeHeight(top);
}
/**
*清除当前导航栏样式
*@param  domChild  需要清除的目标元素
*@param  domParent  需要清除的父dom元素
**/
function clearStyle(domChild, domParent) {
	var domArr = typeof domParent != 'undefined' ? $(domParent).find(domChild) : $(domChild) 
	, arrLength = domArr.length
	, x = 0;
	for (x; x < arrLength; x++) {
		$(domArr[x]).removeAttr('class');
	}
}

/**
*判断高度，以此对需要作出变化的元素进行改变
*@param  tipTop  当前滚动条的高度
**/
function chargeHeight(tipTop) {
    console.log($(document).scrollTop());
	var navigatorDom = $('.firstUl').find('span'),
	    tipBoxDom = $('.tipBox').find('span');

	if (tipTop < 1061 && tipTop >= 0) {
		clearStyle('span', '.firstUl');
		clearStyle('span', '.tipBox');
		navigatorDom.eq(4).addClass('aactive');
		tipBoxDom.eq(0).addClass('spanactive');
	} else if (tipTop >= 1061 && tipTop < 1931) {
		clearStyle('span', '.firstUl');
		clearStyle('span', '.tipBox');
		navigatorDom.eq(3).addClass('aactive');
		tipBoxDom.eq(1).addClass('spanactive');
	} else if (tipTop >= 1931 && tipTop < 2906) {
		clearStyle('span', '.firstUl');
		clearStyle('span', '.tipBox');
		navigatorDom.eq(2).addClass('aactive');
		tipBoxDom.eq(2).addClass('spanactive');
	} else if (tipTop >= 2906 && tipTop < 3743) {
		clearStyle('span', '.firstUl');
		clearStyle('span', '.tipBox');
		navigatorDom.eq(1).addClass('aactive');
		tipBoxDom.eq(3).addClass('spanactive');
	} else {
		clearStyle('span', '.firstUl');
		clearStyle('span', '.tipBox');
		navigatorDom.eq(0).addClass('aactive');
		tipBoxDom.eq(4).addClass('spanactive');
	}
}
