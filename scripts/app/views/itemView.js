define( ['backbone'], function (Backbone) {
    
    var ItemView = Backbone.View.extend({
        tagName: 'tr',
        template: _.template('<td><%= name %></td><td><%= phone %></td><td><%= address.city %></td><td><%= address.street %>, <%= address.building %></td><td><%= job %></td><td><%= organisation %></td>'),
        // model: app.models.bookItem1, // We don't need this because model data is passed here on mainView initialize

        initialize: function () {

            // var singleModel = new BookItem();

            // this.itemView = new ItemView({model: singleModel});

            // this.model.fetch();

            // this.model.on('sync', this.reRenderView.bind(this));
        },

        // reRenderView: function () {
        //     this.render();
        // },

        render: function(){
            this.$el.html(this.template(this.model.attributes));
            return this.$el;
        }
    });

    return ItemView;
});