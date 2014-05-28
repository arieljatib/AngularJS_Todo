function TodoCtrl($scope) {
	
	$scope.todos = [
		{text:'Learning AngularJS', done:false},
		{text:'Build an app', done:false}
	];

	$scope.getTotalTodos = function () {
		return $scope.todos.length;
	}

	$scope.addTodo = function () {
		console.log('added todo');
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	}

	$scope.clearCompleted = function () {
		console.log('hit Clear Completed function');
		$scope.todos = _.filter($scope.todos, function (todo) {
		//$scope.todos = $scope.todos.filter(function(todo){	//alternate solution not leveraging underscorejs
			return !todo.done;
		})
	}
}

function halo() {
	document.write('hello world')
	}
