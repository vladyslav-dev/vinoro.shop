import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import ProductModel from '@/models/ProductModel';
import { translateProduct } from '@/utils/translatte';

dbConnect();

const api = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id, lang } = req?.query;
             
        const product = await ProductModel.findById(id);

        switch(lang) {
            case "uk-UA": return translateProduct(product, "uk")
                            .then(p => res.status(200).json({ product: p }))
            case "en-US": return translateProduct(product, "en")
                            .then(p => res.status(200).json({ product: p }))
            default: return res.status(200).json({ product })
        }
    } catch (err) {
        throw new Error(err)
        
    }
}

export default api;