import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import ProductModel from '@/models/ProductModel';
import CategoryModel from '@/models/CategoryModel';

dbConnect();

const api = async (req: NextApiRequest, res: NextApiResponse) => {

    try {

        const products = await ProductModel
            .find({ category: req.query.id })
            .sort([['availability', -1], ['order_id', 0]]);
        const { catalog } = await CategoryModel
            .findById(req.query.id).exec()
        const category = await CategoryModel
            .find({ catalog }).sort({ _id: 1 })

        return res.status(200).json({ success: true, products, category })
    } catch (err) {
        console.error(err)
    }

}

export default api;