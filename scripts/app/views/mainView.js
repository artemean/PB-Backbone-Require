define(['backbone', 'app/views/listView', 'app/views/singleView', 'app/views/router'], function (Backbone, ListView, SingleView, UserRouter) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',

        events: {
            'click .single-item': 'showItem',
            'click .back': 'showList'
        },

        initialize: function () {

            this.listView = new ListView();

            this.router = 

        },

        render: function () {

            this.$el.append(this.listView.render());

            return this.$el;
        },

        showItem: function (e) {
            var itemId = ($(e.target).parents('tr').data('itemid'));

            this.listView.$el.remove();
            var personModel = this.listView.collection.get(itemId);
            this.singleView = new SingleView({model: personModel});
            this.$el.append(this.singleView.render());
        },

        showList: function (e) {
            this.singleView.$el.remove();
            this.render();
        }

    });

    return MainView;

});