const Events = require('../../models/Event');

// All the resolvers
const userResolver = require('./userResolver');
const eventResolver = require('./eventResolver');
const bookingResolver = require('./bookingResolver');
const artistResolver = require('./artistResolver');
const refundResolver = require('./refundResolver');
const organizationResolver = require('./organizationResolver');

module.exports = {
    ...userResolver,
    ...eventResolver,
    ...bookingResolver,
    ...artistResolver,
    ...refundResolver,
    ...organizationResolver,
};
