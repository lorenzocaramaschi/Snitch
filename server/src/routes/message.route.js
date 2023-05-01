import { Router } from "express";
import { messageController } from "../controllers/index.js";

const router = Router();

router
  .route("/")
  .get(messageController.findAllMessages)
  .post(messageController.createMessage);

router
  .route("/:id")
  .get(messageController.findMessageById)
  .delete(messageController.deleteMessage)
  .patch(messageController.updateMessage);

export const messageRouter = router;
