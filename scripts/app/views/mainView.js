define(['backbone', 'app/views/listView', 'app/views/person', 'app/views/addPerson', 'app/models/person'], function (Backbone, ListView, Person, AddPerson) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',

        render: function () {
            return this.$el;
        },

        loadView: function (view) {

            if ( this.view ) {
                this.view.close();
            };

            this.view = view;
            this.$el.append(this.view.$el);
        },

        renderListView: function () {
            this.loadView(new ListView());
        },

        renderPersonView: function (id) {
            
            this.listView = new ListView();
            // var self = this;
            // this.listView.collection.on('sync', function () {
            //     var myModel = this.get(id);

            //     self.loadView(new Person({model: myModel}));
            // });
            this.loadView(new Person({id: id}));
        },

        renderAddPersonView: function () {
            this.loadView(new AddPerson());
        }

    });

    return MainView;

});