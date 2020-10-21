const mongoose = require('mongoose');

class Schema extends mongoose.Schema {
    constructor(schema) {
        super(schema);
    }

    setCustomMethod(methodName, callback) {
        this.methods[methodName] = callback;
    }

    setStaticMethod(methodName, callback) {
        this.statics[methodName] = callback;
    }

    beforeSave(callback) {
        this.pre('save', callback);
    }

    init() {
        this.setStaticMethod('isValidUpdate', this.isValidUpdate.bind(this));
    }

    isValidUpdate(fieldsToUpdate) {
        return fieldsToUpdate.every((update) => (this.allowedUpdates.includes(update)));
    }
}

module.exports = Schema;
