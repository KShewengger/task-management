"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const express_1 = require("express");
const api = require("../api/project/project");
const router = express_1.Router();
/**
 * @api {post} /user/:userId
 * @description Add new project by userId.
 *
 * @apiParam {Uuid} userId
 */
router.post("/user/:userId", api.addProjectByUserId);
/**
 * @api {put} /:id
 * @description Update Project by projectId
 *
 * @apiParam {Uuid} id
 */
router.put("/:id", api.updateProject);
/**
 * @api {get} /:id
 * @description Get project by projectId
 */
router.get("/:id", api.getProjectById);
/**
 * @api {get} /user/:userId
 * @description Get projects by userId
 */
router.get("/user/:userId", api.getProjectsByUserId);
/**
 * @api {get} /:id
 * @description Delete Project by projectId
 *
 * @apiParam {Uuid} id
 */
router.delete("/:id", api.deleteProject);
/**
 * @description Holds project api routes
 *
 * @type {Router} userRoutes
 */
exports.projectRoutes = router;
//# sourceMappingURL=project.js.map