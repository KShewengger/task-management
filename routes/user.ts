"use strict";

import {Router} from "express";

import { api } from "../controllers/user/index";

const router: Router = Router();


/**
 * @api {post} /
 * @description Add new user
 */
router.post("/", api.addUser);

/**
 * @api {put} /:userId
 * @description Update current user information
 *
 * @apiParam {Uuid} userId
 */
router.put("/", api.updateUser);

/**
 * @api {get} /:id
 * @description Get user by userId
 *
 * @apiParam {Uuid} userId
 */
router.get("/", api.getAllUsers);

/**
 * @api {get} /:id
 * @description Get user by userId
 *
 * @apiParam {Uuid} userId
 */
router.get("/:userId", api.getUser);

/**
 * @api {delete} /:userId
 * @description Delete user by userId
 *
 * @apiParam {Uuid} userId
 */
router.delete("/:userId", api.deleteUser);

/**
 * @api {get} /login
 * @description Passport Local Authentication
 */
router.post("/login", api.login);

/**
 * @api {get} /logout
 * @description Log Out User
 */
router.post("/logout", api.logout);


/**
 * @description Holds user controllers routes
 *
 * @type {Router} userRoutes
 */
export const userRoutes: Router = router;
