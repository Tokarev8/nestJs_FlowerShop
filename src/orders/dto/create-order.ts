
export interface productBasket {
    category: string;
    idProduct: string;
    quantity: number;
}

export interface createOrdersDto {
    number: number;
    arrayProduct: productBasket[];
    time: number;
    total:number;
    buyerId: string;
    status: number;

}