angular.
	module('skillsList').
		component('skillsList',{

			templateUrl:'app/skillsList/skillsList.template.html',

				controller: function phoneListController($http){
					var self = this;
					self.query = 'webDev';
					$http.get('app/data/skills.json').then(function(response){
						self.skills = response.data;
					});
				}

		});