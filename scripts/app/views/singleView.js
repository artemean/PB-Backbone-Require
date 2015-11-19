define( ['backbone'], function (Backbone) {

    var SingleView = Backbone.View.extend({
        tagName: 'table',
        className: 'single-person',
        template: _.template('<tr><td><%= name %></td><td><%= phone %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td></tr>'),
        
        render: function() {

            this.$el.html(this.template(this.model.attributes));

            return this.$el;
        }
    });

    return SingleView;
});