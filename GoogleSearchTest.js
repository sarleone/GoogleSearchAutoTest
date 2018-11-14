var Nightmare = require("nightmare");

new Nightmare({ show: true })
  // Visit login page
  .goto("https://www.google.com/")
  // Enter search topic.
  .type(".gLFyf.gsfi", "funny cats")
  // Take a screenshot of the login form.
  .screenshot("search.png")
  // Wait for it
  .wait(500)
  // hit enter. 
  .type('.gLFyf.gsfi', '\u000d')
  .wait(500)
  // Take a screenshot of the results page
  .screenshot("videos1.png")
  // Scroll down a few hundred pixels.
  .scrollTo(500, 0)
  // Take a screenshot of more results.
  .screenshot("videos2.png")
  // End test
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });
