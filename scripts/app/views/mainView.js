define(['backbone', 'app/views/listView', 'app/views/singleView'], function (Backbone, ListView, SingleView) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',

        initialize: function () {
            this.listView = new ListView();
        },

        render: function () {
            
            this.$el.append(this.listView.render());
            return this.$el;
        },
    });

    return MainView;

});