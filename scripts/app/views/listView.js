define(['backbone', 'app/views/itemView', 'app/collections/peopleList'], function (Backbone, ItemView, People) {
    
    var ListView = Backbone.View.extend({
        template: _.template('<table></table><button class="update">Update</button>'),

        events: {
            'click .update': 'updateAll'
        },

        initialize: function (items) {

            // var singleModel = new BookItem();

            // this.itemView = new ItemView({model: singleModel});

            this.collection = new People(items);
            this.collection.fetch({
                success: function(collection, response){
                    // console.log(collection.models[2].attributes);
                }
            });

            // this.collection.on('sync', this.reRenderView.bind(this));

            // console.log(JSON.stringify(this.collection));
            // console.log(this.collection.get(1));
            // this.render();

        },

        // reRenderView: function () {
        //     this.render();
        // },

        // render: function () {

        //     this.$el.html(this.template());
        //     // this.$('table').append(this.itemView.render());
        //     // app.models.bookItem1.on('change', function(){
        //     //  self.$('table').append(self.itemView.render());
        //     //  console.log(self);
        //     // });
            
        //     return this.$el;
        // },


        render: function(){
            console.log(this.collection);
            this.collection.each(function(item){
                this.renderItem(item);
            }, this);
        },

        renderItem: function(item){
            var itemView = new ItemView({
                model: item
            });
            this.$el.append( itemView.render().el );
        },

        updateAll: function () {
            this.itemView.model.fetch()
        }
    });

    return ListView;

});