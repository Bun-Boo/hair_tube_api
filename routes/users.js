import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  sub,
  unsub,
  update,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update
router.put("/:id", verifyToken, update);

//delete
router.delete("/:id", verifyToken, deleteUser);

//get
router.get("/find/:id", getUser);

//sub
router.put("sub/:id", verifyToken, sub);

//unsub
router.put("unsub/:id", verifyToken, unsub);

//like
router.put("like/:videoId", verifyToken, like);

//dislike
router.put("dislike/:videoId", verifyToken, dislike);

export default router;
