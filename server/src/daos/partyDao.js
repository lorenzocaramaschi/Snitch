import { Party } from "../models/index.js";

const createParty = async (createPartyRequest) => {
  try {
    const createdParty = await Party.create(createPartyRequest);

    return createdParty;
  } catch (err) {
    console.log(err);
  }
};

const updateParty = async (id, updatePartyRequest) => {
  try {
    const updatedParty = await Party.updateOne({ _id: id }, updatePartyRequest);

    return updatedParty;
  } catch (err) {
    console.log(err);
  }
};

const deleteParty = async (id) => {
  try {
    const deletedParty = await Party.deleteOne({ _id: id });

    return deletedParty;
  } catch (err) {
    console.log(err);
  }
};

const findAllParties = async () => {
  try {
    const parties = await Party.find();

    return parties;
  } catch (err) {
    console.log(err);
  }
};

const findPartyById = async (id) => {
  try {
    const party = await Party.findById(id);

    return party;
  } catch (err) {
    console.log(err);
  }
};

const findPartyByFilter = async (filters) => {
  try {
    const party = await Party.findOne(filters);

    return party;
  } catch (err) {
    console.log(err);
  }
};

export const partyDao = {
  createParty,
  updateParty,
  deleteParty,
  findAllParties,
  findPartyById,
  findPartyByFilter,
};
