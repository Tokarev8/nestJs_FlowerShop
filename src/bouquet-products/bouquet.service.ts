import {Injectable} from "@nestjs/common";
import {CreateBouquetDto} from "./dto/create-bouquet.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Bouquet, BouquetDocument} from "./schemas/bouquet.schemas";
import {Model} from "mongoose";
import {UpdateBouquetDto} from "./dto/update-bouquet.dto";

@Injectable()
export class BouquetService {

    constructor(@InjectModel(Bouquet.name) private bouquetModel: Model<BouquetDocument>) {
    }

    // private bouquets = []

   async getAll(): Promise<Bouquet[]> {
        return this.bouquetModel.find().exec()
    }

    async getById(id: string): Promise<Bouquet> {
        return this.bouquetModel.findById(id)
    }

    async create(bouquetDto:CreateBouquetDto): Promise<Bouquet> {
        const newProduct = new this.bouquetModel(bouquetDto)
        return newProduct.save()
    }

    async remove(id:string): Promise<Bouquet> {
        return this.bouquetModel.findByIdAndRemove(id)
    }

    async update(id:string, bouquetDto:UpdateBouquetDto): Promise<Bouquet> {
        return this.bouquetModel.findByIdAndUpdate(id, bouquetDto, {new: true})
    }



}