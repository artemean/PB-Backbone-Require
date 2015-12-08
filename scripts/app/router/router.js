define(['backbone', 'app/views/mainView'], function (Backbone, MainView) {

    var UserRouter = Backbone.Router.extend({
        initialize: function () {
            this.mainView = new MainView();
            $('.wrap').append(this.mainView.render());
        },

        routes: {
            "": "showList",
            "people/:id": "showPerson",
            "new": "addNew",
            "edit/:id": "editItem"
        },

        showPerson: function (id) {
            this.mainView.renderPersonView(id);
        },

        showList: function () {
            this.mainView.renderListView();
        },

        addNew: function () {
            this.mainView.renderAddPersonView();
        },

        editItem: function (id) {
            this.mainView.renderEditView(id);
        }

    });
    
    return UserRouter;
});