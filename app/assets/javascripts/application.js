require(['jquery', 'postmonger'], function ($, Postmonger) {
    console.log('required jquery and postmonger');
    var connection = new Postmonger.Session();
    console.log('connection: ');
    console.log(connection);

    connection.on('initActivity', function (payload) {
        console.log('on initActivity');
        console.log('payload:');
        console.log(payload);
    });

    connection.on('requestedTokens', function (tokens) {
        console.log('on requestedTokens');
        console.log('tokens:');
        console.log(tokens);
    });

    connection.on('requestedEndpoints', function (endpoints) {
        console.log('on requestedEndpoints');
        console.log('endpoints:');
        console.log(endpoints);
    });

    connection.on('clickedNext', function () {
        console.log('on clickedNext');
    });

    connection.on('clickedBack', function () {
        console.log('on clickedBack');
    });

    connection.on('gotoStep', function () {
        console.log('on gotoStep');
    });

    connection.on('requestedInteractionDefaults', function (settings) {
        console.log('on requestedInteractionDefaults');
        console.log('settings:');
        console.log(settings);
    });

    connection.on('requestedInteraction', function (interaction) {
        console.log('on requestedInteractionDefaults');
        console.log('interaction:');
        console.log(interaction);
    });

    $(document).ready(function() {
        console.log('document.ready()');
        connection.trigger('ready');
        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');

        $('#save-btn').on('click', function() {
            console.log('save clicked');
            connection.trigger('save');
            connection.trigger('destroy');
        });
    });
});