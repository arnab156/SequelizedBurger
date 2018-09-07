var express = require("express");

var router = express.Router();

var db = require("../models");

router.put("/api/burgers/:id");
router.delete("/api/burgers/:id");


router.post("/api/burgers", function(req, res){
console.log(req.body);
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(data){
console.log(data);
return res.redirect("/");
    })
});




router.get("/", function(req,res){
    db.Burger.findAll({ 
        include: [db.Customer], 
        order : ["burger_name", "ASC"]
    })
    .then(function(data){
        var hbsobject = {
            burgers: data
        };
        return res.render("index", hbsobject);
    });
});




module.exports=router;

