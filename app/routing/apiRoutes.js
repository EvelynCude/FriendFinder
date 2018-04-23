// ===============================================================================
// LOAD DATA
// Link to friends.js where friend data is stored
// ===============================================================================
var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

  // API GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object) the JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
    app.post("/api/friends", function(req, res){
      var newUser = req.body;
      var userScores = req.body.scores;
      var matchedFriend = {
        matchName:"",
        matchPhoto:"",
        matchScoreDiff: 50
      };
      var scoreDifference = 0;
      
      // Loop through friends list and loop through scores of each friends list
      for (var i=0; i<friendsData.length; i++){
        for (var j=0; j<friendsData[i].scores.length; j++){
        // test loop
        console.log(friendsData[i].scores[j]); 
        console.log("-"+userScores[j]);
        console.log("-----");
               
      // Compute the difference for each survey question between the user's scores and the current loop friend by using another loop
          scoreDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
          // test math
          console.log(scoreDifference +"\n");
      // Make/override new matched friend if score difference is smaller than previous matched score
          if (scoreDifference < matchedFriend.matchScoreDiff){
            matchedFriend.matchName = friendsData[i].name;
            matchedFriend.matchPhoto = friendsData[i].photo;
            matchedFriend.matchScoreDiff = scoreDifference;
          }  
        } 
      }
      friendsData.push(newUser);
      console.log(matchedFriend);
      res.json(matchedFriend);
      

    });
};