import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";


import {Model} from "mongoose";


import {Orders, OrdersDocument} from "./schemas/orders.shemas";
import {updateOrdersDto} from "./dto/update-order";
import {createOrdersDto} from "./dto/create-order";

@Injectable()
export class OrdersService {

    constructor(@InjectModel(Orders.name) private ordersModel: Model<OrdersDocument>) {
    }

    async getAll(): Promise<Orders[]> {
        return this.ordersModel.find().exec()
    }

    async getById(id: string): Promise<Orders> {
        return this.ordersModel.findById(id)
    }

    async create(ordersDto:createOrdersDto): Promise<Orders> {
        const newProduct = new this.ordersModel(ordersDto)
        return newProduct.save()
    }

    async remove(id:string): Promise<Orders> {
        return this.ordersModel.findByIdAndRemove(id)
    }

    async update(id:string, ordersDto:updateOrdersDto): Promise<Orders> {
        return this.ordersModel.findByIdAndUpdate(id, ordersDto, {new: true})
    }



}
