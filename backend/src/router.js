const express = require('express');
const router = express.Router();

/**
 * Register the router
 */
const VideoController = require('./controllers/VideoController');
const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');
const CommentController = require('./controllers/CommentController');
const BadgeController = require('./controllers/BadgeController');
const AuthController = require('./controllers/AuthController');

module.exports = io => {
  const commentControllerWithIo = CommentController(io);

  router.post('/videos', VideoController.create);
  router.get('/videos', VideoController.getAll);
  router.get('/videos/:id', VideoController.getDetail);
  router.patch('/videos/:id', VideoController.update);
  router.delete('/videos/:id', VideoController.delete);

  router.post('/products', ProductController.create);
  router.get('/products', ProductController.getAll);
  router.get('/products/:id', ProductController.getDetail);
  router.patch('/products/:id', ProductController.update);
  router.delete('/products/:id', ProductController.delete);

  router.post('/users', UserController.create);
  router.get('/users', UserController.getAll);
  router.get('/users/:id', UserController.getDetail);
  router.patch('/users/:id', UserController.update);
  router.delete('/users/:id', UserController.delete);

  router.post('/comments', commentControllerWithIo.create);
  router.get('/comments', commentControllerWithIo.getAll);
  router.get('/comments/:id', commentControllerWithIo.getDetail);
  router.patch('/comments/:id', commentControllerWithIo.update);
  router.delete('/comments/:id', commentControllerWithIo.delete);

  router.post('/badges', BadgeController.create);
  router.get('/badges', BadgeController.getAll);
  router.get('/badges/:id', BadgeController.getDetail);
  router.patch('/badges/:id', BadgeController.update);
  router.delete('/badges/:id', BadgeController.delete);

  router.post('/signin', AuthController.signin);

  return router;
};
