define( ['backbone', 'app/models/bookItem'], function (Backbone, BookItem) {

    var People = Backbone.Collection.extend({

        model: BookItem,

        url: 'data/people.json'
        // url: 'http://10.17.175.189:3001/people'

    });
    
    return People;
});