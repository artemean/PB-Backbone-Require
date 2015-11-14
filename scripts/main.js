require.config({
  paths: {
    'jquery': 'vendors/jquery',
    'underscore': 'vendors/underscore',
    'backbone': 'vendors/backbone',
  }
});

require(['app/views/mainView'], function(MainView){

	var mainView = new MainView();
	$('.wrap').append(mainView.render());

});