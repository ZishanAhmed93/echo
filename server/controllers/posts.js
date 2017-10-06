const express = require('express');
const models = require('../models');

const PostsController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.getAll);

    return router;
  },
  getAll(req, res) {
    models.Posts.findAll()
      .then(posts => {
        res.json({
          posts: posts
        });
      });
  },
};


module.exports = PostsController.registerRouter();
