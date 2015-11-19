define(['backbone', 'app/views/listView', 'app/views/singleView'], function (Backbone, ListView, SingleView) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',

        events: {
            'click .single-item': 'showItem',
            'click .back': 'showList'
        },

        initialize: function () {

            this.listView = new ListView();

        },

        render: function () {

            this.$el.append(this.listView.render());

            return this.$el;
        },

        showItem: function (e) {
            var iid = ($(e.target).parents('tr').data('itemid'));
            
            // console.log(iid);
            // console.log(this.listView.collection.models[0].id );

            // console.log($(e.target).parents('tr').data('itemid'));

            this.listView.$el.detach();

            var myModel = this.listView.collection.get(iid);


            this.singleView = new SingleView({model: myModel});

            this.$el.append(this.singleView.render());
        },

        showList: function (e) {
            this.singleView.$el.detach();
            this.render();
        }

    });

    return MainView;

});