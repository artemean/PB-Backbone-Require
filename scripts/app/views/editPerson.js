define( ['backbone', 'app/models/person'], function (Backbone, PersonModel) {

    var EditPerson = Backbone.View.extend({
        tagName: 'table',
        className: 'single-person',

        template: _.template('<tr><td>Name</td><td><input type="text" class="name-input" value="<%= name %>"></td></tr><tr><td>Phone</td><td><input type="text" class="phone-input" value="<%= phoneNumber %>"></td></tr><tr><td>City</td><td><input type="text" class="city-input" value="<%= address.city %>"></td></tr><tr><td>Street</td><td><input type="text" class="street-input" value="<%= address.street %>"></td></tr><tr><td>Building</td><td><input type="text" class="building-input" value="<%= address.building %>"></td></tr><tr><td>Job</td><td><input type="text" class="job-input" value="<%= job %>"></td></tr><tr><td>Organization</td><td><input type="text" class="organization-input" value="<%= organization %>"></td></tr><tr><td colspan="2"><button type="button" class="btn save">Save</button></td></tr>'),

        events: {'click .save': 'savePerson'},

        initialize: function (opt) {
            var options = {};

            if (!this.model) {
                if (opt !== undefined) {
                    options.id = opt.id;
                }
                this.model = new PersonModel(options);
            }

            this.model.fetch();
            this.model.on('sync', this.render.bind(this));
        
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));

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
                organization: this.$('.organization-input').val()
            });
            person.save(null, { success: function () {
                    alert('Person details successfully changed');
                    Backbone.history.navigate('/', true);
                },
                error: function () {

                }
            });            
        }

    });

    return EditPerson;
});