module.exports = app => {
    const listings = require("../controllers/listing.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Listing
    router.post("/", listings.create);

     // Update a Listing with id
  router.put("/:id", listings.update);

  // Delete a Listing with id
  router.delete("/:id", listings.delete);
};