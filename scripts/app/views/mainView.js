define(['backbone', 'app/views/listView'], function (Backbone, ListView) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',

        initialize: function () {

            this.listView = new ListView();

        },

        render: function () {
            
            this.$el.append(this.listView.render());
            
            return this.$el;
        }
    });

    return MainView;

});