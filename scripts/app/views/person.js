define( ['backbone', 'app/models/person'], function (Backbone, PersonModel) {

    var Person = Backbone.View.extend({
        tagName: 'table',
        className: 'single-person',
        template: _.template('<tr><td><%= name %></td><td><%= phoneNumber %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organization %></td></td><td><a class="btn edit" href="/#edit/<%= id %>">Edit</a></td></tr><tr><td colspan="7"><a href="/#" class="back">Go back</a></tr>'),
        heading: _.template('<tr><th>Name</th><th>Phone</th><th>City</th><th>Address</th><th>Job</th><th>Organization</th><th></th></tr>'),

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

            this.$el.prepend(this.heading());

            return this.$el;
        },

        close: function () {
            this.remove();
        }
    });

    return Person;
});
