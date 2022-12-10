const UsersRepository = require('../repositories/Users.repository');
const usersRepository = new UsersRepository();

exports.usersController = {
  async getUsers (req, res) {
    const result = {
      status: 200,
      message: '',
      data: await usersRepository.find()
    };
    res.status(result.status);
    res.json(result.message || result.data);
  },

  async getUser (req, res) {
    const { id } = req.params;
    const result = {
      status: 200,
      message: '',
      data: await usersRepository.retrieve(id)
    };
    res.status(result.status);
    res.json(result.message || result.data);
  },

  async createUser (req, res) {
    const { body: User } = req;
    const result = {
      status: 200,
      message: '',
      data: await usersRepository.create(User)
    };
    res.status(result.status);
    res.json(result.message || result.data);
  },

  async updateUser (req, res) {
    const { body: User, params: { id } } = req;
    const result = {
      status: 200,
      message: '',
      data: await usersRepository.update(id, User)
    };
    res.status(result.status);
    res.json(result.message || result.data);
  },
  async removeUser (req, res) {
    const { id } = req.params;
    const result = {
      status: 200,
      message: '',
      data: await usersRepository.delete(id)
    };
    res.status(result.status);
    res.json(result.message || result.data);
  }

};
