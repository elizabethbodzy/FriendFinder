var path = require("path");

//routes for

module.exports = function(app) {

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'))
});

app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'))
});

//post

app.post('/api/friends', function (req,res) {
    var friends = req.body;
    console.log(friends);
})
};