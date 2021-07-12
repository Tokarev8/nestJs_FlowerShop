import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';


import {UserService} from "./user.service";
import {User} from "./schemas/user.schemas";
import {CreateUserDto} from "./dto/create-user";
import {UpdateUserDto} from "./dto/update-user";

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService) {
    }

    @Get()
    getElements (): Promise<User[]>{
        return this.userService.getAll();
    }

    @Get(":id")
    gerElement (@Param('id') id): Promise<User>{
        return this.userService.getById(id);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() userInterface:CreateUserDto) : Promise<User> {
        return this.userService.create(userInterface);
    }


    @Delete(":id")
    remove(@Param("id") id:string) : Promise<User> {
        return this.userService.remove(id)
    }


    @Put(":id")
    update(@Body() updateUserDto: UpdateUserDto,
           @Param("id") id:string ): Promise<User> {
        return this.userService.update(id,updateUserDto)
    }



}