define(['backbone', 'app/views/itemView', 'app/collections/peopleList'], function (Backbone, ItemView, People) {
    
    var ListView = Backbone.View.extend({
        tagName: 'table',

        className: 'people',

        template: _.template('<tr><td colspan="6"><a href="#new" class="btn add">Add new</a> <button class="btn remove">Remove</button> <button class="btn update">Update</button></td></tr>'),

        heading: _.template('<tr><th width="60">Select</th><th>Name</th><th>Phone</th><th>Details</th></tr>'),

        events: {
            'click .update': 'updateAll',
            'click .remove': 'removeItem'
        },

        initialize: function (items) {
            this.collection = new People(items);
            this.collection.on('sync remove', this.render.bind(this));
            this.collection.fetch();
        },

        render: function(){
            this.$el.empty();

            this.collection.each(function (item) {
                this.renderItem(item);
            }, this);

            this.$el.prepend(this.heading());

            this.$el.append(this.template());

            return this.$el;
        },

        renderItem: function (item) {
            var itemView = new ItemView({
                model: item
            });
            this.$el.prepend( itemView.render() );
        },

        updateAll: function () {
            console.log('update all');
            this.collection.fetch();
        },

        close: function () {
            this.collection.off();
            this.remove();
        },

        removeItem: function () {
            var ch = this.$el.find('input[type="checkbox"]:checked'),
                col = this.collection;
            if ( ch.length && confirm("Are you sure you want to temove the item?") ) {
                ch.each(function () {
                    var dat = $(this).parents('tr').data('itemid'),
                        mod = col.get(dat);
                    mod.destroy();

                });

                alert('Items deleted');
            } else {
                alert('Nothing deleted');
            }
            
        }

    });

    return ListView;

});