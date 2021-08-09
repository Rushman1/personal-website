(function(baseCode) {
	'use strict';
	baseCode(window.jQuery, window, document);
}(function($, window, document) {
	$(function() {
		
		// Button Clicks

		// var inter = window.setInterval(() => {
		// 	var left = parseInt($(".red").css('left'));
		// 	var top = parseInt($(".red").css('top'));
		// 	const parent = $('.red').parent();

		// 	var parentWidth = parseInt(parent.css('width')) - parseInt($('.red').css('width'));
		// 	var parentHeight = parseInt(parent.css('height')) - parseInt($('.red').css('height'));
			
		// 	var rTop = getRandomInt(parentHeight);
		// 	var rLeft = getRandomInt(parentWidth);

		// 	setBlockPosition(rTop, rLeft);
		// }, 500);

		// window.setTimeout(() => {
		// 	clearInterval(inter);
		// }, 60000);

	});
	// Wrappers

	// AJAX Functions

	// Functions
	function setBlockPosition(top, left){
		const block = $(".red");
		block.css({top: top + 'px', left: left + 'px'});
		$("#coords").html($("#coords").html() + top + ':' + left + '<br/>');
	}
	function getRandomInt(max){
		return Math.floor(Math.random()*max);
	}
	// Dynamic Buttons
}));