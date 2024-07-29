var $window = window,
    $viewports = {
        small: 0,
        medium: 740,
        large: 1024,
        xlarge: 1440
    };

$(document).ready(() => {
    $('#nav-btn').on('click', (e) => {
        e.preventDefault()
        scrollToElement('#main')
    })
    

    if ($($window).width() < $viewports.medium) {
        $('#menu-item-61').on('click', (e) => {
            $('#menu').css('display', 'none')
        })
    
        $('#menu-item-62').on('click', (e) => {
            $('#menu').css('display', 'none')
        })
        
    }


    $('.menu-item-36').on('mouseover', (e) => {
        e.preventDefault()
        $('.menu-item-icon').css('color', '#8f0728');
    })
    $('.menu-item-36').on('mouseout', (e) => {
        e.preventDefault()
        $('.menu-item-icon').css('color', '#fff');
    })
})


function scrollToElement( target ) {
    var topoffset = 30
    var speed = 500
    var destination = $( target ).offset().top - topoffset
    $('html:not(:animated),body:not(:animated)').animate( { scrollTop: destination}, speed, function() {
        window.location.hash = target
    })
    return false
}

