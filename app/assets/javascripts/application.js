require(['jquery', 'postmonger'], function ($, Postmonger) {
    var connection = new Postmonger.Session();

    connection.on('initActivity', function () {
        console.log('on initActivity');
    });

    connection.on('requestedTokens', function (tokens) {
        console.log('on requestedTokens');
    });

    connection.on('requestedEndpoints', function () {
        console.log('on requestedEndpoints');
    });

    connection.on('clickedNext', function () {
        console.log('on ');
    });

    connection.on('clickedBack', function () {
        console.log('on clickedNext');
    });

    connection.on('requestedInteractionDefaults', function () {
        console.log('on requestedInteractionDefaults');
    });

    connection.on('requestedInteractionDefaults', function () {
        console.log('on requestedInteractionDefaults');
    });

    $(window).load(function() {
        connection.trigger('ready');
        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');
    });
});