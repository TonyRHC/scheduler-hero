var express = require("express");
var router = express.Router();

var DateSelection = require("../models/DateSelection");

router.use(express.json());

router.get('/:id', function (req, res) {
    DateSelection.findOne({_id: req.params.id}, function(err, date) {
        res.send(date);
    });
});

router.get('/', function (req, res) {
    DateSelection.find({}, function(err, dates) {
        var datesArray = [];
        dates.forEach(function(user) {
            datesArray.push(user);
        });
        res.send(datesArray);
    });
});

router.post('/', function (req, res) {
    DateSelection.create(req.body, function (err, instance) {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        res.sendStatus(200);
    });
});

router.put('/', function (req, res) {
    DateSelection.updateOne({_id: req.body._id}, {$set:{dates: req.body.dates}}, function (err, instance) {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        res.sendStatus(200);
    });
});

router.delete('/:id', function(req, res) {
    DateSelection.deleteOne({_id: req.params.id}, function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        res.sendStatus(200);
    });
})

module.exports = router;