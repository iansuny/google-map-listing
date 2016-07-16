/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	search: function(req, res) {
		var keyword = req.param('keyword');

		var request = require('request');

		var body_json = '';
		var results = '';

		request.get({
		        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + encodeURIComponent(keyword) + '&key=AIzaSyCtqr_9TWp07b0wGpXXCsyuf_z9N3jy9TM&language=zh-TW'
		    }, function(error, response, body) {
		    	body_json = JSON.parse(body);
		    	// if (body.match("next_page_token") == 'next_page_token'){
		    	// 	console.log(body_json.next_page_token);
		    	// 	request.get({
				   //      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?pagetoken=' + body_json.next_page_token + '&key=AIzaSyCtqr_9TWp07b0wGpXXCsyuf_z9N3jy9TM&language=zh-TW'
				   //  }, function(error, response, body) {
				   //  	body_json = JSON.parse(body);
				   //  	console.log(body);
				   //  });
		    	// };
		        results = body_json;
		        res.json(results.results);
		    });
	},
	
};

