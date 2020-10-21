const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf } = format;
const { MAX_FILE, MAX_SIZE, FORMAT_DATE, FORMAT_JSON, FILE_PATH } = require('./config')

const Logger = createLogger({
  format: combine(
    timestamp({ format: FORMAT_DATE }),
    printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  ),
  transports: [
    new transports.File({
      filename: FILE_PATH,
      json: FORMAT_JSON,
      maxsize: MAX_SIZE,
      maxFiles: MAX_FILE,
    }),
    new transports.Console(),
  ]
});

module.exports = Logger;
