import mongoose, { Schema } from 'mongoose';

const CategoryModel = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
    category_id: {
        type: Number,
        unique: true,
        required: true,
    },
    category_name: {
        type: String,
        required: true,
    },
    category_src: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    catalog: {
        type: Number,
        required: true,
    }
}, { collection: 'categories' })

export default mongoose.models.CategoryModel || mongoose.model('CategoryModel', CategoryModel);