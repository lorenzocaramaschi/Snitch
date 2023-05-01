import { partyDao } from "../daos/index.js";

const createParty = async (createPartyRequest) => {
  try {
    const { creator, members } = createPartyRequest;

    const createdParty = await partyDao.createParty(createPartyRequest);

    return createdParty;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateParty = async (updatePartyRequest, id) => {
  try {
    const existingParty = await partyDao.findPartyById(id);

    if (!existingParty) {
      throw {
        party: "The party you want to update does not exist",
        status: 400,
      };
    }

    const updatedParty = await partyDao.updateParty(id, updatePartyRequest);

    return updatedParty;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteParty = async (id) => {
  try {
    const existingParty = partyDao.findPartyById(id);

    if (!existingParty) {
      throw {
        party: "The party you want to delete does not exist",
        status: 400,
      };
    }

    const deletedParty = await partyDao.deleteParty(id);

    return deletedParty;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllParties = async () => {
  try {
    const parties = await partyDao.findAllParties();

    return parties;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findPartyById = async (id) => {
  try {
    const party = await partyDao.findPartyById(id);

    if (!party) {
      throw {
        party: "The party you want to create already exists",
        status: 404,
      };
    }

    return party;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const partyService = {
  createParty,
  updateParty,
  deleteParty,
  findAllParties,
  findPartyById,
};
