var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

//get list of names
router.get('/', function (req, res, next) {
    const { items } = Item.find({});
    console.log(items);
    const { name } = req.query;
    if (name==items.title) {
        items.filter((item) => {
            return item.title.startsWith(name);
        })
    }
});
   
module.exports = router;
