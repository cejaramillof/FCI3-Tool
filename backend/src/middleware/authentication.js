const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const authentication = async (request, response, next) => {
    try {
        const token = request.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error('');
        }

        request.token = token;
        request.user = user;

        next();
    } catch (error) {
        response.status(401).send({ error: 'Please log in first.' });
    }
};

module.exports = authentication;
