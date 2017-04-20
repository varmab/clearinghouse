import express from 'express';

let app = express();


let PORT = "5009";


app.use(express.static(__dirname + '/public'));


app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});



let server = app.listen(process.env.PORT || PORT, function () {
	console.log(`Server listening at ${PORT}`+ " at " +new Date());
});
