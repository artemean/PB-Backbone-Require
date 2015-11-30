define(['backbone', 'app/views/listView', 'app/views/person'], function (Backbone, ListView, Person) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',

        initialize: function () {
            
        },

        render: function () {
            // this.$el.append(this.listView.render());  // ???
            return this.$el;
        },

        loadView: function (view) {
            // this.view && (this.view.close ? this.view.close() : this.view.remove());
            // this.view = view;

            if( this.view ){
                this.view.remove();
            };

            this.view = view;
            this.$el.append(this.view.$el);
        },

        renderListView: function () {

            this.loadView(new ListView());

            // this.listView = new ListView(this.$el);
            // this.$el.append(this.listView.render());
        },

        renderPersonView: function (id) {
            // this.$el.append(this.listView.render());
            var self = this;
            this.listView.collection.on('sync', function () {
                var myModel = this.get(id);
                self.loadView(new Person({model: myModel}));
            });
        }

    });

    return MainView;

});