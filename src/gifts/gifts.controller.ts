import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import path from "path";
import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";
import {GiftsService} from "./gifts.service";
import {Gifts} from "./schemas/gifts.schema";

@Controller('gifts')
export class GiftsController {

    constructor(private readonly flowersService:GiftsService) {

    }

    @Get()
    getElements (): Promise<Gifts[]>{
        return this.flowersService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<Gifts>{
        return this.flowersService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() productInterface:CreateProductDto) : Promise<Gifts> {
        return this.flowersService.create(productInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<Gifts> {
        return this.flowersService.remove(id)
    }


    @Put(":id")
    update(@Body() updateBouquetDto: UpdateProductDto,
           @Param("id") id:string ): Promise<Gifts> {
        return this.flowersService.update(id,updateBouquetDto)

    }



}