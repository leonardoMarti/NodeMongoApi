const classroomModel = require('../database/models/classroom');

const createClassroom = async (params) => {
  const classroomData = new classroomModel(params);

  if (!classroomData.name || !classroomData.capacity) {
    return {
      response: 'To create a record it is necessary to inform all the fields',
      status: 406,
    };
  }

  const checkClassroom = await classroomModel.findOne(params);

  if (checkClassroom) {
    return {
      response: 'This classroom has already been registered in the database!',
      status: 400,
    };
  }

  const classroom = await classroomModel.create(classroomData);
  return { response: classroom, status: 200 };
};

const getClassroom = async (params) => {
  const findClassroom = await classroomModel.findOne(params);

  if (!findClassroom) {
    return {
      response: 'Classroom not found.',
      status: 404,
    };
  }

  return { response: findClassroom, status: 200 };
};

const updateClassroom = async (params) => {
  const { name, newName, newCapacity } = params;
  const findClassroom = await classroomModel.findOne({ name });

  if (!findClassroom) {
    return {
      response: 'Classroom not found.',
      status: 404,
    };
  }

  const filter = { name };
  const update = { name: newName, capacity: newCapacity };
  await classroomModel.findOneAndUpdate(filter, update);

  return { response: update, status: 200 };
};

module.exports = {
  createClassroom,
  getClassroom,
  updateClassroom,
};
