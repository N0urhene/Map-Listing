const db = require("../models");
const Listing = db.listings;

// Create and Save a new Listing
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
    
      // Create a Listing
      const listing = new Listing({
        name: req.body.name,
        address: req.body.address,
        Latitude: req.body.Latitude,
        Langitude: req.body.Langitude,
        description: req.body.description,
        Sector: req.body.Sector
});


  // Save Listing in the database
  listing
    .save(listing)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the listing."
      });
    });
};

// Update a Listing by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Listing with id=${id}. Maybe Listing was not found!`
            });
          } else res.send({ message: "Listing was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Listing with id=" + id
          });
        })
};

// Delete a Listing with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  Tutorial.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Listing with id=${id}. Maybe Listing was not found!`
        });
      } else {
        res.send({
          message: "Listing was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Listing with id=" + id
      });
    });
};
