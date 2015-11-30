define(['backbone', 'app/views/itemView', 'app/collections/peopleList'], function (Backbone, ItemView, People) {
    
    var ListView = Backbone.View.extend({
        tagName: 'table',

        template: _.template('<tr><td colspan="6"><button class="update">Update</button></td></tr>'),

        events: {
            'click .update': 'updateAll'
        },

        initialize: function(items){

            this.collection = new People(items);

            this.collection.on('sync', this.render.bind(this));

            this.collection.fetch();

            // console.log(this.render());

        },

        render: function(){
            console.log('render listView');
            
            this.$el.empty();

            this.collection.each(function(item){
                this.renderItem(item);
            }, this);

            this.$el.append(this.template());

            return this.$el;
        },

        renderItem: function(item){
            
            var itemView = new ItemView({
                model: item
            });
            // console.log(itemView.render());
            this.$el.prepend( itemView.render() );
            
        },

        updateAll: function(){
            console.log('update all');
            this.collection.fetch();
        },

        close: function () {
            this.collection.off();

            this.remove();
        }

    });

    return ListView;

});