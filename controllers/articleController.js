const Articles = require("../models/articles");

// Defining methods for the Controller
module.exports = {
  findAll: function(req, res) {
    Articles
      .find(req.query)
      .sort({ date: -1 })
      .then(articles => res.json(articles))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Articles
      .findById(req.params.id)
      .then(articles => res.json(articles))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Articles
      .create(req.body)
      .then(articles => res.json(articles))
      .catch(err => res.status(422).json(err));
  },

  //don't need but holding on to.
  update: function(req, res) {
    Articles
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(articles => res.json(articles))
      .catch(err => res.status(422).json(err));
  },
//   don't need but leaving for the boiler plate
  remove: function(req, res) {
    Articles
      .findById({ _id: req.params.id })
      .then(articles => articles.remove())
      .then(articles => res.json(articles))
      .catch(err => res.status(422).json(err));
  }
};
