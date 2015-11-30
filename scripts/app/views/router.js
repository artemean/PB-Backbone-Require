define(['backbone', 'app/views/mainView'], function (Backbone, MainView) {

    var UserRouter = Backbone.Router.extend({
        initialize: function () {
            this.mainView = new MainView();
            // this.listView = new ListView();
            $('.wrap').append(this.mainView.render());
        },

        routes: {
            "": "showList",
            "people/:id": "showPerson"
        },

        showPerson: function(id){
            // var self = this;
            // this.listView.collection.on('sync', function () {
            //     var myModel = this.get(id);
            //     self.loadView(new Person({model: myModel}));
            // });
            this.mainView.renderPersonView(id);
        },

        showList: function(){
            console.log('init showList router');
            this.mainView.renderListView();
        }

    });
    
    return UserRouter;
});