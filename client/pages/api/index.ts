import dbConnect from '../../utils/dbConnect';
import CategoryModel from '../../models/CategoryModel';
import PopularCategoryModel from '../../models/PopularCategoryModel';


dbConnect();

export default async (req: any, res: any) => {
    const popularCategory = await PopularCategoryModel.find({});
    const category = await CategoryModel.find({});
    return res.status(200).json({ success: true, popularCategory, category })
}