import $api from "../api/index"
import { ICategoryService } from "@/interfaces/category"

const CategoryService: ICategoryService = {
    getAll: async () => {
        const response = await $api.get("/api/category");
        return response.data
    },
    getSearchCategory: async () => {
        const response = await $api.get("/search-category");
        return response.data
    }
}

export default CategoryService;
