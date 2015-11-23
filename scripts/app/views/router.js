define(['backbone', 'app/views/listView', 'app/views/singleView'], function (Backbone, ListView, SingleView) {

    var UserRouter = Backbone.Router.extend({
        initialize: function () {
            this.mainView = new Maon()
            $('.wrap').append(this.mainView.render());
        },

        routes: {
            "people/:id": "showPerson"
        },

        loadView: function(view){
            this.view && this.view.remove();
            this.view = view;
            this.mainView.$el.html(this.view.render());
        },

        showPerson: function(id){
            this.loadView(new SingleView({model: id}));

            console.log(id);
        },

        showList: function(){
            this.view = new listView()
        }

    });
    
    return UserRouter;
});