import express from "express";
import { getEdit, postEdit, deleteVideo, watch, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);

export default videoRouter;
