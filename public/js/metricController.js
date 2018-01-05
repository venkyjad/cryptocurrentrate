app.controller('metricController', function($scope, $http, $interval){

	$scope.current_count = 0;


	$scope.getCurrencyRate = function(count){
		url = 'https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10&start='+count;
	    $http({
	      method: "GET",
	      url: url,
	      dataType: 'json',
	      headers: { "Content-Type": "application/json; charset=utf-8" },

	      }).then(function (res) {
	      	var tempData = res.data
	        $scope.users = tempData
	        var labels = [];
	        var dataSet = []
	        for(var i=0; i<tempData.length; i++){
	            labels.push(tempData[i].name);
	            dataSet.push(parseFloat(tempData[i].price_usd).toFixed(2))
	            
	        }
	         $scope.labels = labels;
	         $scope.data = dataSet;
	         $scope.options = {

	            scales: {
	              scaleStartValue: 0,
	               xAxes: [{
	                        display: true,
	                        scaleLabel: {
	                            display: true,
	                            labelString: 'Currencies -->'
	                        }
	                    }],
	              yAxes: [
	                {
	                  
	                  display: true,
	                  position: 'left',
	                  scaleLabel: {
	                    display: true,
	                    labelString: 'USD($) -->'
	                  }
	                }
	              ]
	            }
	          };
	           $interval(function() {
	      			$scope.getCurrencyRate($scope.current_count);
	      		}, 300000);

	      });
	     

	}
	$scope.getCurrencyRate($scope.current_count);
      
    $scope.getrate = function(rate){
    	$scope.current_count = rate;
    	$scope.getCurrencyRate($scope.current_count);

    }
});