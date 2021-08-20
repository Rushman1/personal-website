(function(baseCode) {
	'use strict';
	baseCode(window.jQuery, window, document, window.utilities);
}(function($, window, document, utils) {
	var options = {};
	var count = 0;
	$(function() {
		
		window.setTimeout(() => {
			options = optionList[count];
			count = ++count;
			moveBox();
		}, 5000);

		// Button Clicks
		$(document).on('click', '#next-button', function(){
			$(".popover").hide();
			if(count>=optionList.length) return;
			options = optionList[count];
			count = ++count;
			moveBox();
		});
	});
	// Wrappers

	// AJAX Functions

	// Functions
	function getRandomInt(max){
		return Math.floor(Math.random()*max);
	}

	function moveBox(){
		var mvBox = document.getElementById('my-avatar');
		var popover = new bootstrap.Popover(mvBox, options);
		var x = $(mvBox).css('left');
		var y = $(mvBox).css('top');
		var height = $(mvBox).css('height');
		var width = $(mvBox).css('width');

		var $testimonials = $("#testimonials");
		var $testWidth = parseInt($($testimonials).css('width'));
		var $testHeight = parseInt($($testimonials).css('height'));

		var newX = getRandomInt($testWidth - parseInt(width));
		var newY = getRandomInt($testHeight - parseInt(height));
		
		$(mvBox).animate({
			left: positions[count-1].x,
			top: positions[count-1].y
		},{
			duration: 400,
			complete: function(){
				showPopup(popover);
			}
		});
	}

	function showPopup(popover){
		popover.show();
	}
	// Dynamic Buttons
}));