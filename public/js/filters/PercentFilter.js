angular.module("percentFilter", [])
	.filter("percent", function () {
		return function(input) {
			return input ? (input * 100) + "% Likelihood" : "";				
		};
	})
	.filter("dollars", function () {
		return function(input) {
			return input ? "$" + input : "";
		};
	});