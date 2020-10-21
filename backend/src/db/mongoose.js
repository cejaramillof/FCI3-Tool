const mongoose = require('mongoose');

const options = {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const init = () => {
    mongoose.connect(`${process.env.MONGODB_URL}`, options);
};

module.exports = {
    init
};