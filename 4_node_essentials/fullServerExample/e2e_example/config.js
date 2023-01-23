const Logger = require('./Logger');
const logger = new Logger();

module.exports = server => {
  const port = process.env.PORT || 8000;
  const start = () => server.listen(port, () => logger.log(`listening on port ${port}`));

  server.on('request', request => {
    logger.newRequest(request);
    request.on('error', logger.log);
  });

  server.on('error', logger.log);

  return { start };
};
