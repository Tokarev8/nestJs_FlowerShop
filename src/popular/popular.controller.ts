import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';

import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";
import {PopularService} from "./popular.service";
import {Popular} from "./schemas/popular.schemas";

@Controller('popular')
export class PopularController {

    constructor(private readonly popularService:PopularService) {

    }

    @Get()
    getElements (): Promise<Popular[]>{
        return this.popularService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<Popular>{
        return this.popularService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() productInterface:CreateProductDto) : Promise<Popular> {
        return this.popularService.create(productInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<Popular> {
        return this.popularService.remove(id)
    }


    @Put(":id")
    update(@Body() updateBouquetDto: UpdateProductDto,
           @Param("id") id:string ): Promise<Popular> {
        return this.popularService.update(id,updateBouquetDto)

    }



}