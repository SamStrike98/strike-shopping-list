import mongoose from 'mongoose';





const itemSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    quantity: {
        required: true,
        type: Number
    },
    regularItem: {
        required: true,
        type: Boolean
    },
    createdAt: {
        required: true,
        type: Date
    }

});

// Check if the model exists before defining it
const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

export default Item;