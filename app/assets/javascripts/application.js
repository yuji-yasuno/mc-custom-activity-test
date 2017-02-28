require(['jquery', 'postmonger'], function ($, Postmonger) {
    console.log('required jquery and postmonger');
    var connection = new Postmonger.Session();
    console.log('connection: ');
    console.log(connection);

    var activityPayload = {};

    connection.on('initActivity', function (payload) {
        console.log('=== on initEvent ===');
        console.log('payload:');
        console.log(payload);
        activityPayload = payload;
    });

    connection.on('requestedTokens', function (tokens) {
        console.log('=== on requestedTokens ===');
        console.log('tokens:');
        console.log(tokens);
    });

    connection.on('requestedEndpoints', function (endpoints) {
        console.log('=== on requestedEndpoints ===');
        console.log('endpoints:');
        console.log(endpoints);
    });

    connection.on('clickedNext', function () {
        console.log('=== on clickedNext ===');
        activityPayload.metaData = activityPayload.metaData || {};
        activityPayload.metaData.isConfigured = true;
        connection.trigger('updateActivity', activityPayload);
        console.log('activityPayload:');
        console.log(activityPayload);
        console.log('triggered updateActivity.');
        //connection.trigger('destroy');
        //console.log('triggered destroy.');
    });

    connection.on('clickedBack', function () {
        console.log('=== on clickedBack ===');
    });

    connection.on('gotoStep', function () {
        console.log('=== on gotoStep ===');
    });

    connection.on('requestedInteractionDefaults', function (settings) {
        console.log('=== on requestedInteractionDefaults ===');
        console.log('settings:');
        console.log(settings);
    });

    connection.on('requestedInteraction', function (interaction) {
        console.log('=== on requestedInteractionDefaults ===');
        console.log('interaction:');
        console.log(interaction);
    });

    $(document).ready(function() {
        console.log('--- document.ready() ---');
        connection.trigger('ready');
        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');

        $('#save-btn').on('click', function() {
            console.log('---  save clicked ---');
            activityPayload.metaData = activityPayload.metaData || {};
            activityPayload.metaData.isConfigured = true;
            connection.trigger('updateActivity', activityPayload);
            console.log('activityPayload:');
            console.log(activityPayload);
            console.log('triggered updateActivity.');
            //connection.trigger('destroy');
            //console.log('triggered destroy.');
        });
    });
});