

var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        console.log(newFriend);

        var bestMatch = {};
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i])
            console.log(bestMatch)
        }

        var bestMatchIndex = 0;
        var minimumDifference = 40;

        for (var i = 0; i < friendsData.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                var difference = Math.abs(newFriend.scores[j] - friendsData[i].scores[j])
                totalDifference += difference;
            }

            if(totalDifference < minimumDifference) {
                bestMatchIndex = i;
                minimumDifference = totalDifference;
            }
        }

        bestMatch = friendsData[bestMatchIndex];

        friendsData.push(newFriend);

        res.json(bestMatch);





    });

};




