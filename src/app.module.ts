import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
    
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".local.env"]
  }),
    
    BookModule,
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
