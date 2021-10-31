import { IProduct } from './IProduct';

export interface IOrder {
    _id: string,
    name: string,
    surname: string,
    email: string,
    phone: string,
    city: string,
    delivery: string,
    payment: string,
    createdAt: Date,
    products: Array<IProduct>
}