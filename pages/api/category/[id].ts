import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import ProductModel from '@/models/ProductModel';
import CategoryModel from '@/models/CategoryModel';

dbConnect();

const api = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const categoryModel = await CategoryModel
            .findById(req.query.id).exec()

        if (categoryModel) {
            const category = await CategoryModel
                .find({ catalog: categoryModel.catalog }).sort({ _id: 1 })

            const products = await ProductModel
                .find({ category: req.query.id })
                .sort([['availability', -1], ['order_id', 0]]);

            return res.status(200).json({ success: true, products, category });
        } else {
            return res.status(200).json({ success: false, products: null, category: null });
        }

    } catch (err) {
        console.error(err)
    }

}

export default api;