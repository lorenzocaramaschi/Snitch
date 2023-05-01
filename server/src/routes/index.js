import { messageRouter } from "./message.route.js";
import { partyRouter } from "./party.route.js";
import { userRouter } from "./user.route.js";
import { Router } from "express";

const router = Router();

router.use("/messages", messageRouter);
router.use("/parties", partyRouter);
router.use("/users", userRouter);

export default router;
