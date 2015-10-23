'use strict';

var Movie = require("../models/movies");

module.exports = function(router){
    var model = new Movie();
    router.get('/', function (req, res) {
        Movie.find({}, function(err, movies){
        	if(err){
        		res.send(err);
        	} else {
        		var model = {
        			movies: movies
        		}

        		res.render('movies', model);
        	}
        });  
    });
};

    router.get('/add', function(req, res){
        res.render('addmovies');
    });

    router.get('/details/:id', function(req, res){
        Movie.findOne({_id: req.params.id}, function(err, movie){
            if(err){
                res.send(err);
            } else {
                var model = {
                    movie: movie
                }

                res.render('details', model);
            }
        });
    });

    router.get('/edit/:id', function(req, res){
        res.render('editmovies');
    });