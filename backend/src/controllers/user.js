const UserModel = require('../models/user');

const login = async (request, response) => {
    try {
        const { username, password } = request.body;
        const user = await UserModel.findByCredentials(username, password);
        const token = await user.generateAuthToken();

        response.send({ user, token });
    } catch (error) {
        response.status(400).send({ error: 'Wrong credentials or user does not exist.' });
    }
};

const add = async (request, response) => {
    const user = new UserModel(request.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        response.status(201).send({ user, token });
    } catch (error) {
        response.status(400).send(error);
    }
};

const getProfile = async (request, response) => {
    response.send(request.user);
};

const update = async (request, response) => {
    const updates = Object.keys(request.body);

    if (!UserModel.isValidUpdate(updates)) {
        return response.status(400).send({
            error: 'Invalid update!'
        });
    }

    try {
        updates.forEach((update) => user[update] = request.body[update]);
        await request.user.save();

        response.send(request.user);
    } catch (error) {
        response.status(500).send();
    }
};

const remove = async (request, response) => {
    try {
        await request.user.remove();

        response.send(request.user);
    } catch (error) {
        response.status(500).send();
    }
};

module.exports = {
    login,
    add,
    getProfile,
    update,
    remove
};
