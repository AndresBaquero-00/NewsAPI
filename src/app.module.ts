import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './modules/news/news.module';


@Module({
  imports: [HttpModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
