define( ['backbone', 'app/models/person'], function (Backbone, PersonModel) {

    var People = Backbone.Collection.extend({

        model: PersonModel,

        // url: 'data/people.json'
        url: 'http://localhost:6069/people'

    });
    
    return People;
});