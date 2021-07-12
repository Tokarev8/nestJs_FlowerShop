import {productBasket} from "./create-order";

export interface updateOrdersDto {
    number: number;
    arrayProduct: productBasket[];
    time: number;
    total:number;
    buyerId: string;
    status: number;
}