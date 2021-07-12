
import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import path from "path";
import {CreateProductDto} from "../dto/create-product";
import {UpdateProductDto} from "../dto/update-product";
import {CompositionsService} from "./compositions.service";
import {Compositions} from "./schemas/composition.schema";

@Controller('compositions')
export class CompositionsController {

    constructor(private readonly compositionService:CompositionsService) {

    }

    @Get()
    getElements (): Promise<Compositions[]>{
        return this.compositionService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<Compositions>{
        return this.compositionService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() productInterface:CreateProductDto) : Promise<Compositions> {
        return this.compositionService.create(productInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<Compositions> {
        return this.compositionService.remove(id)
    }


    @Put(":id")
    update(@Body() updateBouquetDto: UpdateProductDto,
           @Param("id") id:string ): Promise<Compositions> {
        return this.compositionService.update(id,updateBouquetDto)

    }



}
