import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
    SN: {
        type: Number,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now  // Automatically sets the current date when a group is created
    }
});

const Group = mongoose.model('Group', groupSchema);

export default Group;
