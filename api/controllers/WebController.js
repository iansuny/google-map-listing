/**
 * WebController
 *
 * @description :: Server-side logic for managing webs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	indexIO: function(req, res) {
		// console.log(req.getLocale());
		return res.view('blank', {
			layout: 'index'
		})
	},	
};

