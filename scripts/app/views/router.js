define(['backbone', 'app/views/mainView', 'app/views/listView', 'app/views/singleView'], function (Backbone, MainView, ListView, SingleView) {

    var UserRouter = Backbone.Router.extend({
        initialize: function () {
            this.mainView = new MainView();
            this.listView = new ListView();
            $('.wrap').append(this.mainView.render());
        },

        routes: {
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
                console.log(myModel);
                self.loadView(new SingleView({model: myModel}));
            });
        },

        showList: function(){
            this.view = new listView()
        }

    });
    
    return UserRouter;
});