import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import ProductModel from '@/models/ProductModel';
import CategoryModel from '@/models/CategoryModel';
// import { translateArrayOfProducts } from '@/utils/translatte';

dbConnect();

const api = async (req: NextApiRequest, res: NextApiResponse) => {

    try {

        const { id, lang } = req?.query;

        const categoryModel = await CategoryModel
            .findById(id).exec()

        if (categoryModel) {
            const category = await CategoryModel
                .find({ catalog: categoryModel.catalog }).sort({ _id: 1 })

            const products = await ProductModel
                .find({ category: id })
                .sort([['availability', -1], ['order_id', 0]]);

         

            // const r = translateArrayOfProducts(products, "uk")
            // console.log(r)
            return res.status(200).json({ products, category });
            // switch(lang) {
            //     case "uk-UA": return translateArrayOfProducts(product, "uk")
            //                     .then(p => res.status(200).json({ product: p, category: {category_name, _id} }))
            //     case "en-US": return translateProduct(product, "en")
            //                     .then(p => res.status(200).json({ product: p, category: {category_name, _id} }))
            //     default: return res.status(200).json({ product, category: {category_name, _id}})
            // }

        } else {
            return res.status(200).json({ products: null, category: null });
        }

    } catch (err) {
        console.error(err)
    }

}

export default api;