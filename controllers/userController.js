const userModel = require('../database/models/user');

const createUser = async (params) => {
  const userData = new userModel(params);

  if (!userData.name || !userData.surname) {
    return {
      response: 'To create a record it is necessary to inform all the fields',
      status: 406,
    };
  }

  const checkUser = await userModel.findOne(params);

  if (checkUser) {
    return {
      response: 'This user has already been registered in the database!',
      status: 400,
    };
  }

  const user = await userModel.create(userData);
  return { response: user, status: 200 };
};

const getUsers = async (params) => {
  const findUser = await userModel.find(params);

  if (!findUser.length) {
    return {
      response: 'User not found.',
      status: 404,
    };
  }

  return { response: findUser, status: 200 };
};

const DeleteUser = async (params) => {
  const findUser = await userModel.findOne(params);

  if (!findUser) {
    return {
      response: 'User not found.',
      status: 404,
    };
  }

  await userModel.deleteOne(params);
  return { response: findUser, status: 200 };
};

const findAll = async () => {
  const findUser = await userModel.find();

  return { response: findUser, status: 200 };
};

module.exports = {
  createUser,
  getUsers,
  DeleteUser,
  findAll,
};
