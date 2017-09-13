let express = require('express');
let path = require('path');
var ejs = require('ejs');
let app = express();


let indexRoute = require('./routes/index');
let buyerRoute = require('./routes/buyerCenter');
let sellerRoute = require('./routes/sellerCenter');

// 托管静态文件
app.set('views', path.join(__dirname, 'views'));
// 使用ejs
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// 托管静态文件
app.use(express.static(path.join(__dirname, 'static')));


app.use('/', indexRoute);
app.use('/buyer', buyerRoute);
app.use('/seller', sellerRoute);

// 处理 404
app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

// 错误处理器
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


var server = app.listen(3001, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});