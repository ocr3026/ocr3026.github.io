$(document).ready(function() {
// Reposition some divs in Sandvox page default layout
	$('#sitemenu-container').insertBefore('#page-container');
// Add New Div mainBanner and position it after sitement and before #page-container
	$('<div></div>').attr('id','mainBanner').insertBefore('#page-container');
// Update all img attributes in main content area
$('#page img').removeAttr('width').removeAttr('height');
//Reposition sidebar-container div to be after #main div
	$('#sidebar-container').insertAfter($('#main'));
//Reposition page-bottom (footer) div to be after #main div
	$('#page-bottom').appendTo($('#page-container'));
// Change sitemenu-content div name
	$('#sitemenu-content').attr('id','nav');

// Mobile menu
    var $nav = $('#nav');
    $nav.click(function (e) {
        console.log('Click', e.target);
        var $target = $(e.target);
        if ($target.is($nav)) {
            $nav.toggleClass('open');
        }
    });
});
