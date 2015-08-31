angular.module("Calculator", []).controller("CalculatorController", function CalculatorController($scope) {
		$scope.displayValue = 0;
		$scope.memory = null;
		$scope.result = 0;
		$scope.operation = null;

		$scope.saveInMemory = function() {
			if ($scope.memory == null) {
				$scope.memory = parseFloat($scope.displayValue);
			}
		};
		$scope.Clear = function() {
			$scope.operation = null;
			$scope.memory = null;
			$scope.displayValue = 0;
			$scope.result = 0;
		};
		$scope.Sum = function() {
			$scope.saveInMemory();
			$scope.operation = "+";
			$scope.displayValue = 0;
		};
		$scope.Subtract = function() {
			$scope.saveInMemory();
			$scope.operation = "-";
			$scope.displayValue = 0;
		};
		$scope.Multiply = function() {
			$scope.saveInMemory();
			$scope.operation = "*";
			$scope.displayValue = 0;
		};
		$scope.Divide = function() {
			$scope.saveInMemory();
			$scope.operation = "/";
			$scope.displayValue = 0;
		};
		$scope.Calculate = function() {
			if ($scope.operation == "+"){
				$scope.result = parseFloat($scope.memory) + parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "-"){
				$scope.result = parseFloat($scope.memory) - parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "*"){
				$scope.result = parseFloat($scope.memory) * parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "/"){
				$scope.result = parseFloat($scope.memory) / parseFloat($scope.displayValue);
			}

			$scope.memory = $scope.result;
		};
	}
);