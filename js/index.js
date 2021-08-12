(function(baseCode) {
	'use strict';
	baseCode(window.jQuery, window, document);
}(function($, window, document) {
	$(function() {
		
		// Button Clicks

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