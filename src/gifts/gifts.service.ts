import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";

import {Gifts, GiftsDocument} from "./schemas/gifts.schema";
import {Model} from "mongoose";

import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";

@Injectable()
export class GiftsService {

    constructor(@InjectModel(Gifts.name) private flowersModel: Model<GiftsDocument>) {
    }

    async getAll(): Promise<Gifts[]> {
        return this.flowersModel.find().exec()
    }

    async getById(id: string): Promise<Gifts> {
        return this.flowersModel.findById(id)
    }

    async create(flowerstDto:CreateProductDto): Promise<Gifts> {
        const newProduct = new this.flowersModel(flowerstDto)
        return newProduct.save()
    }

    async remove(id:string): Promise<Gifts> {
        return this.flowersModel.findByIdAndRemove(id)
    }

    async update(id:string, flowerstDto:UpdateProductDto): Promise<Gifts> {
        return this.flowersModel.findByIdAndUpdate(id, flowerstDto, {new: true})
    }



}