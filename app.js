var app = angular.module('damonsApp',[])

app.controller('damonsController',['$scope',function ($scope) {

	$scope.damonsTasks = []

	$scope.nameOfNewTask = ""

	var Task = function (timeOfCreation, name) {
		this.id = ($scope.damonsTasks.length !== 0)
			? $scope.damonsTasks[$scope.damonsTasks.length - 1].id + 1
			: 1
		this.timeOfCreation = timeOfCreation
		this.name = name
	}

	$scope.createATask = function (name) {
		var timeStamp = new Date()
		$scope.addATask(new Task(timeStamp, name))
		$scope.nameOfNewTask = ""
	}

	$scope.addATask = function (task) {
		$scope.damonsTasks.push(task)
	}

	$scope.deleteATask = function (taskId) {
		for (var i = 0; i < $scope.damonsTasks.length; i++) {
			if ($scope.damonsTasks[i].id === taskId) {
				$scope.damonsTasks.splice(i, 1)
			}
		}
	}


}])