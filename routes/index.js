let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('./index', {
        title: '首页',
        name: 'hello'
    })
});

module.exports = router;