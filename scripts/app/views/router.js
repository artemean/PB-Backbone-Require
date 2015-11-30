define(['backbone', 'app/views/mainView'], function (Backbone, MainView) {

    var UserRouter = Backbone.Router.extend({
        initialize: function () {
            this.mainView = new MainView();
            $('.wrap').append(this.mainView.render());
        },

        routes: {
            "": "showList",
            "people/:id": "showPerson"
        },

        showPerson: function(id){
            this.mainView.renderPersonView(id);
        },

        showList: function(){
            this.mainView.renderListView();
        }

    });
    
    return UserRouter;
});