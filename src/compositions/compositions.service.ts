import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";

import {Compositions, CompositionDocument} from "./schemas/composition.schema";
import {Model} from "mongoose";

import {CreateProductDto} from "../dto/create-product"
import {UpdateProductDto} from "../dto/update-product";

@Injectable()
export class CompositionsService {

    constructor(@InjectModel(Compositions.name) private flowersModel: Model<CompositionDocument>) {
    }

    async getAll(): Promise<Compositions[]> {
        return this.flowersModel.find().exec()
    }

    async getById(id: string): Promise<Compositions> {
        return this.flowersModel.findById(id)
    }

    async create(flowerstDto:CreateProductDto): Promise<Compositions> {
        const newProduct = new this.flowersModel(flowerstDto)
        return newProduct.save()
    }

    async remove(id:string): Promise<Compositions> {
        return this.flowersModel.findByIdAndRemove(id)
    }

    async update(id:string, flowerstDto:UpdateProductDto): Promise<Compositions> {
        return this.flowersModel.findByIdAndUpdate(id, flowerstDto, {new: true})
    }

}