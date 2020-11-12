import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { NewsService } from './news.service';

@ApiTags('News API')
@Controller()
export class NewsController {

    constructor( private readonly newsService: NewsService ){}

    @ApiQuery({
        name: 'category',
        required: false,
    })
    @Get('/news/top-headlines')
    async obtenerTopHeadlines( @Query('country') country: string, @Query('category') category: string ){
        const news = await this.newsService.getTopHeadlines( country, category );
        return news;
    }

    @ApiQuery({
        name: 'from',
        required: false,
    })
    @ApiQuery({
        name: 'to',
        required: false,
    })
    @Get('/news/everything')
    async obtenerEverything( @Query('q') q: string, @Query('from') from: string, @Query('to') to: string ){
        const news = await this.newsService.getEverything( q, from, to );
        return news;
    }

    @ApiQuery({
        name: 'language',
        required: false,
    })
    @ApiQuery({
        name: 'country',
        required: false,
    })
    @Get('news/sources')
    async obtenerSources( @Query('language') language: string, @Query('country') country: string ){
        const sources = await this.newsService.getSources( language, country );
        return sources;
    }
}