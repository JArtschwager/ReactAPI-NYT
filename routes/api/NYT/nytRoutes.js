//hits NYT api and axios .get

const router = require("express").Router();
const axios = require("axios");
require("dotenv").config()

//matches with api/nyt
router
    .route("/")
    .get(function(req, res) {
        axios
        .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.nytAPI}`, {params: req.query})
        .then(function (articleData) {
            res.json(articleData.data)
        })
        .catch(function(err) {
            console.log(err);
            res.json(err);
        })
    })

    module.exports = router;

   

