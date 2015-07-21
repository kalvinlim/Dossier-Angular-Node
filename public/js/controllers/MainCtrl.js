angular.module('MainCtrl', ['percentFilter', 'endDateFilter', ]).controller('MainController', function($scope, $resource, $sce, $routeParams) {
	
	//var entry = $resource('/mock/api/v1/person.json');
	var entry = $resource('/api/v1/person.json?email=:email');
	
	$scope.email = $routeParams.email;
	$scope.likelihood ;
	$scope.mapsApiKey = 'AIzaSyAtwVSPdFvVErwpn25y2JjvNOVYsjvaK7Q';
	$scope.mapsUrl = 'https://www.google.com/maps/embed/v1/search?key='+$scope.mapsApiKey+'&q=';
 	

 	
 	if($scope.email){
 		$scope.update($scope.email);
 	}

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
		$scope.result = entry.get({ email: email }, function(data){
			console.log(data);
			$scope.likelihood = data.likelihood;
			$scope.photos = data.photos;
			$scope.resultsQueried = true;			
		});
        //$scope.email = angular.copy(email);
     };
	
	$scope.foo = function(){
		entry.get({ email: $scope.email })
	};
		//var entry = Entry.get({ email: $scope.email }, function() {
    //	console.log(entry);
  	//}); // get() returns a single entry

	$scope.getMapsUrl = function(){
		var location = $scope.result.demographics.locationDeduced.deducedLocation.replace(/\s+/g, '').split(',').join('+'); //Strip whitespace, then replace commas with '+'
		$scope.mapsUrl = 'https://www.google.com/maps/embed/v1/search?key='+$scope.mapsApiKey+'&q=' + location;		
		return $scope.trustSrc($scope.mapsUrl);
	}

	$scope.trustSrc = function(src) {
    	return $sce.trustAsResourceUrl(src);
  	}
    	
});