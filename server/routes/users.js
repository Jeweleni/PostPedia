const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth.middleware");

const {
    getUser,
    getAllUsers,
    updateUser,
} = require("../controllers/users.js");


router
    .get("/users", authMiddleware,  getAllUsers)
    .put("/users/:slug", authMiddleware, updateUser)
    .get("/users/:slug", authMiddleware, getUser);
    

module.exports = router;
