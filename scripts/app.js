// define(['backbone'], function(Backbone) {

//   var PhonebookApp = Backbone.View.extend({

//     initialize: function() {
//       console.log( 'Wahoo!' );
//     }

//   });

//   return PhonebookApp;

// });




require(['views/mainView'], function(MainView){

	var mainView = new MainView();
	$('.wrap').append(mainView.render());

});