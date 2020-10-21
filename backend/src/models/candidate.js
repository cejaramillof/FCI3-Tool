const validator = require('validator');
const { Model, Schema } = require('../interfaces/DBInterface');

const candidateSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    technology: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    }
}, {
    timestamps: true
});

candidateSchema.allowedUpdates = [
    'name', 'technology', 'location', 'email'
];

candidateSchema.setCustomMethod('toJSON', function () {
    const candidate = this;
    const candidateObject = candidate.toObject();

    return candidateObject;
});

const Candidate = new Model('Candidate', candidateSchema);

module.exports = Candidate;
