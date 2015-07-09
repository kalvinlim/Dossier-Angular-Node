angular.module('MainCtrl', []).controller('MainController', function($scope, $resource) {
	var apiKey = "";
	//var entry = $resource('https://api.fullcontact.com/v2/person.json?email=:email&apiKey=' + apiKey);
	var entry = $resource('/mock/rest');

	
	$scope.email;
	$scope.likelihood ;

	$scope.isInfo = function(){
		return $scope.likelihood <= 0.25;
	};
	$scope.isSuccess = function(){
		return $scope.likelihood > 0.25 && $scope.likelihood < 0.50;
	};

	$scope.isWarn = function(){
		return $scope.likelihood >= 0.50 && $scope.likelihood < 0.75;
	};

	$scope.isDanger = function(){
		return $scope.likelihood >= 0.75;
	};
	

	$scope.update = function(email) {
		$scope.result = entry.get({ email: $scope.email }, function(data){
			console.log(data);
			console.log(data.likelihood);
			$scope.likelihood = data.likelihood;
			$scope.photos = data.photos;

		});
		//$scope.likelihood = 0.93;
        //$scope.email = angular.copy(email);
 	

       
     };
	
	$scope.foo = function(){
		entry.get({ email: $scope.email })
	};
		//var entry = Entry.get({ email: $scope.email }, function() {
    //	console.log(entry);
  	//}); // get() returns a single entry
 
});