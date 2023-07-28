const express = require("express");
const router = express.Router();

const VideoController = require("./controllers/VideoController");
const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");
const CommentController = require("./controllers/CommentController");

/**
 * Register the router
 */
router.post("/videos", VideoController.create);
router.get("/videos", VideoController.getAll);
router.get("/videos/:id", VideoController.getDetail);
router.patch("/videos/:id", VideoController.update);
router.delete("/videos/:id", VideoController.delete);

router.post("/products", ProductController.create);
router.get("/products", ProductController.getAll);
router.get("/products/:id", ProductController.getDetail);
router.patch("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);

router.post("/users", UserController.create);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getDetail);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

router.post("/comments", CommentController.create);
router.get("/comments", CommentController.getAll);
router.get("/comments/:id", CommentController.getDetail);
router.patch("/comments/:id", CommentController.update);
router.delete("/comments/:id", CommentController.delete);

module.exports = router;
