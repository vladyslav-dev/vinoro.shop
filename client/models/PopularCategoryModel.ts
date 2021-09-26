import mongoose, { Schema } from 'mongoose';

const PopularCategoryModel = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    brands: {
        type: Array,
        required: true,
    },
    categoryId: {
        type: Number,
        required: true,
    }
}, { collection: 'popularCategory' })

export default mongoose.models.PopularCategoryModel || mongoose.model('PopularCategoryModel', PopularCategoryModel);