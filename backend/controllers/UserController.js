import User from '../models/UserModel.js';

export const getAllUser = async (req, res) => {
  try {
    const result = await User.findAll();
    res.status(200).json(result);
    // res.send('Hello world');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const result = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const saveNewUser = await User.create(req.body);
    res.status(200).json(saveNewUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const update = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ status: 'updated', result: update });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const destroyUser = async (req, res) => {
  try {
    const deleteUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ status: 'updated', result: deleteUser });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
