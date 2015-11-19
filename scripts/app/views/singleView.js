define( ['backbone'], function (Backbone) {

    var SingleView = Backbone.View.extend({
        tagName: 'table',
        className: 'single-person',
        template: _.template('<tr><td><%= name %></td><td><%= phoneNumber %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td></tr><tr><td colspan="6"><span class="back">Go back</span></td></tr>'),
        
        render: function() {

            this.$el.html(this.template(this.model.attributes));

            return this.$el;
        }
    });

    return SingleView;
});