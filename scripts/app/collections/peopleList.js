define( ['backbone', 'app/models/bookItem'], function (Backbone, BookItem) {

    var People = Backbone.Collection.extend({

        model: BookItem,

        url: 'data/people.json'
        // url: 'http://localhost:6069/people'

    });
    
    return People;
});