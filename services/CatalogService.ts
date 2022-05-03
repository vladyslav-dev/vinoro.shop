import $api from "../api/index"
import { ICatalogService } from "@/interfaces/catalog"

const CatalogService: ICatalogService = {
    getAll: async () => {
        const response = await $api.get("/api/catalog");
        return response.data;
    }
}

export default CatalogService;
