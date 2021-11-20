import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import ProductModel from '@/models/ProductModel';

// dbConnect();

const api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const product = await ProductModel.findById(req.query.id)
        return res.status(200).json({ success: true, product })
    } catch (err) {
        console.error(err)
    }

}

export default api;