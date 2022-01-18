const translatte = require('translatte');
import { IProduct } from '@/interfaces/IProduct';

type Lang = "uk" | "en"; 

const translateData = async (data: string, lang: Lang) => {
    const res = await translatte(data, {from: "ru", to: lang});
    return res?.text;
}

export const translateProduct = (product: IProduct, lang: Lang) => {
    const name = new Promise((resolve, reject) => {
        try {
            const n = translateData(product.name, lang);
            resolve(n)
        } catch (err) {
            reject(err)
        }
    })

    const description = new Promise((resolve, reject) => {
        try {
            const d = translateData(product.description, lang);
            resolve(d)
        } catch (err) {
            reject(err)
        }
    })

    return Promise.all([name, description]).then((data) => {
        const [translatedName, translatedDescription] = data;
        return {
            _id: product._id,
            category: product.category,
            order_id: product.order_id,
            cost: product.cost,
            image: product.image,
            availability: product.availability,
            name: translatedName,
            description: translatedDescription,
        }
    })
}