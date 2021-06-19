const express = require('express');
const router = express.Router();

const Location = require('../models/Location');

// for any routes that contain the locationID
router.param('locationId', (req,res,next,id) => {
    Location.findById(id)
    .exec((err, location) => {
        if (err) {
            return res.json({error: err})
        } else {
            req.location = location //appends the location in req.location
            next();
        }
    })
});

// get all locations submitted by users -> GET /api/locations
router.get('/', (req, res) => {
  Location.find()
      .then(locations => res.json(locations))
      .catch(err => console.log(err))
})

// user create new location -> POST /api/locations
router.post('/', (req, res) => {
  const { name, reason } = req.body;
  const newLocation = new Location({
      name: name, 
      reason: reason,
  })
  newLocation.save()
      .then(() => res.json({
          message: "New Location created successfully",
          location: newLocation,
      }))
      .catch(err => res.status(400).json({
          "error": err,
          "message": "Error creating location."
      }))
})

// user delete location  -> DELETE /api/locations/{locationId}
router.delete('/:locationId', (req,res) => {
    let location = req.location;
    location.remove((err, location) => {
        if (err) {
            return res.json({error: err})
        } else {
            res.json({message: 'Location deleted succesfully!'})
        }
    })
})

module.exports = router;