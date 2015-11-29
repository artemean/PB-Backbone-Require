require.config({
  paths: {
    'jquery': 'vendors/jquery',
    'underscore': 'vendors/underscore',
    'backbone': 'vendors/backbone',
  }
});

require(['app/views/router'], function(UserRouter){

	var router = new UserRouter;
    Backbone.history.start();

});