define( ['backbone'], function (Backbone) {

    var ItemView = Backbone.View.extend({
        tagName: 'tr',
        className: 'single-item',
        // template: _.template('<td><%= name %></td><td><%= phone %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td>'),
        template: _.template('<td><%= name %></td><td><%= phone %></td><td><span class="details">Click for details</span></td>'),
        
        render: function(){

            this.$el.html(this.template(this.model.attributes));

            return this.$el;
        }
    });

    return ItemView;
});