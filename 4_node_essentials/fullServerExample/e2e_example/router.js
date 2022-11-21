const { findAllJobs, findJobByName, errorHandler, findJobById, createNewJob, updateJob, renderHomePage } = require('./controllers');

const ROUTES = {
  GET: {
    '/': renderHomePage,
    '/jobs': findAllJobs,
    '/job/:name': findJobByName, // how to refer this key?
    '/job/:id': findJobById // how to refer this key?
  },
  POST: {
    '/job': createNewJob
  },
  PUT: {
    '/job/:id': updateJob // how to refer this key?
  }
};

module.exports = (req, res) => {
  const handler = ROUTES[req.method][req.url];
  if (!handler) {
    return errorHandler(req, res);
  }

  return handler(req, res);
};
