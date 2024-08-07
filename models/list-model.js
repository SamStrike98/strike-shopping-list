import mongoose from 'mongoose';


const listSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    data: {
        required: true,
        type: String
    },
    createdAt: {
        required: true,
        type: Date
    }

});

// Check if the model exists before defining it
const List = mongoose.models.List || mongoose.model('List', listSchema);

export default List;