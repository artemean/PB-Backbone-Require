require.config({
  paths: {
    'jquery': 'vendors/jquery',
    'underscore': 'vendors/underscore',
    'backbone': 'vendors/backbone',
  }
});

// require(['app']);
require(['views/mainView'], function(MainView){

	var mainView = new MainView();
	$('.wrap').append(mainView.render());

});