define(['backbone', 'app/views/itemView', 'app/collections/peopleList'], function (Backbone, ItemView, People) {
    
    var ListView = Backbone.View.extend({
        tagName: 'table',

        events: {
            'click .update': 'updateAll'
        },

        initialize: function (items) {

            this.collection = new People(items);
            this.collection.fetch();

            this.collection.on('sync', this.reRenderView.bind(this));

        },

        reRenderView: function () {
            this.render();
        },

        render: function(){
            
            this.collection.each(function(item){
                this.renderItem(item);
            }, this);
            
            this.$el.after('<button class="update">Update</button>');
            
            return this.$el;
        },

        renderItem: function(item){
            var itemView = new ItemView({
                model: item
            });
            
            this.$el.append( itemView.render() );
            
        },

        updateAll: function () {
            console.log('asd');
            this.collection.fetch();
        }
    });

    return ListView;

});