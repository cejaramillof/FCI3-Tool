const mongoose = require('mongoose');

class Model extends mongoose.model {
    constructor(modelName, schema) {
        schema.init();
        super(modelName, schema);
    }
}

module.exports = Model;
