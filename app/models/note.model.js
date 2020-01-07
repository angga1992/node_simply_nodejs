const mongoose = require('mongoose');

const influencer = mongoose.Schema({
    // user: Object,
    text: String
}, 
// {
//     timestamps: true
// }
);

module.exports = mongoose.model('Person', influencer, 'influencer');