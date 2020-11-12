import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';


@ApiTags('Pruebas')
@Controller()
export class AppController {

  constructor( private readonly appService: AppService ) {}

  // Parámetros por la URL
  @Get('/saludo/:nombre')
  getHello( @Param('nombre') nombre: string ){
    return this.appService.getHello( nombre );
  }

  // Query
  @Get('/query')
  getQuery( @Query('start') start: number, @Query('end') end: number ){
    return this.appService.getQuery( start, end );
  }

  // Body
  @Post('/body')
  getBody( @Body('data') data ){
    return data;
  }
}
