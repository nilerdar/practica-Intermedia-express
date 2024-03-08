const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const CommerceScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        cif: {
            type: String
        },
        address: {
            type: String
        },
        email: {
            type: String
        },
        contact: {
            type: String
        },
        siteId: {
            type: Number
        }
    },
    {
        timestamp: true, // TODO createdAt, updatedAt
        versionKey: false
    }
)

CommerceScheme.plugin(mongooseDelete, {overrideMethods: "all"})
module.exports = mongoose.model("commerces", CommerceScheme) 