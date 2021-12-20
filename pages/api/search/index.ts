import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import ProductModel from '@/models/ProductModel';

dbConnect();

const api = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const products = await ProductModel
            .find({ "name":  { $options: 'i', $regex : req.body.searchQuery }})
            .sort([['availability', -1], ['name', 0]]);
        return res.status(200).json({ success: true, products })
    } catch (err) {
        console.error(err)
    }

}

export default api;