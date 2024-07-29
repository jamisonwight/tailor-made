<?php 
    /* Template Name: Home */

get_header();
?>

    <?php 
    $circle_logo = file_get_contents(get_template_directory_uri() . '/assets/images/logo-circle.svg');
    $arrow_down = file_get_contents(get_template_directory_uri() . '/assets/images/arrow-down.svg');
    $arrow_right = get_template_directory_uri() . '/assets/images/arrow-right.png';
    $bottle = get_template_directory_uri() . '/assets/images/bottle-cab-large.png';
    $crest = file_get_contents(get_template_directory_uri() . '/assets/images/crest-2.svg');
    $banner = (object)[
        'title' => get_field('title'),
        'description' => get_field('description'),
        'background' => get_field('banner'),
        'background_mobile' => get_field('banner_mobile')
    ];
    $about = (object)[
        'title' => get_field('about_title'),
        'description' => get_field('about_description'),
        'bottle' => get_field('about_bottle'),
        'background' => get_field('about_background'),
        'signature' => file_get_contents(get_template_directory_uri() . '/assets/images/signature.svg'),
        'occupation' => get_field('occupation')
    ];
    $meet_maker = (object)[
        'title' => 'Meet The Maker',
        'subheading' => get_field('meet_maker_subheading'),
        'description' => get_field('meet_maker_description'),
        'bio' => get_field('meet_maker_bio')
    ]

    ?>
    <div class="home">
        <div class="grid-container full">
            <div class="grid-x banner" itemscope itemtype="http://schema.org/Product">
                <div class="cell full-bg parallax" data-interchange="[<?php echo $banner->background_mobile; ?>, small], [<?php echo $banner->background; ?>, large]">
                    <div class="circle-logo" itemprop="brand">
                        <?php echo $circle_logo; ?>
                    </div>
                </div>
                <div id="nav-btn" class="banner-arrow">
                    <?php echo $arrow_down; ?>
                </div>
            </div>

            <div id="main" class="grid-x grid-margin-x grid-padding-x main" itemscope itemtype="http://schema.org/Product">
                <div class="cell">
                    <div class="content grid-x">
                        <h1 class="cell large-8 large-offset-2"><?php echo $banner->title; ?></h1>
                        <p class="cell large-8 large-offset-2" itemprop="description"><?php echo $banner->description ?></p>
                    </div>
                </div>
            </div>

            <div class="grid-x medium-up-2 feature-wines">
                <?php // Query Wines
                $args = array(
                    'post_type' => 'wines',
                    'orderby' => 'title',
                    'order' => 'ASC',
                );
                $wines = new WP_Query($args);

                if ($wines->have_posts()) : $index = 0;
                while ($wines->have_posts()) : $index++;
                $wines->the_post();
                $feature_image_id = get_post_thumbnail_id();
                $feature_image_url_array = wp_get_attachment_image_src($feature_image_id, 'thumbnail-size', true);
                $feature_image_url = $feature_image_url_array[0];
                ?>
                        <div id="block-<?php echo $index; ?>" class="cell feature-block feature-block-<?php echo $post->ID; ?>" style="background: <?php the_field('feature_background_color', $post->ID); ?>" itemscope itemtype="http://schema.org/Product">
                            <div class="crest parallax-crest" itemprop="brand">
                                <?php echo $crest; ?>
                            </div>
                            <div class="bottle">
                                <a title="<?php the_title(); ?>.' Bottle'" href="<?php the_permalink($post->ID); ?>"><img class="parallax-bottle" src="<?php echo $feature_image_url; ?>" alt="<?php the_title(); ?>.' Bottle'" itemprop="image"></a>
                            </div>
                            <div class="content">
                                <h3 itemprop="name" style="color:<?php the_field('text_color', $post->ID); ?> !important;"><?php the_title(); ?></h3>
                                <h4 style="color:<?php the_field('text_color', $post->ID); ?> !important;"><?php the_field('product_subtitle', $post->ID) ?></h4>
                                <a class="btn-black" href="<?php the_permalink($post->ID); ?>">View More</a>
                            </div>
                        </div>
                    <?php endwhile;
                    wp_reset_postdata(); ?> 
                <?php endif;
                wp_reset_query(); ?>
            </div>

            <div id="about" class="grid-x about full-bg parallax-about lazy-background" style="background: url(<?php echo $about->background; ?>);">
                <div id="about-block" class="cell about-container">
                    <img id="about-bottle" class="about-bottle" src="<?php echo $bottle; ?>" alt="About Featured Bottle">
                    <div class="content">
                        <div class="content-container">
                            <h1><?php echo $about->title; ?></h1>
                            <p><?php echo $about->description; ?></p>
<!--                             <span class="signature"><?php echo $about->signature; ?></span><br> -->
                            <span class="occupation"><?php echo $about->occupation; ?></span>
                        </div>
<!--
                        <div class="about-callout">
                            <div id="meet-maker" class="callout-content">
                                <h2>Meet the Maker</h2>
                                <img src="<?php echo $arrow_right; ?>" alt="Meet the Maker right nav arrow">
                            </div>
                            <p>Learn about Scot’s passion for Tailor Made.</p>
                        </div> 
-->
                    </div>
<!--
                    <div class="meet-maker-content">
                        <div class="meet-maker-title">
                            <h1><?php echo $meet_maker->title; ?></h1>
                            <span id="close-content" class="mdi mdi-close"></span>
                        </div>
                        <div class="grid-x body">
                            <div class="cell xlarge-8 description">
                                <h3><?php echo $meet_maker->subheading; ?></h3>
                                <?php echo $meet_maker->description; ?>
                            </div>
                            <div class="cell xlarge-4 bio">
                                <img class="lazy" src="<?php echo $meet_maker->bio; ?>" alt="Cabernet Sauvignon Bottle">
                                <span class="signature"><?php echo $about->signature; ?></span>
                                <span class="occupation"><?php echo $about->occupation; ?></span>
                            </div>
                        </div>
                    </div>
-->
                </div>
            </div>


            <div id="where-to-buy" class="grid-x where-to-buy">
                <div class="cell">
                    <h1>Where To Buy</h1>
                    <div><iframe src="https://www.vtinfo.com/PF/product_finder.asp?custID=TWG&theme=bs-paper&doFocus=0&category8=TAILOR MADE" width="100%" height="800" frameborder="0" scrolling="no" allow="geolocation;"></iframe></div>
                </div>
            </div>

        </div>
    </div>

<?php get_footer(); ?>