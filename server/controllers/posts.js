const express = require('express');
const models = require('../models');

const PostsController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.get);                            // get all posts
    router.get('/:id', this.getById);                     // get a post
    router.post('/', this.create);                        // create a post
    router.post('/:id/comments', this.createComment);     // create a comment
    router.delete('/comments/:id', this.deleteComment);   // delete a comment
    router.put('/comments/:id', this.updateComment);      // update a comment

    return router;
  },
  get(req, res) {
    models.Posts.findAll({include: [{model: models.Posts}]})
      .then(posts => {
        res.json(posts);
      });
  },
  getById(req, res) {
    models.Posts.findById(parseInt(req.params.id), {include: [{model: models.Comments}]} )
      .then(post => {
        res.json(post);
      });
  },
  create(req, res) { 
    // This create a new poll but doesn't have the choices
    models.Posts.create({
      subject: req.body.subject
    })
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.sendStatus(400);
    });
  },
  createComment(req, res) {
    models.Posts.findById(parseInt(req.params.id))
      .then(post => {
        models.Comments.create({
          body: req.body.body,
          PostId: post.id
        }).then(comment => res.json(comment));
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  deleteComment(req, res) {
    models.Comments.destroy({
      where: {id: req.body.id}
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
    models.Comments.update(newData, {where: {id: req.body.id}})
      .then(comment => {
        res.sendStatus(200); // OK status
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);  // Bad request
      });
  }
};

module.exports = PostsController.registerRouter();
