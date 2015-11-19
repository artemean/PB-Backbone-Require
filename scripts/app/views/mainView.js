define(['backbone', 'app/views/listView', 'app/views/singleView'], function (Backbone, ListView, SingleView) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',

        events: {
            'click .single-item': 'showItem'
        },

        initialize: function () {

            this.listView = new ListView();

            this.singleView = new SingleView();

        },

        render: function () {

            this.$el.append(this.listView.render());

            return this.$el;
        },

        showItem: function () {
            console.log('show item');
            this.listView.$el.detach();
            this.$el.append(this.singleView.render());
        }

    });

    return MainView;

});