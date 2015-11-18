define(['backbone', 'app/views/listView'], function (Backbone, ListView) {
    
    var MainView = Backbone.View.extend({
        tagName: 'section',
        className: 'phonebook',
        template: _.template('<div class="some"></div>'),

        initialize: function () {

            this.listView = new ListView();

        },

        render: function () {

            this.$el.html(this.template());
            this.$('.some').append(this.listView.render());
            // app.models.bookItem1.on('change', function(){
            //  self.$('table').append(self.itemView.render());
            //  console.log(self);
            // });
            
            return this.$el;
        }
    });

    return MainView;

});