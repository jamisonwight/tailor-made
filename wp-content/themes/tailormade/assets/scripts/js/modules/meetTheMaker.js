import anime from 'animejs'

let about_block = document.getElementById('about-block'),
    about = document.getElementById('about'),
    close_content = document.getElementById('close-content'),
    click_trigger = document.getElementById('meet-maker'),
    about_content = document.querySelector('#about-block .content'),
    meet_maker_content = document.querySelector('.meet-maker-content'),
    bottle = document.getElementById('about-bottle'),
    $window = window,
    $viewports = {
        small: 0,
        xsmall: 480,
        medium: 740,
        large: 1024,
        xlarge: 1440
    },
    translate_0 = '0%',
    about_translate_open,
    about_translate_close,
    bottle_translate_in,
    bottle_translate_out,
    about_height_in,
    about_height_out

    function getTranslateVals() {
        if ($($window).width() < $viewports.xsmall) {
            about_translate_open = '55vw'
            about_translate_close = '75vw'
            about_height_in = '1370px'
            about_height_out = '800px'
            getMobileAnimations()
        }
        if ($($window).width() > $viewports.xsmall && $($window).width() < $viewports.medium) {
            about_translate_open = '55vw'
            about_translate_close = '75vw'
            about_height_in = '1070px'
            about_height_out = '800px'
            getMobileAnimations()
        }
        if ($($window).width() >= $viewports.medium && $($window).width() < $viewports.large) {
            about_translate_open = '55vw'
            about_translate_close = '75vw'
            about_height_in = '1185px'
            about_height_out = '700px'
            getMobileAnimations()
        }
        if ($($window).width() >= $viewports.large && $($window).width() < $viewports.xlarge) {
            about_translate_open = '115vw'
            about_translate_close = '95vw'
            bottle_translate_in = '-110%'
            bottle_translate_out = '0%'
            getDesktopAnimations()
        }
        if ($($window).width() > $viewports.xlarge) {
            about_translate_open = '95vw'
            about_translate_close = '85vw'
            bottle_translate_in = '-125%'
            bottle_translate_out = '5%'
            getDesktopAnimations()
        }
    }

    function getMobileAnimations() {
        // Open Animations
        click_trigger.addEventListener('click', (e) => {
            e.preventDefault()

            new Promise((resolve, reject) => {
                anime({
                    targets: about,
                    height: about_height_in,
                    easing: 'easeInOutSine',
                })
                anime({
                    targets: about_block,
                    easing: 'easeInOutSine',
                    opacity: 0,
                    duration: 600,
                    complete: () => {
                        console.log('animation finished')
                        resolve();
                    }
                })
                
            })
            .then(() => {
                about_content.style.display = 'none'
                setTimeout(() => {
                    meet_maker_content.style.display = 'block'
                    anime({
                        targets: about_block,
                        opacity: 1,
                        translateY: ['-50%', '0%'],
                        easing: 'easeInOutSine',
                    })
                }, 0)
            })
            .catch((error) => {
                console.log(error)
            })
            
        })

        // Close Animations
        close_content.addEventListener('click', (e) => {
            e.preventDefault()

            new Promise((resolve, reject) => {
                anime({
                    targets: about,
                    height: about_height_out,
                    easing: 'easeInOutSine',
                })
                anime({
                    targets: about_block,
                    easing: 'easeInOutSine',
                    opacity: 0,
                    duration: 600,
                    complete: () => {
                        console.log('animation finished')
                        resolve();
                    }
                })
            })
            .then(() => {
                meet_maker_content.style.display = 'none'
                setTimeout(() => {
                    about_content.style.display = 'block'
                    anime({
                        targets: about_block,
                        opacity: 1,
                        translateY: ['-50%', '0%'],
                        easing: 'easeInOutSine',
                    })
                }, 0)
            })
            .catch((error) => {
                console.log(error)
            })
            
        })
    }

    function getDesktopAnimations() {
        // Open Animations
        click_trigger.addEventListener('click', (e) => {
            e.preventDefault()

            new Promise((resolve, reject) => {
                anime({
                    targets: about_block,
                    translateX: about_translate_open,
                    easing: 'easeInOutSine',
                    complete: () => {
                        console.log('animation finished')
                        resolve();
                    }
                })
            })
            .then(() => {
                about_content.style.display = 'none'
                setTimeout(() => {
                    meet_maker_content.style.display = 'block'
                    anime({
                        targets: about_block,
                        translateX: translate_0,
                        easing: 'easeInOutSine',
                    })
                    anime({
                        targets: meet_maker_content,
                        translateX: translate_0,
                        translateY: ['-50%', '-50%'],
                        easing: 'easeInOutSine',
                    })
                    anime({
                        targets: bottle,
                        translateX: ['50%' , bottle_translate_in],
                        easing: 'easeInOutSine',
                    })
                }, 0)
            })
            .catch((error) => {
                console.log(error)
            })
            
        })

        // Close Animations
        close_content.addEventListener('click', (e) => {
            e.preventDefault()

            new Promise((resolve, reject) => {
                anime({
                    targets: about_block,
                    translateX: about_translate_close,
                    easing: 'easeInOutSine',
                    complete: () => {
                        console.log('animation finished')
                        resolve();
                    }
                })
            })
            .then(() => {
                meet_maker_content.style.display = 'none'
                setTimeout(() => {
                    about_content.style.display = 'block'
                    anime({
                        targets: about_block,
                        translateX: translate_0,
                        easing: 'easeInOutSine',
                    })
                    anime({
                        targets: about_content,
                        translateX: translate_0,
                        translateY: ['-50%', '-50%'],
                        easing: 'easeInOutSine',
                    })
                    anime({
                        targets: bottle,
                        translateX: bottle_translate_out,
                        easing: 'easeInOutSine',
                    })
                }, 0)
            })
            .catch((error) => {
                console.log(error)
            })
            
        })
    }

$(document).ready((e) => {
    getTranslateVals()

    $($window).resize((e) => {
        getTranslateVals()
    })

    
})








