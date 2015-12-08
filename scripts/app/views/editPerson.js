define( ['backbone', 'app/models/person'], function (Backbone, PersonModel) {

    var EditPerson = Backbone.View.extend({
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

                name: this.$('.name-input').val(),
                phoneNumber: this.$('.phone-input').val(),
                address: {
                    city: this.$('.city-input').val(),
                    street: this.$('.street-input').val(),
                    building: this.$('.building-input').val()
                },
                job: this.$('.job-input').val(),
                organisation: this.$('.organisation-input').val()
            });
            person.save(null, { success: function () {
                    alert('New person successfully added');
                    Backbone.history.navigate('/', true);
                },
                error: function () {

                }
            });            
        }

    });

    return EditPerson;
});