import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    getHello( nombre: string ): any{
        return { hello: `Hello ${ nombre }` };
    }

    getQuery( start: number, end: number ){
        return { start, end }
    }
}
