angular.module("myResume", [])

.controller("HomeCtrl", function ($scope) {
	$scope.works= [
		{	"time": "Sep, 2009 to March, 2013", "company": "Ivenue.com Network Co.",
			"position": "Tech Suport/Sales Representative", "description": "blabalbal"},
		{	"time": "Sep, 2009 to March, 2013", "company": "Ivenue.com Network Co.",
			"position": "Tech Suport/Sales Representative", "description": "blabalbal"},
		{	"time": "Sep, 2009 to March, 2013", "company": "Ivenue.com Network Co.",
			"position": "Tech Suport/Sales Representative", "description": "blabalbal"},		
		];

	$scope.login = function () {
		
	};
});