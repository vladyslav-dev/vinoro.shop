import mongoose, { Schema } from 'mongoose';

const OrderModel = new Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    delivery: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "ProductModel"
        }
    ]
}, { collection: 'orders' })

export default mongoose.models.OrderModel || mongoose.model('OrderModel', OrderModel);