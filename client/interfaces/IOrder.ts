import { IProduct } from './IProduct';

export interface IOrder {
    _id: string,
    name: string,
    surname: string,
    email: string,
    phone: string,
    city: string,
    zpAddress: string;
    delivery: string,
    postDepartment: string;
    payment: string,
    createdAt: Date,
    products: Array<IProduct>
}