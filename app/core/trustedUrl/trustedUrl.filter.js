angular.
  module('core').
    filter('trusted', ['$sce', function ($sce) {
      return function(url) {
        return $sce.trustAsResourceUrl(url);
      };
    }]);