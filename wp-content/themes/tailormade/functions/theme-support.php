<?php
	
// Adding WP Functions & Theme Support
function joints_theme_support()
{

	// Add WP Thumbnail Support
	add_theme_support('post-thumbnails');
	
	// Default thumbnail size
	set_post_thumbnail_size(125, 125, true);

	// Add RSS Support
	add_theme_support('automatic-feed-links');
	
	// Add Support for WP Controlled Title Tag
	add_theme_support('title-tag');
	
	// Add HTML5 Support
	add_theme_support(
		'html5',
		array(
			'comment-list',
			'comment-form',
			'search-form',
		)
	);

	add_theme_support('custom-logo', array(
		'height' => 100,
		'width' => 400,
		'flex-height' => true,
		'flex-width' => true,
		'header-text' => array('site-title', 'site-description'),
	));
	
	// Adding post format support
	add_theme_support(
		'post-formats',
		array(
			'aside',             // title less blurb
			'gallery',           // gallery of images
			'link',              // quick link to other site
			'image',             // an image
			'quote',             // a quick quote
			'status',            // a Facebook like status update
			'video',             // video
			'audio',             // audio
			'chat'               // chat transcript
		)
	);

	if (!defined('IMG_PATH')) {
		define('IMG_PATH', get_stylesheet_directory_uri() . '/assets/images');
	}
	if (!defined('ASSETS_PATH')) {
		define('ASSETS_PATH', get_stylesheet_directory_uri() . '/assets');
	}
	if (!defined('BASE_PATH')) {
		define('BASE_PATH', get_bloginfo('url'));
	}
	
	
	// Set the maximum allowed width for any content in the theme, like oEmbeds and images added to posts.
	$GLOBALS['content_width'] = apply_filters('joints_theme_support', 1200);

} /* end theme support */

add_action('after_setup_theme', 'joints_theme_support');

function redirect_404s()
{
	if (is_404()) {
		wp_redirect(home_url(), '301');
	}
}
add_action('wp_enqueue_scripts', 'redirect_404s');


// Do only once to copy the enqueued handles then comment this out
//  add_action( 'wp_print_scripts', 'wsds_detect_enqueued_scripts' );
// function wsds_detect_enqueued_scripts() {
// 	global $wp_scripts;
// 	foreach( $wp_scripts->queue as $handle ) :
// 		echo $handle . ' | ';
// 	endforeach;
// }



add_filter('script_loader_tag', 'wsds_defer_scripts', 10, 3);
function wsds_defer_scripts($tag, $handle, $src)
{

	// The handles of the enqueued scripts we want to defer
	$defer_scripts = array(
		'admin-bar',
		'contact-form-7',
		'snazzymaps-js',
		'google_maps',
		'foundation-js',
		'main-js',
	);

	if (in_array($handle, $defer_scripts)) {
		return '<script src="' . $src . '" defer="defer" type="text/javascript"></script>' . "\n";
	}

	return $tag;
}


// Async load
function departika_async_scripts($url)
{
	if (strpos($url, '#asyncload') === false)
		return $url;
	else if (is_admin())
		return str_replace('#asyncload', '', $url);
	else
		return str_replace('#asyncload', '', $url) . "' async='async";
}
add_filter('clean_url', 'departika_async_scripts', 11, 1);


/**
 * The filter. It receives the text of the <script> element prepared 
 * to be put in the page. It appends a <noscript> element after each <script>
 * element and returns the new string.
 *
 * @param string $tag
 * @return string
 */
function add_noscript_tag($tag)
{
	$noScript = <<<END
<noscript>
This functionality is implemented using Javascript.
</noscript>
END;

	return str_replace('</script>', '</script>' . $noScript, $tag);
}

// Hook it into WP
add_filter('script_loader_tag', 'add_noscript_tag');