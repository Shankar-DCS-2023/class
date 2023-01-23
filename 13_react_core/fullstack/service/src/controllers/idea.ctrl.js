const Idea = require('../models/idea');

const controller = {
  retrieve: async (req, res) => {
    try {
      const docs = await Idea.findById({ id: res.params.id });

      console.log(docs);

      return res.json(docs);
    } catch (err) {
      return console.log(`query error: ${err}`);
    }
  },
  create: async (req, res) => {
    try {
      const docs = await Idea.create(res.body);

      console.log(docs);

      return res.json(docs);
    } catch (err) {
      return console.log(`query error: ${err}`);
    }
  },
  update: async (req, res) => {
    try {
      const docs = await Idea.updateOne(res.params.id, {});

      console.log(docs);

      return res.json(docs);
    } catch (err) {
      return console.log(`query error: ${err}`);
    }
  },
  list: async (req, res) => {
    try {
      const docs = await Idea.find(res.body);

      console.log(docs);

      return res.json(docs);
    } catch (err) {
      return console.log(`query error: ${err}`);
    }
  },

  delete: async (req, res) => {
    try {
      const docs = await Idea.deleteOne(res.body);

      console.log(docs);

      return res.json(docs);
    } catch (err) {
      return console.log(`query error: ${err}`);
    }
  }
};
module.exports = controller;
