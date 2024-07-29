import scrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'


var $window = window,
    $viewports = {
        small: 0,
        medium: 740,
        large: 1024,
        xlarge: 1440
    },
    controller = new scrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%", refreshInterval: 400}}),
    parallaxOffset,
    parallaxSmallOffset,
    wineBlockOffset,
    wineSingleOffset,
    parallaxEndVal

    function getAnimationVals() {
        if ($($window).width() < $viewports.medium) {
            parallaxOffset = 500
            parallaxSmallOffset = 800
            wineBlockOffset = -100
            wineSingleOffset = 100
        }
        // if ($($window).width() >= $viewports.medium && $($window).width() < $viewports.large) {}
        if ($($window).width() >= $viewports.medium) {
            parallaxOffset = 100
            parallaxSmallOffset = 600
            wineBlockOffset = -300
            wineSingleOffset = 100
        }
        // if ($($window).width() > $viewports.xlarge) {}
    }



    $(function($) {
        $(document).ready((e) => {

            // Initiat values
            getAnimationVals()
            // Initiat values on resize
            $($window).resize((e) => {
                getAnimationVals()
            })


            // ANIMATIONS
            // Background Parallax

                var scene1 = new scrollMagic.Scene({
                    triggerElement: '.parallax',
                    offset: parallaxOffset,
                })
                .setTween(TweenMax.staggerFromTo('.parallax', 3, {backgroundPosition: 'left bottom'}, {backgroundPosition: 'left center'}, 0.15))
                .addTo(controller)

                // Background Parallax Small
                // var parallaxController = new scrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}})
                // var scene2 = new scrollMagic.Scene({
                //     triggerElement: '.parallax-small',
                //     offset: parallaxSmallOffset,
                // })
                // .setTween(TweenMax.staggerFromTo('.parallax-small', 1, {backgroundPosition: "50% 0px"}, {backgroundPosition: "50% 160px"}, 0.15))
                // .addTo(parallaxController)

                var crestController = new scrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%", refreshInterval: 400}})
                var scene3 = new scrollMagic.Scene({
                    triggerElement: '.parallax',
                    offset: 0,
                    duration: 900,
                })
                .setTween(TweenMax.staggerFromTo('.home .circle-logo', 2, {css:{rotation: -150}}, {css:{rotation: 40}}, 0.25))
                .addTo(crestController)



                $('.feature-block').each((index, obj) => {
                    // Wine Feature Blocks
                    var wineBlockController = new scrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "150%", refreshInterval: 400}});         
                    var bottleTween1 = new TimelineMax ()
                        .add([
                            TweenMax.staggerFromTo($(obj).children('.bottle'), 2, {y: '-40%'}, {y: '0%'}, 1)
                        ]);
                    var scene4 = new scrollMagic.Scene({
                            triggerElement: obj,
                            offset: wineBlockOffset,
                        })
                        .setTween(bottleTween1)
                        .addTo(wineBlockController);

                    

                    $(obj).on("scroll", function () {
                        controller.update(true);
                    });


                    // $(obj).on('mouseover', (e) => {
                    //     $(obj).children('.crest').css('opacity', '1')
                    // })
                    // $(obj).on('mouseout', (e) => {
                    //     $(obj).children('.crest').css('opacity', '0')
                    // })

                })
                


            
                    // Wine Single Bottle       
                    //build tween
                    // var tween4 = new TimelineMax()
                    //     .add([
                    //         TweenMax.staggerFromTo('.parallax-single-bottle', 3, {css:{transform: 'translateY(0%)'}}, {css:{transform: 'translateY(20%)'}}, 1.1)
                    //     ]);
                    // // build scene
                    // var scene = new scrollMagic.Scene({
                    //         triggerHook: 		'onEnter',
                    //         triggerElement: 	'.wine-feature',
                    //         offset: wineSingleOffset,
                    //     })
                    //     .setTween(tween4)
                    //     .addTo(controller);

            })
        })



   
