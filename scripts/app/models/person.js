define( ['backbone'], function (Backbone) {

    var Person = Backbone.Model.extend({
        defaults: {
            name: '',
            phoneNumber: '',
            address: {
                city: '',
                street: '',
                building: ''
            },
            job: '',
            organisation: ''
        }
    });
    
    return Person;
});