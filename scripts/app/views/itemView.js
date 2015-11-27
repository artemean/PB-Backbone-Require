define( ['backbone'], function (Backbone) {

    var ItemView = Backbone.View.extend({
        tagName: 'tr',
        className: 'single-item',
        // template: _.template('<td><%= name %></td><td><%= phoneNumber %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td>'),
        template: _.template('<td><%= name %></td><td><%= phoneNumber %></td><td><a href="/#people/<%= id %>"class="details">Click for details</a></td>'),

        events: {
            'click .details': 'showItem'
        },
        
        render: function(){

            this.$el.html(this.template(this.model.attributes));
            this.$el.attr('data-itemid', this.model.id);

            return this.$el;
        },

        // showItem: function (e) {
        //     var itemId = ($(e.target).parents('tr').data('itemid'));

        //     this.listView.$el.remove();
        //     var personModel = this.listView.collection.get(itemId);
        //     this.singleView = new SingleView({model: personModel});
        //     this.$el.append(this.singleView.render());
        // }

        showItem: function () {
            Backbone.history.navigate('people/' + this.model.id, { trigger: true });
        }

    });

    return ItemView;
});