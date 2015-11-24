define( ['backbone', 'app/models/person'], function (Backbone, Person) {

    var People = Backbone.Collection.extend({

        model: Person,

        url: 'data/people.json'
        // url: 'http://localhost:6069/people'

    });
    
    return People;
});