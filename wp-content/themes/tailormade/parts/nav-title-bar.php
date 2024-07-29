<?php 

$menu_icon = file_get_contents(get_template_directory_uri() . '/assets/images/menu.svg');
$close_icon = file_get_contents(get_template_directory_uri() . '/assets/images/close.svg');
$logo = file_get_contents(get_template_directory_uri() . '/assets/images/logo.svg');
$logo_circle = file_get_contents(get_template_directory_uri() . '/assets/images/logo-circle.svg');
$logo_crest = get_template_directory_uri() . '/assets/images/logo-circle.png';
?>

<div class="top-bar" id="menu" data-closable="fade-out" data-animate="fade-in fade-out">
	<div class="tm-asset-container">
		<div class="tm-close hide-for-medium" data-close>
			<?php echo $close_icon; ?>	
		</div>
	</div>
	<div class="logo-mobile hide-for-medium">
			<?php echo $logo_circle; ?>
	</div>
	<div class="mobile-menu hide-for-medium">
		<?php 
	wp_nav_menu(array(
		'menu' => 'Mobile Menu',
		'container_class' => 'mobile-menu-bar',
		'items_wrap' => '<ul class="dropdown menu vertical align-center" data-dropdown-menu>%3$s</ul>',
	));
	?>
	</div>
	<div class="menu-left show-for-medium">
		<?php 
	wp_nav_menu(array(
		'menu' => 'menu-left',
		'container_class' => 'menu-bar-left',
		'items_wrap' => '<ul class="dropdown menu vertical align-center" data-dropdown-menu><li>%3$s</li><li><span class="menu-item-icon mdi mdi-chevron-down"></span></li></ul>',
	));
	?>
	</div>
	<div class="logo show-for-medium">
		<a href="<?php echo bloginfo('url'); ?>">
			<?php echo $logo; ?>
		</a>
	</div>
	<div class="menu-right show-for-medium">
		<?php 
	wp_nav_menu(array(
		'menu' => 'menu-right',
		'container_class' => 'menu-bar-right',
		'items_wrap' => '<ul class="dropdown menu vertical align-center" data-dropdown-menu>%3$s</ul>',
	));
	?>
	</div>
	<div class="menu-corner show-for-medium">
		<?php 
	wp_nav_menu(array(
		'menu' => 'Menu Corner',
		'container_class' => 'menu-corner',
		'items_wrap' => '<ul class="dropdown menu vertical align-center" data-dropdown-menu><li>%3$s</li><li><img src="' . get_template_directory_uri() . '/assets/images/stamp.png" alt="Stamp Image"></li></ul>',
	));
	?>
	</div>
</div>

<div class="title-bar" data-responsive-toggle="menu" data-hide-for="medium">
	<a href="<?php echo bloginfo('url'); ?>">
		<div class="logo hide-for-medium">
			<?php echo $logo; ?>
		</div>
	</a>
	<div class="tm-menu" data-toggle>
		<?php echo $menu_icon; ?>
	</div>
</div>