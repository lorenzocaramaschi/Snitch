import { partyService } from "../services/index.js";

const createParty = async (req, res, next) => {
  try {
    const response = await partyService.createParty(req.body);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const updateParty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await partyService.updateParty(req.body, id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const deleteParty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await partyService.deleteParty(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findAllParties = async (req, res, next) => {
  try {
    const response = await partyService.findAllParties();

    res.json(response);
  } catch (err) {
    next(err);
  }
};

const findPartyById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await partyService.findPartyById(id);

    res.json(response);
  } catch (err) {
    next(err);
  }
};

export const partyController = {
  createParty,
  updateParty,
  deleteParty,
  findAllParties,
  findPartyById,
};
