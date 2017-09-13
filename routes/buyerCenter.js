let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('./buyer', {
        title: '买家中心首页'
    })
});

module.exports = router;