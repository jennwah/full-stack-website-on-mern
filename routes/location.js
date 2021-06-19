const express = require('express');
const router = express.Router();

const Location = require('../models/Location');

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
          message: "New Location created successfully"
      }))
      .catch(err => res.status(400).json({
          "error": err,
          "message": "Error creating location."
      }))
})

module.exports = router;