import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";

import {Promotions, PromotionsDocument} from "./schemas/promotions.schemas";
import {Model} from "mongoose";

import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";

@Injectable()
export class PromotionsService {

    constructor(@InjectModel(Promotions.name) private flowersModel: Model<PromotionsDocument>) {
    }

    async getAll(): Promise<Promotions[]> {
        return this.flowersModel.find().exec()
    }

    async getById(id: string): Promise<Promotions> {
        return this.flowersModel.findById(id)
    }

    async create(promotionsDto:CreateProductDto): Promise<Promotions> {
        const newProduct = new this.flowersModel(promotionsDto)
        return newProduct.save()
    }

    async remove(id:string): Promise<Promotions> {
        return this.flowersModel.findByIdAndRemove(id)
    }

    async update(id:string, promotionsDto:UpdateProductDto): Promise<Promotions> {
        return this.flowersModel.findByIdAndUpdate(id, promotionsDto, {new: true})
    }



}
