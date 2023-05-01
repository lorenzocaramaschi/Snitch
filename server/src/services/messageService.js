import { messageDao } from "../daos/index.js";

const createMessage = async (createMessageRequest) => {
  try {
    const { user, body } = createMessageRequest;

    const createdMessage = await messageDao.createMessage(createMessageRequest);

    return createdMessage;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const updateMessage = async (updateMessageRequest, id) => {
  try {
    const existingMessage = await messageDao.findMessageById(id);

    if (!existingMessage) {
      throw {
        message: "The message you want to update does not exist",
        status: 400,
      };
    }

    const updatedMessage = await messageDao.updateMessage(
      id,
      updateMessageRequest
    );

    return updatedMessage;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const deleteMessage = async (id) => {
  try {
    const existingMessage = messageDao.findMessageById(id);

    if (!existingMessage) {
      throw {
        message: "The message you want to delete does not exist",
        status: 400,
      };
    }

    const deletedMessage = await bookDao.deleteMessage(id);

    return deletedMessage;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findAllMessages = async () => {
  try {
    const messages = await messageDao.findAllMessagees();

    return messages;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

const findMessageById = async (id) => {
  try {
    const message = await messageDao.findMessageById(id);

    if (!message) {
      throw {
        message: "The message you want to create already exists",
        status: 404,
      };
    }

    return message;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const messageService = {
  createMessage,
  updateMessage,
  deleteMessage,
  findAllMessages,
  findMessageById,
};
