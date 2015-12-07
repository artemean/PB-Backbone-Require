define( ['backbone', 'app/models/person'], function (Backbone, PersonModel) {

    var AddPerson = Backbone.View.extend({
        tagName: 'table',
        className: 'single-person',

        template: _.template('<tr><td>Name</td><td><input type="text" class="name-input"></td></tr><tr><td>Phone</td><td><input type="text" class="phone-input"></td></tr><tr><td>City</td><td><input type="text" class="city-input"></td></tr><tr><td>Street</td><td><input type="text" class="street-input"></td></tr><tr><td>Building</td><td><input type="text" class="building-input"></td></tr><tr><td>Job</td><td><input type="text" class="job-input"></td></tr><tr><td>Organisation</td><td><input type="text" class="organisation-input"></td></tr><tr><td colspan="2"><button type="button" class="btn save">Save</button></td></tr>'),

        events: {'click .save': 'savePerson'},

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());

            return this.$el;
        },

        close: function () {
            this.remove();
        },

        savePerson: function () {
            var person = new PersonModel({

                name: $('.name-input').val(),
                phoneNumber: $('.phone-input').val(),
                address: {
                    city: $('.city-input').val(),
                    street: $('.street-input').val(),
                    building: $('.building-input').val()
                },
                job: $('.job-input').val(),
                organisation: $('.organisation-input').val()
            });
            person.save(null, { success: function () {
                    Backbone.history.navigate('/', true);
                } 
            });
            console.log( person );
            
        }

    });

    return AddPerson;
});