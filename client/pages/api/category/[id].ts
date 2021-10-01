import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import ProductModel from '../../../models/ProductModel';


dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("Category API worked")
    console.log(req.query.id)
    try {
        const products = await ProductModel
            .find({ category: req.query.id })
            .sort([['availability', -1], ['order_id', 0]]);
        return res.status(200).json({ success: true, products })
    } catch (err) {
        console.error(err)
    }

}