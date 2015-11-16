$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        clientId: 'cfdef5522d904dce9a986e1a304823d1',
        accessToken: '2192237468.1677ed0.fa72e8d53b8045e4ac8c8161764c410d',
        target: 'instafeed',
        get: 'user',
        userId: 2192237468,
        links: true,
        limit: 60,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box instagram-image"><div class="image-wrap"><a href="{{link}}" target="_blank"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>',
        filter: function(image) { return image.tags.indexOf('godart') >= 0; },
        after: function () {
            $('.instagram-image').each(function(i){
                if (i>=8){
                    $(this).remove();
                }
            });
        }
    });
    feed.run();

});