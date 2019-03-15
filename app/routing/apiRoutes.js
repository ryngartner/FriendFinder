var friendData = require("../data/friends.js");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    })
    app.post('/api/friends', function (req, res) {
        var newUser = req.body;
        // Create variable as a placeholder - updates with scores that are the closest
        var bestMatch = {
            name: "",
            photo: "",
            scoreDifference: 1000
        }
        for (i = 0; i < friendData.length; i++) {
            var friendCompare = friendData[i];
            console.log(friendCompare.friendName);
            var totalDifference = 0;
            for (n = 0; n < friendCompare.friendScore.length; n++) {
                var compareScore = friendCompare.friendScore[n];
                var newUserScore = newUser.friendScore[n];
                totalDifference += Math.abs(parseInt(newUserScore) - parseInt(compareScore));
                // console.log("Existing User: " + compareScore);
                // console.log("New User: " + newUserScore);
                console.log("Total Difference: " + totalDifference);
            }
            if (totalDifference < bestMatch.scoreDifference) {
                bestMatch.name = friendCompare.friendName
                bestMatch.photo = friendCompare.friendPhoto
                bestMatch.scoreDifference = totalDifference
            }
        }
        console.log("Best Match: " + bestMatch.name);
        friendData.push(req.body);
        console.log(friendData);
        console.log(bestMatch);
        res.json(bestMatch);
    });
}