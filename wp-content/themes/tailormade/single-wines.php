<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post();
$feature_image_id = get_post_thumbnail_id();
$feature_image_url_array = wp_get_attachment_image_src($feature_image_id, 'thumbnail-size', true);
$feature_image_url = $feature_image_url_array[0];
$shimmer = get_field('shimmer');
?>

<div class="wine-single" itemscope itemtype="http://schema.org/Product">
    <div class="grid-container full">
        <div class="grid-x wine-feature">
        <div itemprop="image" class="cell wine-feature-bottle large-5 full-bg parallax-small" style="background: <?php echo get_field('feature_background_color'); ?>;">
                <img class="parallax-single-bottle" src="<?php echo $feature_image_url; ?>" alt="<?php the_title(); ?>.' Bottle'">
                <div class="shimmer shimmer-<?php echo $shimmer; ?>">
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                    <div><?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> <?php echo get_field('product_subtitle'); ?> </div>
                </div>
            </div>
            <div class="cell wine-feature-content large-7">
                <div class="content">
                    <h1 itemprop="name"><?php the_title(); ?></h1>
                    <h2><?php echo get_field('product_subtitle'); ?></h2>
                    <p itemprop="description"><?php echo get_field('description'); ?></p>
                    <div class="button-group">
                        <a class="btn-black" href="<?php echo get_field('tasting_notes'); ?>">Tasting Notes</a>
                        <div class="social">
                            <span>Share</span>
                            <div class="sharethis-inline-share-buttons"></div>
                        </div>
                    </div>
                    <div class="nav-arrows">
                        <a href="<?php echo get_field('prev_wine'); ?>">
                            <span class="mdi mdi-arrow-left-drop-circle"></span>
                        </a>
                        <a href="<?php echo get_field('next_wine'); ?>">
                            <span class="mdi mdi-arrow-right-drop-circle"></span>
                        </a>
                    </div>
                </div>
                <div class="stamp">
                    <img src="<?php echo get_template_directory_uri() . '/assets/images/crest-black.png'; ?>" alt="Tailor Made Crest Logo">
                </div>
            </div>
        </div>

        <div class="grid-x wine-feature-custom">
            <div class="cell full-bg lazy-background" data-interchange="[<?php echo get_field('custom_background_mobile'); ?>, small], [<?php echo get_field('custom_background'); ?>, medium]">
                <div class="content">
                    <h1>A Custom Collection</h1>
                    <p>When something is made with extra quality and care, you know it.<br>
                    Our wines exemplify the difference those extra winemaking steps make.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<?php endwhile;
endif; ?>

<?php get_footer(); ?>