import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import path from "path";
import {CreateFlowersDto} from "./dto/create-flowers.dto";
import {UpdateFlowersDto} from "./dto/update-flowers.dto";
import {FlowersService} from "./flowers.service";
import {Flowers} from "./schemas/flower.schemas";

@Controller('flowers')
export class FlowersController {

    constructor(private readonly flowersService:FlowersService) {

    }

    @Get()
    getElements (): Promise<Flowers[]>{
        return this.flowersService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<Flowers>{
        return this.flowersService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() productInterface:CreateFlowersDto) : Promise<Flowers> {
        return this.flowersService.create(productInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<Flowers> {
        return this.flowersService.remove(id)
    }


    @Put(":id")
    update(@Body() updateBouquetDto: UpdateFlowersDto,
           @Param("id") id:string ): Promise<Flowers> {
        return this.flowersService.update(id,updateBouquetDto)

    }



}
