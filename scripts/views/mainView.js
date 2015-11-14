define(['backbone', 'views/itemView', 'models/bookItem'], function (Backbone, ItemView, BookItem) {
	var MainView = Backbone.View.extend({
		tagName: 'section',
		className: 'phonebook',
		template: _.template('<table></table><button class="update">Update</button>'),

		events: {
			'click .update': 'updateAll'
		},

		initialize: function () {
			var singleModel = new BookItem();

			this.itemView = new ItemView({model: singleModel});
		},

		render: function () {

			this.$el.html(this.template());
			this.$('table').append(this.itemView.render());
			// app.models.bookItem1.on('change', function(){
			// 	self.$('table').append(self.itemView.render());
			// 	console.log(self);
			// });
			
			return this.$el;
		},

		updateAll: function () {
			this.itemView.model.fetch()
		}
	});

	return MainView;

});