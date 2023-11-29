import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schema/Book';
import { Book } from './schema/Book';

@Module({
  imports : [MongooseModule.forFeature([{name : Book.name, schema: BookSchema}])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
