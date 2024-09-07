const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
})
const hostModel = mongoose.model('Host', hostSchema);

module.exports = hostModel;
