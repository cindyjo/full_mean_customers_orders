var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = (function() {
	return {
		show: function(req, res){
			Order.find({}, function(err, results){
				if(err){
					console.log(err);
				}
				else {
					res.json(results);
				}
			});
		},

		add: function(req,res) {
			var order = new Order(req.body);
			
			order.save(function(err){
				if(err){
					// console.log(err);
					res.json(err);
				}
				else {
					res.json({success: true});
				}
			});
		}
	}
})();