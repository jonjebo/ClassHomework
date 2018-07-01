const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================
const friends = require("../data/friends.js")
module.exports = function(app) {

 // HTML GET Requests
 // Below code handles when users "visit" a page.
 // In each of the below cases the user is shown an HTML page of content
 // ---------------------------------------------------------------------------

 app.get("/api/friends", function(req, res) {
   res.json(friends)
 });


 app.post("/api/friends", function(req, res) {
    console.log(req)
  });
};




// Your `apiRoutes.js` file should contain two routes:

// * A GET route with the url `/api/friends`. This will be used to display a 
// JSON of all possible friends.

// * A POST routes `/a pi/friends`. This will be used to handle incoming survey 
// results. This route will also be used to handle the compatibility logic. 