define( ['backbone'], function (Backbone) {

    var PersonModel = Backbone.Model.extend({
        urlRoot: 'http://localhost:6069/people',

        // url: function () {
        //     // debugger;
        //     return 'data/' + this.id + '.json';
        // },

        defaults: {
            name: '',
            phoneNumber: '',
            address: {
                city: '',
                street: '',
                building: ''
            },
            job: '',
            organization: ''
        }
    });
    
    return PersonModel;
});