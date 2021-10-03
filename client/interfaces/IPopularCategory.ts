export interface IPopularCategory {
    _id: string;
    title: string;
    description: string;
    imageURL: string;
    brands: Array<string>;
    categoryId: string;
};