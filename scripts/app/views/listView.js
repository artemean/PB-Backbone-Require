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
            this.buttonEl = $();

        },

        render: function(){
            // this.$el.after(this.template());
            this.$el.html(this.template());

            this.collection.each(function(item){
                this.renderItem(item);
            }, this);
            

            return this.$el;
        },

        renderItem: function(item){
            var itemView = new ItemView({
                model: item
            });
            
            this.$el.prepend( itemView.render() );
            
        },

        updateAll: function(){
            console.log('update all');
            this.collection.fetch();
        }

    });

    return ListView;

});