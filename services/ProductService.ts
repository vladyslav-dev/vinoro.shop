import $api from "../api/index"
import { IProductService } from "@/interfaces/product"

const ProductService: IProductService = {
    getAll: async () => {
        const response = await $api.get("/api/products");
        return response.data;
    },
    getSearchProducts: async () => {
        const response = await $api.get("/api/search-products");
        return response.data;
    },
    getByCategoryId: async (categoryId) => {
        const response = await $api.get(`/api/category-products/${categoryId}`);
        return response.data
    },
    getOne: async (id) => {
        const response = await $api.get(`/api/product/${id}`);
        return response.data;
    }
}

export default ProductService;
