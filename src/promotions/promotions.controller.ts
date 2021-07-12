import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';

import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";
import {PromotionsService} from "./promotions.service";
import {Promotions} from "./schemas/promotions.schemas";

@Controller('promotions')
export class PromotionsController {

    constructor(private readonly promotionsService:PromotionsService) {

    }

    @Get()
    getElements (): Promise<Promotions[]>{
        return this.promotionsService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<Promotions>{
        return this.promotionsService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() productInterface:CreateProductDto) : Promise<Promotions> {
        return this.promotionsService.create(productInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<Promotions> {
        return this.promotionsService.remove(id)
    }


    @Put(":id")
    update(@Body() updateBouquetDto: UpdateProductDto,
           @Param("id") id:string ): Promise<Promotions> {
        return this.promotionsService.update(id,updateBouquetDto)

    }



}