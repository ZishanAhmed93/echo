const express = require('express');
const models = require('../models');

const EchosController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.get);                            // get all echos
    router.get('/:id', this.getById);                     // get a echo
    router.post('/', this.create);                        // create a echo
    router.get('/:id/comments', this.getComment);         // get all comments
    router.post('/:id/comments', this.createComment);     // create a comment
    router.delete('/comments/:id', this.deleteComment);   // delete a comment
    router.put('/comments/:id', this.updateComment);      // update a comment

    return router;
  },
  get(req, res) {
    // models.Echos.findAll({include: [{model: models.Comments}]})
    //   .then(echos => {
    //     res.json(echos);
    //   });
    models.Echos.findAll()
      .then(echos => {
        res.json(echos);
      });
  },
  getById(req, res) {
    // models.Echos.findById(parseInt(req.params.id), {include: [{model: models.Comments}]} )
    //   .then(echo => {
    //     res.json(echo);
    //   });
    models.Echos.findById(parseInt(req.params.id))
      .then(echo => {
        res.json(echo);
      });
  },
  create(req, res) { 
    models.Echos.create(
      {
        UserId: req.body.userId,
        subject: req.body.subject,
      },
      {
        include: [models.Users]
      }
    )
    .then(echo => {
      res.json(echo);
    })
    .catch(err => {
      res.sendStatus(400);
    });
  },
  getComment(req, res) {
    models.Comments.findAll({where: {EchoId: req.params.id}})
      .then(echos => {
        res.json(echos);
      });
  },
  createComment(req, res) {
    models.Echos.findById(parseInt(req.params.id))
      .then(echo => {
        models.Comments.create({
          reflection: req.body.reflection,
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
      reflection: req.body.reflection
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
