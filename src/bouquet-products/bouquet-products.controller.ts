import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import path from "path";
import {CreateBouquetDto} from "./dto/create-bouquet.dto";
import {UpdateBouquetDto} from "./dto/update-bouquet.dto";
import {BouquetService} from "./bouquet.service";
import {Bouquet} from "./schemas/bouquet.schemas";

@Controller('bouquets')
export class BouquetProductsController {

    constructor(private readonly bouquetService:BouquetService) {

    }

    @Get()
    getElements (): Promise<Bouquet[]>{
        return this.bouquetService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<Bouquet>{
        return this.bouquetService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() productInterface:CreateBouquetDto) : Promise<Bouquet> {
        return this.bouquetService.create(productInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<Bouquet> {
        return this.bouquetService.remove(id)
    }


    @Put(":id")
    update(@Body() updateBouquetDto: UpdateBouquetDto,
           @Param("id") id:string ): Promise<Bouquet> {
        return this.bouquetService.update(id,updateBouquetDto)

    }



}
