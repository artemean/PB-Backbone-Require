define(['backbone', 'app/views/listView', 'app/views/person'], function (Backbone, ListView, Person) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',

        render: function () {
            return this.$el;
        },

        loadView: function (view) {

            if( this.view ){
                this.view.close ? this.view.close() : this.view.remove()
            };

            this.view = view;
            this.$el.append(this.view.$el);
        },

        renderListView: function () {

            this.loadView(new ListView());
        },

        renderPersonView: function (id) {
            
            this.listView = new ListView();
            var self = this;
            this.listView.collection.on('sync', function () {
                var myModel = this.get(id);

                self.loadView(new Person({model: myModel}));
            });
        }

    });

    return MainView;

});