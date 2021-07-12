import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";

import {Popular, PopularDocument} from "./schemas/popular.schemas";
import {Model} from "mongoose";

import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";

@Injectable()
export class PopularService {

    constructor(@InjectModel(Popular.name) private popularModel: Model<PopularDocument>) {
    }

    async getAll(): Promise<Popular[]> {
        return this.popularModel.find().exec()
    }

    async getById(id: string): Promise<Popular> {
        return this.popularModel.findById(id)
    }

    async create(popularDto:CreateProductDto): Promise<Popular> {
        const newProduct = new this.popularModel(popularDto)
        return newProduct.save()
    }

    async remove(id:string): Promise<Popular> {
        return this.popularModel.findByIdAndRemove(id)
    }

    async update(id:string, popularDto:UpdateProductDto): Promise<Popular> {
        return this.popularModel.findByIdAndUpdate(id, popularDto, {new: true})
    }



}
