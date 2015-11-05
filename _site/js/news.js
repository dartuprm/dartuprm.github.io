
$(document).ready(function() {

        var updateFeed = function() {
            
            $('.social-feed-container').socialfeed({
                // FACEBOOK
                facebook: {
                    accounts: ['@uprmdart'],
                    limit: 5,
                    access_token: '150849908413827|a20e87978f1ac491a0c4a721c961b68c'
                },
             
                // Twitter
                twitter: {
                    accounts: ['@dart_uprm'],
                    limit: 5,
                    consumer_key: 'qzRXgkI7enflNJH1lWFvujT2P', // make sure to have your app read-only
                    consumer_secret: '8e7E7gHuTwyDHw9lGQFO73FcUwz9YozT37lEvZulMq8FXaPl8O', // make sure to have your app read-only
                },

                // GENERAL SETTINGS
                length: 200,
                show_media: true,
                // Moderation function - if returns false, template will have class hidden
                moderation: function(content) {
                    return (content.text) ? content.text.indexOf('fuck') == -1 : true;
                },
                //update_period: 5000,
                // When all the posts are collected and displayed - this function is evoked
                callback: function() {
                    console.log('all posts are collected');
                }
            });
        };

        updateFeed();
        
    });