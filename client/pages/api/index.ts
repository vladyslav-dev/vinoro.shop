import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import CategoryModel from '@/models/CategoryModel';
import PopularCategoryModel from '@/models/PopularCategoryModel';


dbConnect();

const api = async (req: NextApiRequest, res: NextApiResponse) => {

    const popularCategory = await PopularCategoryModel.find({});
    const category = await CategoryModel.find({}).sort({ "category_id": 1 });


    return res.status(200).json({ success: true, popularCategory, category })

}

export default api