import { Injectable, HttpService } from '@nestjs/common';
import { Response } from '../../interfaces/response.interface';
import { Sources } from '../../interfaces/sources.interface';

@Injectable()
export class NewsService {

    url = 'http://newsapi.org/v2/';
    apiKey = '25ac0238d8bf4f58a648cbb1df6b43e5';

    constructor( private http: HttpService ){}

    getTopHeadlines( country: string, category: string ){
        if( category ){
            return this.ejecutarQuery<Response>(`top-headlines?country=${ country }&category=${ category }`);
        }else{
            return this.ejecutarQuery<Response>(`top-headlines?country=${ country }`);
        }
    }

    getEverything( q: string, from: string, to: string ){
        if( from && to ){
            return this.ejecutarQuery<Response>(`everything?q=${ q }&from=${ from }&to=${ to }`);
        }else if( !from && !to ){
            return this.ejecutarQuery<Response>(`everything?q=${ q }`);
        }else if( !from && to ){
            return this.ejecutarQuery<Response>(`everything?q=${ q }&to=${ to }`);
        }else{
            return this.ejecutarQuery<Response>(`everything?q=${ q }&from=${ from }`);
        }
    }

    getSources( language: string, country: string  ){
        if( language && country ){
            return this.ejecutarQuery<Sources>(`sources?language=${ language }&country=${ country }`);
        }else if( language && !country ){
            return this.ejecutarQuery<Sources>(`sources?language=${ language }`);
        }else if( country && !language ){
            return this.ejecutarQuery<Sources>(`sources?country=${ country }`);
        }else{
            return this.ejecutarQuery<Sources>(`sources?`);
        }
    }

    private ejecutarQuery<T>( query: string ): Promise<T>{
        return new Promise( resolve =>  {
            this.http.get(`${ this.url }${ query }&apiKey=${ this.apiKey }`)
            .subscribe( data =>  {
                resolve( data.data );
            });
        });
    }
}