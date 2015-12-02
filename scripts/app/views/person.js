define( ['backbone', 'app/models/person'], function (Backbone, PersonModel) {

    var Person = Backbone.View.extend({
        tagName: 'table',
        className: 'single-person',
        template: _.template('<tr><td><%= name %></td><td><%= phoneNumber %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td></td><td><a class="btn edit" href="#edit/<%= id %>">Edit</a></td></tr><tr><td colspan="7"><a href="/#" class="back">Go back</a></tr>'),

        initialize: function (id) {
            var options = {};

            if (!this.model) {
                if (id !== undefined) {
                    options.id = id;
                }
                this.model = new PersonModel(options);
            }

            this.model.fetch();
            this.model.on('sync', this.render.bind(this));
            console.log(this.model);
        
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));

            return this.$el;
        },

        close: function () {
            this.remove();
        }
    });

    return Person;
});
