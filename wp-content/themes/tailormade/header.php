<!doctype html>
  <html class="no-js"  <?php language_attributes(); ?>>
	<head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-RWS1KHJ1SJ"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-RWS1KHJ1SJ');
	</script>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta class="foundation-mq">
	<?php if ( ! function_exists( 'has_site_icon' ) || ! has_site_icon() ) { ?>
	<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.png">
	<link href="<?php echo get_template_directory_uri(); ?>/assets/images/apple-icon-touch.png" rel="apple-touch-icon" />	
	<?php } ?>
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="stylesheet" href="https://use.typekit.net/owi1myz.css">
	<?php wp_head(); ?>
	<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#property=5b9036e829b61c0011779b08&product=inline-share-buttons' async='async'></script>
	<link rel="stylesheet" href="//cdn.materialdesignicons.com/2.6.95/css/materialdesignicons.min.css" rel="preload" as="style">
	<script>(function(d){var s = d.createElement("script");s.setAttribute("data-account", "OQBfWXhU5x");s.setAttribute("src", "https://cdn.userway.org/widget.js");(d.body || d.head).appendChild(s);})(document)</script><noscript>Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website accessibility</a></noscript>
	<script>
			jQuery(function($) {
				$(document).ready(function() {
					/*!
					* Simple Age Verification (https://github.com/Herudea/age-verification))
					*/
					var modal_content, modal_screen;
					$(document).ready(function() {
						av_legality_check();
					});
					av_legality_check = function() {
						if ($.cookie('is_legal') == "yes") {} else {
							av_showmodal();
							$(window).on('resize', av_positionPrompt);
						}
					};
					av_showmodal = function() {
						modal_screen = $('<div id="modal_screen" class="age_gate"></div>');
						modal_content = $('<div id="modal_content" style="display:none" role="dialog" aria-modal="true"></div>');
						var modal_content_wrapper = $('<div id="modal_content_wrapper" class="content_wrapper bubbles" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/age-gate.jpg" />);"></div>');
						var modal_regret_wrapper = $('<div id="modal_regret_wrapper" class="content_wrapper" style="display:none;"></div>');
						var content_agegate = $(
							`
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.svg" alt="Tailor Made logo" />
								<h1 class="text-center padding-small">To enjoy our craft, you must be of legal drinking age.<br> Are you at least 21 years old?</h1>
								<div class="agree"><label for="agree" class="show-for-sr">I agree to the Terms of Service and Privacy Policy</label><input type="checkbox" id="agree" class="btn-default" required name="agree" role="tab" aria-selected="true" tabindex="1"><div>I agree to the <a data-fancybox data-type="iframe" data-src="<?php echo bloginfo('url'); ?>/terms-of-service.html" href="javascript:;" aria-disabled="true">Terms of Service</a> and <a data-fancybox data-type="iframe" data-src="<?php echo bloginfo('url'); ?>/privacy-policy.html" href="javascript:;" aria-disabled="true">Privacy Policy</a></div></div>
								<nav class="padding-small"><ul><li><a href="#" class="av_btn btn-default" rel="yes" id="yes" role="tab" tabindex="2">Yes</a></li><li><a href="#" class="av_btn btn-default" rel="no" id="no" role="tab" tabindex="3">No</a></li></nav>	
							`
						);
						var regret_content = $(
							` 
								<div class="regret-wrap">
									<div class="regret-content">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/stamp-single.png" alt="decorative">
										<h2>Sorry, you must be at least 21 years old to enter this site.</h2>
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/age-gate-logo.png" alt="Logo image">
									</div>
								</div>
							`
						);
						modal_content_wrapper.append(content_agegate);
						modal_regret_wrapper.append(regret_content);
						modal_content.append(modal_content_wrapper, modal_regret_wrapper);
						$('body').append(modal_screen, modal_content);
						av_positionPrompt();
						modal_content.find('a.av_btn').on('click', av_setCookie);
					};
					av_setCookie = function(e) {
						e.preventDefault();
						var is_legal = $(e.currentTarget).attr('rel');
						$.cookie('is_legal', is_legal, {
							expires: 30,
							path: '/'
						});
						if($("#agree").is(':checked') && (is_legal == "yes" )) {
							av_closeModal();
							$(window).off('resize'); 
						} else if (is_legal == "no") {
							av_showRegret();
						} else if (!$("#agree").is(':checked')) {
							alert('You must agree to the terms of service.');
						} else if (is_legal == "no") {
							av_showRegret();
						}
					};
					av_closeModal = function() {
						modal_content.fadeOut();
						modal_screen.fadeOut();
					};
					av_showRegret = function() {
						modal_screen.addClass('nope');
						modal_content.find('#modal_content_wrapper').hide();
						modal_content.find('#modal_regret_wrapper').show();
					};
					av_positionPrompt = function() {
						var top = ($(window).outerHeight() - $('#modal_content').outerHeight()) / 2;
						var left = ($(window).outerWidth() - $('#modal_content').outerWidth()) / 2;
						modal_content.css({
							'top': top,
							'left': left
						});
						if (modal_content.is(':hidden') && ($.cookie('is_legal') != "yes")) {
							modal_content.fadeIn('slow');
						}
					};
				});
			});
			jQuery(function($) {
				$(document).ready(function() {
					$('#modal_regret_wrapper').on('click', function() {
						$(this).hide();
						$('#modal_content_wrapper').show();
					});
				});
			});
		</script>
	</head>	
	<body <?php body_class(); ?>>
		<div class="off-canvas-wrapper">		
			<?php get_template_part( 'parts/content', 'offcanvas' ); ?>
			<div class="off-canvas-content" data-off-canvas-content>
				<header class="header" role="banner">
					 <?php get_template_part( 'parts/nav', 'title-bar' ); ?>
				</header> <!-- end .header -->