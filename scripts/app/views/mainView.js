define(['backbone', 'app/views/listView', 'app/views/person'], function (Backbone, ListView, Person) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',

        initialize: function () {
            this.listView = new ListView();
        },

        render: function () {
            this.$el.append(this.listView.render());  // ???
            return this.$el;
        },

        loadView: function(view){
            this.view && (this.view.close ? this.view.close() : this.view.remove());
            this.view = view;

            // if( this.view ){
            //     this.view.remove();
            // };

            // this.view = view;
            // this.mainView.$el.html(this.view.render());
        },

        renderListView: function () {
            this.$el.append(this.listView.render());
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