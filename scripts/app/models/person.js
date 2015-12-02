define( ['backbone'], function (Backbone) {

    var PersonModel = Backbone.Model.extend({
        urlRoot: '/people',

        url: function () {
            // debugger;
            return 'data/' + this.id.id + '.json';
        },

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
    
    return PersonModel;
});