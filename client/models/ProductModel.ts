import mongoose, { Schema } from 'mongoose';
import CategoryModel from './PopularCategoryModel';

const ProductModel = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
    category: {
        type: String,
        ref: 'CategoryModel'
    },
    order_id: {
        type: Number,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    cost: {
        type: Number,
    },
    image: {
        type: String,
    },
    availability: {
        type: Boolean,
    },

}, {
    collection: 'products'
})

export default mongoose.models.ProductModel || mongoose.model('ProductModel', ProductModel);