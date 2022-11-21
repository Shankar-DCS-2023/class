const Logger = require('./Logger');
const Path = require('path');
const dotenv = require('dotenv');
const logger = new Logger();

module.exports = server => {
  dotenv.config({ path: Path.join(__dirname, './.env') });
  const port = process.env.PORT || 8000;
  const start = () => server.listen(port, () => logger.log(`listening on port ${port}`));

  server.on('request', request => {
    logger.newRequest(request);
    request.on('error', err => logger.log(err));
  });

  server.on('error', err => logger.log(err));

  return { start };
};
