// $('#address_search').append('<div class="search_item"><div id="radius_in_submit"><input class="slp_ui_button" value="Find Locations" id="addressSubmit" type="submit"></div></div>')


$('#searchForm').prepend('<h1>Where to Buy</h1>');

$('#addressSubmit').val('Find My Wine');

$('#addy_in_radius .length_6, #addy_in_address .text').css('display', 'none');
$('#addy_in_radius').prepend('<label id="radiusClick" for="radiusSelect">Radius <i class="mdi mdi-chevron-down"></i></label>')
$('#addy_in_address').prepend('<label for="addressInput">Zip Code</label>')

$('#radiusSelect').prepend('<option selected="selected" value=""></option>');


$('#radiusClick').mouseover(function(){
    var $this = $(this);
    var $input = $('#' + $(this).attr('for')); 
    if ($input.is("select") && !$('.lfClon').length) {
        var $clon = $input.clone();
        var getRules = function($ele){ return {
            position: 'absolute',
            left: $ele.offset().left,
            top: $ele.offset().top,
            width: $ele.outerWidth(),
            height: $ele.outerHeight(),
            opacity: 0,
            margin: 0,
            padding: 0
        };};
        var rules = getRules($this);
        $clon.css(rules);
        $clon.on("mousedown.lf", function(){
            $clon.css({
                marginLeft: $input.offset().left - rules.left,
                marginTop: $input.offset().top - rules.top,
            });
            $clon.on('change blur', function(){
                $input.val($clon.val()).show();
                $clon.remove();
            });
            $clon.off('.lf');
        });
        $clon.on("mouseout.lf", function(){
            $(this).remove();
        });
        $clon.prop({id:'',className:'lfClon'});
        $clon.appendTo('body');
    }
});
