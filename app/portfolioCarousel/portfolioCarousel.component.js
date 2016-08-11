angular.
  module('portfolioCarousel').
    component('portfolioCarousel',{
      templateUrl:'app/portfolioCarousel/portfolioCarousel.template.html',
      controller: function portfolioCarouselController($http){
        var self = this;
        $http.get('app/data/portfolio.json').then(function(response){
          self.portfolio = response.data;
        });
      }
    });
