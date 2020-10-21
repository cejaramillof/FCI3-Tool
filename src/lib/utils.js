const util = {
    shuffleArray: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    sanitizeText: function (text) {
        return text.toLowerCase().replace(/\s/g, '');
    },

    capitalize: function (text) {
        return text.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase() );
    }
}

export default {
    capitalize: util.capitalize,
    shuffleArray: util.shuffleArray,
    sanitizeText: util.sanitizeText
}
