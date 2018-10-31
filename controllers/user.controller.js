'use strict';

const db = require('../config/db.config.js');
const Burger = db.burger;


var path = require('path');

exports.test = (req, res) => {
    // res.send("Express..");
    res.render('index.html');
}

exports.save = (req, res) => {
    Burger.create({
        	item_name: req.body.item_name,
        	item_id: req.body.item_id
    })
    .then(response=>{res.send(response)});
};

exports.update = (req, res) => {
    const id = req.params.item_id;
    Burger.update({ devouted: "1" },
        { where: { item_id: id } })
        .then(() => { res.status(200).send("updated successfully") });
}