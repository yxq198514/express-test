var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('users', {
		title: 'user yxq'
	});
});
router.post('/add', function(req, res){

    console.log(req.body);
	res.send({"code":200})

})
module.exports = router;