const { Schema, model } = require('mongoose');

const exchangeSchema = new Schema(
    {
        roomName: {
            type: String,
            required: true,
        },

        passphrase: {
            type: String,
            required: true,
        },
        // TODO: Can this have a property with a list of all users?
        // I dare say so!!
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],

    }
)

const Exchange = model('Exchange', exchangeSchema);

module.exports = Exchange;