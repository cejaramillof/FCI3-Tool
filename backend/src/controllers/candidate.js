const CandidateModel = require('../models/candidate');

const add = async (request, response) => {
    const candidate = new CandidateModel(request.body);

    try {
        await candidate.save();
        response.status(201).send({ candidate });
    } catch (error) {
        response.status(400).send(error);
    }
};

const get = async (request, response) => {
    try {
        const candidates = await CandidateModel.find({});

        if (!candidates) {
            return response.status(404).send();
        }

        response.status(201).send({ candidates });
    } catch (error) {
        response.status(400).send(error);
    }
};

const update = async (request, response) => {
    const updates = Object.keys(request.body);

    if (!CandidateModel.isValidUpdate(updates)) {
        return response.status(400).send({
            error: 'Invalid Updates!'
        });
    }

    try {
        const candidate = await CandidateModel.findOne({ _id: request.params.id })

        if (!candidate) {
            throw new Error(null);
        }

        updates.forEach((update) => candidate[update] = request.body[update]);
        await candidate.save();

        response.status(200).send({ candidate });
    } catch (error) {
        response.status(404).send({
            error: 'Candidate not found!'
        });
    }
}

const remove = async (request, response) => {
    try {
        const candidate = await CandidateModel.findOneAndDelete({ _id: request.params.id });

        if (!candidate) {
            response.status(404).send()
        }

        response.status(200).send({ candidate });
    } catch (error) {
        response.status(404).send({
            error: 'Candidate not found!'
        });
    }
};

module.exports = {
    add,
    get,
    update,
    remove
};
