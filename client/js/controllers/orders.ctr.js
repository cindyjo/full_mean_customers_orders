angular.module('app')
.controller('ordersController', function(OrderFactory){
	var that = this;

	OrderFactory.getProducts(function(data){
		that.products = data;
	});

	OrderFactory.getQty(function(data){
		that.qty = data;
	});

	OrderFactory.getOrders(function(data){
		that.orders = data;
	});

	this.addOrder = function(){
		that.err = {};
		
		OrderFactory.addOrder(this.newOrder, function(data){
			if(data.errors){
				for(var name in data.errors){
					that.err[name] = data.errors[name].message;
				}
			}
			else {
				that.orders= data;
				that.newOrder ={};
			}
		});
	};
})