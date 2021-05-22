const UserController = require('../controllers/userController');
const ClassroomController = require('../controllers/classroomController');

module.exports = (app) => {
  app.get('/', async (req, res) => {
    res.status(200).json({ response: 'Welcome' });
  });

  app.post('/user', async (req, res) => {
    const { status, response } = await UserController.createUser(req.body);

    res.status(status).json({ response });
  });

  app.get('/user', async (req, res) => {
    const { status, response } = await UserController.getUsers(req.query);

    res.status(status).json({ response });
  });

  app.delete('/user', async (req, res) => {
    const { status, response } = await UserController.DeleteUser(req.query);

    res.status(status).json({ response });
  });

  app.post('/classroom', async (req, res) => {
    const { status, response } = await ClassroomController.createClassroom(
      req.body
    );

    res.status(status).json({ response });
  });

  app.get('/classroom', async (req, res) => {
    const { status, response } = await ClassroomController.getClassroom(
      req.query
    );

    res.status(status).json({ response });
  });

  app.put('/classroom', async (req, res) => {
    const { status, response } = await ClassroomController.updateClassroom(
      req.query
    );

    res.status(status).json({ response });
  });
};
