import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import CategoryModel from '@/models/CategoryModel';



dbConnect();

let index = 0;

const api = async (req: NextApiRequest, res: NextApiResponse) => {

    const category = await CategoryModel.find({}).sort({ "category_id": 1 });

    console.log("Calling get category data ", index)
    index += 1
    return res.status(200).json({ category })

}

export default api