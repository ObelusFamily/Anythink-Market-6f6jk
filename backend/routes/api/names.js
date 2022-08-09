var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

//get list of names
router.get('/', function (req, res, next) {
    Item.find().distinct('title').then(function (names) {
        return res.json(names);
    }).catch(next);
});
module.exports = router;
