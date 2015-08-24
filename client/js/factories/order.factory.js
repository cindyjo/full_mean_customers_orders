angular.module('app')
.factory('OrderFactory', function($http) {
	var factory = {};

	var orders = [];
	
	var products = [
		{name: 'Nike Shoes'},
		{name: 'Black Belts'},
		{name: 'Ice Creams'},
		{name: 'Candies'}
	];
	var qty = [
		{qty: 1},
		{qty: 2},
		{qty: 3},
		{qty: 4},
		{qty: 5}
	];
	factory.getProducts = function(callback){
		callback(products);
	};

	factory.getQty = function(callback){
		callback(qty);
	};

	factory.getOrders = function(callback){
		$http.get('/orders').success(function(output){
			orders = output;
			callback(orders);
		});
	};
	
	factory.addOrder = function(info, callback){
		$http.post('/orders', info).success(function(data){
			if(data.success){
				factory.getOrders(callback);

			}else {
				callback(data);
			}
		});
	};

	return factory;
})













