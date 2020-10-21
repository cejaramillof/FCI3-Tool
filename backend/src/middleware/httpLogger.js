const morgan = require('morgan');
const Logger = require('../utils/logger');

Logger.stream = {
  write: message => Logger.info(message.substring(0, message.lastIndexOf('\n')))
};

module.exports = morgan(
  ':method :url :status :response-time ms - :res[content-length]',
  { stream: Logger.stream }
);
