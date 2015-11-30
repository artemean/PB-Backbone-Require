define( ['backbone'], function (Backbone) {

    var AddPerson = Backbone.View.extend({
        tagName: 'table',
        className: 'single-person',
        // template: _.template('<tr><td><%= name %></td><td><%= phoneNumber %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td></tr><tr><td colspan="6"><a href="/#" class="back">Go back</a></td></tr>'),
        // template: _.template('<tr><th>Name</th><th>Phone</th><th>City</th><th>Address</th><th>Job</th><th>Organisation</th></tr><tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>'),
        template: _.template('<tr><td>Name</td><td><input type="text" class="name-input"></td></tr><tr><td>Phone</td><td><input type="text" class="phone-input"></td></tr><tr><td>City</td><td><input type="text" class="city-input"></td></tr><tr><td>Address</td><td><input type="text" class="address-input"></td></tr><tr><td>Job</td><td><input type="text" class="job-input"></td></tr><tr><td>Organisation</td><td><input type="text" class="organisation-input"></td></tr><tr><td colspan="2"><button type="button" class="btn save">Save</button></td></tr>'),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());

            return this.$el;
        }
    });

    return AddPerson;
});