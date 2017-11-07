jQuery(document).ready(function($) {

	"use strict";

	// Sticky Menu
	var stickyNavTop = $('#top-bar').offset().top;

	var stickyNav = function(){
	var scrollTop = $(window).scrollTop();

	if (scrollTop > 0) {
		$('#top-bar').addClass('sticky');
	} else {
		$('#top-bar').removeClass('sticky');
	}
	};

	stickyNav();

	$(window).scroll(function() {
	  stickyNav();
	});

	// Menu
	$('#nav-wrapper .menu').slicknav({
		prependTo:'#slick-mobile-menu',
		label:'Show Menu',
		allowParentLinks: true
	});


	$('#top-search a').on('click', function ( e ) {
		e.preventDefault();
    	$('#show-search').animate({width:'toggle'});
    });
	$('#show-search a').on('click', function ( e ) {
		e.preventDefault();
    	$('#show-search').animate({width:'toggle'});
    });

	// Fitvids
	$(document).ready(function(){
		$(".sp-container, .post-video-full").fitVids();
	});

});
