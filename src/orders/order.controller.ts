


import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';





import {updateOrdersDto} from "./dto/update-order";
import {Orders} from "./schemas/orders.shemas";
import {OrdersService} from "./order.service";
import {createOrdersDto} from "./dto/create-order";

@Controller('orders')
export class OrderController {

    constructor(private readonly orderService:OrdersService) {
    }

    @Get()
    getElements (): Promise<Orders[]>{
        return this.orderService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<Orders>{
        return this.orderService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() userInterface:createOrdersDto) : Promise<Orders> {
        return this.orderService.create(userInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<Orders> {
        return this.orderService.remove(id)
    }


    @Put(":id")
    update(@Body() updateUserDto: updateOrdersDto,
           @Param("id") id:string ): Promise<Orders> {
        return this.orderService.update(id,updateUserDto)
    }



}