define( ['backbone'], function (Backbone) {
    
    var ItemView = Backbone.View.extend({
        tagName: 'tr',
        template: _.template('<td><%= name %></td><td><%= phone %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td>'),
        
        render: function(){

            this.$el.html(this.template(this.model.attributes));

            return this.$el;
        }
    });

    return ItemView;
});