define(['backbone', 'app/views/mainView', 'app/views/listView', 'app/views/person'], function (Backbone, MainView, ListView, Person) {

    var UserRouter = Backbone.Router.extend({
        initialize: function () {
            this.mainView = new MainView();
            this.listView = new ListView();
            $('.wrap').append(this.mainView.render());
        },

        routes: {
            "": "showList",
            "people/:id": "showPerson"
        },

        loadView: function(view){
            if( this.view ){
                this.view.remove();
            };

            this.view = view;
            this.mainView.$el.html(this.view.render());
        },

        showPerson: function(id){
            var self = this;
            this.listView.collection.on('sync', function () {
                var myModel = this.get(id);
                self.loadView(new Person({model: myModel}));
            });
        },

        showList: function(){
            console.log('init');
            this.loadView(new MainView());
        }

    });
    
    return UserRouter;
});