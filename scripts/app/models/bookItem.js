define( ['backbone'], function (Backbone) {

    var BookItem = Backbone.Model.extend({
        defaults: {
            name: '',
            phone: '',
            address: {
                city: '',
                street: '',
                building: ''
            },
            job: '',
            organisation: ''
        }
    });
    
    return BookItem;
});