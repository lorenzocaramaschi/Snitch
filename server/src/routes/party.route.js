import { Router } from "express";
import { partyController } from "../controllers/index.js";

const router = Router();

router
  .route("/")
  .get(partyController.findAllParties)
  .post(partyController.createParty);

router
  .route("/:id")
  .get(partyController.findPartyById)
  .delete(partyController.deleteParty)
  .patch(partyController.updateParty);

export const partyRouter = router;
