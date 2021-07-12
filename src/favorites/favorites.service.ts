import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";

import {Favorites, FavoritessDocument} from "./schemas/favorites.schemas";
import {Model} from "mongoose";

import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";

@Injectable()
export class FavoritesService {

    constructor(@InjectModel(Favorites.name) private favoritesModel: Model<FavoritessDocument>) {
    }

    async getAll(): Promise<Favorites[]> {
        return this.favoritesModel.find().exec()
    }

    async getById(id: string): Promise<Favorites> {
        return this.favoritesModel.findById(id)
    }

    async create(favoritestDto:CreateProductDto): Promise<Favorites> {
        const newProduct = new this.favoritesModel(favoritestDto)
        return newProduct.save()
    }

    async remove(id:string): Promise<Favorites> {
        return this.favoritesModel.findByIdAndRemove(id)
    }

    async update(id:string, favoritestDto:UpdateProductDto): Promise<Favorites> {
        return this.favoritesModel.findByIdAndUpdate(id, favoritestDto, {new: true})
    }



}