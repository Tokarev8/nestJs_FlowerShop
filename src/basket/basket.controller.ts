import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import path from "path";
import {CreateProductDto} from "./dto/create-product";
import {UpdateProductDto} from "./dto/update-product";
import {BasketService} from "./basket.service";
import {Basket} from "./schemas/basket.schems";

@Controller('basket')
export class BasketController {

    constructor(private readonly basketService:BasketService) {

    }

    @Get()
    getElements (): Promise<Basket[]>{
        return this.basketService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<Basket>{
        return this.basketService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() productInterface:CreateProductDto) : Promise<Basket> {
        return this.basketService.create(productInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<Basket> {
        return this.basketService.remove(id)
    }


    @Put(":id")
    update(@Body() updateBouquetDto: UpdateProductDto,
           @Param("id") id:string ): Promise<Basket> {
        return this.basketService.update(id,updateBouquetDto)

    }



}