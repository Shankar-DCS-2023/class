const { EventEmitter } = require('events');
const fs = require('fs');
const Path = require('path');

module.exports = class JobsRepository extends EventEmitter {
  constructor () {
    super();
    this.connectToStorage();
  }

  connectToStorage () {
    const data = require('./data.json');
    this.setData(data);
    this.on('updateData', () => {
      fs.writeFile(Path.join(__dirname, './data.json'), JSON.stringify(this.data), 'utf8', err => {
        console.log(this.data);
        if (err) throw err;
        console.log('File has been saved!');
      });
    });
    return this;
  }

  setData (data) {
    this.data = data;
  }

  updateData (payload) {
    this.setData([...this.data, payload]);
    this.emit('updateData');
  }

  getAllJobs () {
    return this.data;
  }

  createNewJob (payload) {
    const newJob = {
      id: 123, // generate some random Id
      title: payload.title,
      description: payload.description,
      location: {
        city: payload.location.city,
        country: payload.location.country
      },
      company: payload.company,
      department: payload.department,
      name: payload.name
    };

    this.updateData(newJob);
  }
};
