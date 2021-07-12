import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";

import {Flowers, FlowersDocument} from "./schemas/flower.schemas";
import {Model} from "mongoose";

import {CreateFlowersDto} from "./dto/create-flowers.dto";
import {UpdateFlowersDto} from "./dto/update-flowers.dto";

@Injectable()
export class FlowersService {

    constructor(@InjectModel(Flowers.name) private flowersModel: Model<FlowersDocument>) {
    }

    async getAll(): Promise<Flowers[]> {
        return this.flowersModel.find().exec()
    }

    async getById(id: string): Promise<Flowers> {
        return this.flowersModel.findById(id)
    }

    async create(flowerstDto:CreateFlowersDto): Promise<Flowers> {
        const newProduct = new this.flowersModel(flowerstDto)
        return newProduct.save()
    }

    async remove(id:string): Promise<Flowers> {
        return this.flowersModel.findByIdAndRemove(id)
    }

    async update(id:string, flowerstDto:UpdateFlowersDto): Promise<Flowers> {
        return this.flowersModel.findByIdAndUpdate(id, flowerstDto, {new: true})
    }



}


/*
import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";

 */