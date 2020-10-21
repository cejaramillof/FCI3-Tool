const app = require('./app');
const Logger = require('./utils/logger');

const port = process.env.PORT || 3001;

app.listen(port, () => Logger.info(`Server listening on port ${port}`));
