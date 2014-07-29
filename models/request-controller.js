var request = require('request');

var Snow = function(callback){
	request('http://www.snowforecast.com/resorts/4397-silverton-mountain', callback)
	};

module.exports = Snow;