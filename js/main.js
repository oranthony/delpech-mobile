/**
 * Created by anthonyloroscio on 12/07/2016.
 */
$(document).ready(function() {
    $('#simple-menu').sidr();
});

$(document).ready(function() {
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });
});