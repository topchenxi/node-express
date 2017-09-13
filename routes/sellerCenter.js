let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('./seller', {
        title: '卖家中心首页'
    })
});

module.exports = router;