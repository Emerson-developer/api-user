import {Body, Controller, Delete, Get, Param, Post, Res} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UserLogin} from "./dto/user-login";
import {Response} from "express";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.userService.findOne(+id);
    // }

    @Get(':name')
    findByName(@Param('name') name: string) {
        return this.userService.findByName(name);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(+id);
    }

}
