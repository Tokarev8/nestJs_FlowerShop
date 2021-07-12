import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";

import {Basket, BasketDocument} from "./schemas/basket.schems";
import {Model} from "mongoose";

import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";

@Injectable()
export class BasketService {

    constructor(@InjectModel(Basket.name) private basketModel: Model<BasketDocument>) {
    }

    async getAll(): Promise<Basket[]> {
        return this.basketModel.find().exec()
    }

    async getById(id: string): Promise<Basket> {
        return this.basketModel.findById(id)
    }

    async create(favoritestDto:CreateProductDto): Promise<Basket> {
        const newProduct = new this.basketModel(favoritestDto)
        return newProduct.save()
    }

    async remove(id:string): Promise<Basket> {
        return this.basketModel.findByIdAndRemove(id)
    }

    async update(id:string, favoritestDto:UpdateProductDto): Promise<Basket> {
        return this.basketModel.findByIdAndUpdate(id, favoritestDto, {new: true})
    }



}