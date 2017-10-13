const express = require('express');
const models = require('../models');

const EchosController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.get);                            // get all echos
    router.get('/:id', this.getById);                     // get a echo
    router.post('/', this.create);                        // create a echo
    router.post('/:id/comments', this.createComment);     // create a comment
    router.delete('/comments/:id', this.deleteComment);   // delete a comment
    router.put('/comments/:id', this.updateComment);      // update a comment

    return router;
  },
  get(req, res) {
    models.Echos.findAll({include: [{model: models.Comments}]})
      .then(echos => {
        res.json(echos);
      });
  },
  getById(req, res) {
    models.Echos.findById(parseInt(req.params.id), {include: [{model: models.Comments}]} )
      .then(echo => {
        res.json(echo);
      });
  },
  create(req, res) { 
    // This create a new poll but doesn't have the choices
    models.Echos.create({
      subject: req.body.subject
    })
    .then(echo => {
      res.json(echo);
    })
    .catch(err => {
      res.sendStatus(400);
    });
  },
  createComment(req, res) {
    models.Echos.findById(parseInt(req.params.id))
      .then(echo => {
        models.Comments.create({
          body: req.body.body,
          EchoId: echo.id
        }).then(comment => res.json(comment));
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  deleteComment(req, res) {
    models.Comments.destroy({
      where: {id: req.params.id}
    })
    .then(comment => {
      res.sendStatus(200) // OK status
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400); // Bad request
    })
  },
  updateComment(req, res) {
    const newData = {
      body: req.body.body
    };
    models.Comments.update(newData, {where: {id: req.params.id}})
      .then(comment => {
        res.sendStatus(200); // OK status
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);  // Bad request
      });
  }
};

module.exports = EchosController.registerRouter();
