import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductsModule } from './products/products.module'

const mongoURI = 'mongodb+srv://admin:admin@cluster0.12if0.mongodb.net/vinoro-2-0-database'

@Module({
  imports: [
    MongooseModule.forRoot(mongoURI),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
