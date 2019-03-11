$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // Open or close navbar
        $('#sidebar').toggleClass('active');
        // Close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributess we use for for the open/cloded arrows
        // in our CSS
        $('a[aria-expanded=true').attr('aria-expanded', 'false')
    });

});

