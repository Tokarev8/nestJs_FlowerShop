import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import path from "path";
import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";
import {FavoritesService} from "./favorites.service";
import {Favorites} from "./schemas/favorites.schemas";

@Controller('favorites')
export class FavoritesController {

    constructor(private readonly favoritesService:FavoritesService) {

    }

    @Get()
    getElements (): Promise<Favorites[]>{
        return this.favoritesService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<Favorites>{
        return this.favoritesService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() productInterface:CreateProductDto) : Promise<Favorites> {
        return this.favoritesService.create(productInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<Favorites> {
        return this.favoritesService.remove(id)
    }


    @Put(":id")
    update(@Body() updateBouquetDto: UpdateProductDto,
           @Param("id") id:string ): Promise<Favorites> {
        return this.favoritesService.update(id,updateBouquetDto)

    }



}