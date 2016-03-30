(function() {
  'use strict';

  angular
    .module('plunker', ['ngRoute', 'ui.bootstrap'])
    .config(moduleConfig);

  moduleConfig.$inject = ['$routeProvider'];

  function moduleConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.tmpl.html'
      }).otherwise({
        redirectTo: '/home'
      });
  }
})();