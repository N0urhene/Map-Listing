module.exports = mongoose => {
    const Listing = mongoose.model(
      "listing",
      mongoose.Schema(
        {
          name: String,
          address: String,
          Latitude: Number,
          Langitude: Number,
          description: String,
          image: String,
          Sector: String
        },
        { timestamps: true }
      )
    );
  
    return Listing;
  };

 /* const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  sector: { type: String, required: true }
});

module.exports = mongoose.model('listing', placeSchema);*/