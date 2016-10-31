var app = angular.module('damonsApp',[])

//SAMPLE ENDPOINT CALLS
// $http.get('/getMyTasks').then(function (error, response) {
// 	if (response.status === 404) {
// 		return stuff
// 	}
// 	$scope.damonsTasks = JSON.parse(response).tasks
// })

// $http.post("/url", payload).then(function (response) {

	// })
//SAMPLE ENDPOINT CALLS

app.controller('damonsController',['$scope', '$http', function ($scope, $http) {

	$scope.damonsTasks = []

	$scope.nameOfNewTask = ""

	$scope.hasDamonAddedATask = false

	$scope.tempTask

	$scope.newKey = ""

	$scope.newValue = ""

	$scope.addedAttributes = {}

	$scope.damonWantsToAddATask = function (name) {
		if (name !== "") {
			var timeStamp = new Date()
			$scope.tempTask = new Task(timeStamp, name)
			$scope.nameOfNewTask = ""
			$scope.hasDamonAddedATask = true
		}
	}

	$scope.damonAddKeyValuePair = function (key, value) {
		if (key !== "" && value !== "") {
			$scope.addedAttributes[key] = value
			$scope.newKey = ""
			$scope.newValue = ""
		}
	}

	var Task = function (timeOfCreation, name) {
		this.id = ($scope.damonsTasks.length !== 0)
			? $scope.damonsTasks[$scope.damonsTasks.length - 1].id + 1
			: 1
		this.timeOfCreation = timeOfCreation
		this.name = name
		this.display = false
	}

	$scope.cancelAddTask = function () {
		$scope.tempTask = {}
		$scope.addedAttributes = {}
		$scope.newKey = ""
		$scope.newValue = ""
		$scope.hasDamonAddedATask = false
	}

	$scope.addATask = function (task) {
		for (key in $scope.addedAttributes) {
			task[key] = $scope.addedAttributes[key]
		}
		$scope.damonsTasks.push(task)
		$scope.hasDamonAddedATask = false
		$scope.tempTask = {}
		$scope.addedAttributes = {}
	}

	$scope.seeTaskDetails = function (taskId) {
		for (var i = 0; i < $scope.damonsTasks.length; i++) {
			if ($scope.damonsTasks[i].id === taskId) {
				$scope.damonsTasks[i].display = !$scope.damonsTasks[i].display
			}
		}
	}

	$scope.deleteATask = function (taskId) {
		for (var i = 0; i < $scope.damonsTasks.length; i++) {
			if ($scope.damonsTasks[i].id === taskId) {
				$scope.damonsTasks.splice(i, 1)
			}
		}
	}

	$scope.deleteKeyValuePair = function (key) {
		delete $scope.addedAttributes[key]
	}

}])