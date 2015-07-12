angular.module("endDateFilter", [])	
	.filter("endDate", function () {
		return function(input) {
			return input ? input : "Present";				
		};
	});