var express = require('express');
var router = express.Router();

// 增加url 依赖
var urllib = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get请求
router.get('/index', function (req, res, next) {

	// 初始数据
	var data = {
	    status: '100', 
	    msg: '操作成功',
	    data: {
	        userId: '123456',
	        userName: 'hgdqstudio',
	        blog: 'http://hgdqstudio.online'
	    }
	};
	
    var params = urllib.parse(req.url, true);
    var query2 = params.query;
    // 打印get请求中的接口参数
    console.log(query2);
    //res.end(JSON.stringify(data));
	res.json(data);

});


module.exports = router;
