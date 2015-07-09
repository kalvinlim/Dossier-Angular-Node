angular.module('EntryService', []).factory('Entry', function($resource){
	return $resource('https://api.fullcontact.com/v2/person.json?email=:email&apiKey=b2e3cac36eaead4e');
});