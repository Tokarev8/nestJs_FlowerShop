import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BouquetModule} from "./bouquet-products/bouquet.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FlowersModule} from "./flowers/flowers.module";
import {CompositionsModule} from "./compositions/compositions.module";
import {GiftsModule} from "./gifts/gifts.module";
import {PromotionsModule} from "./promotions/promotions.module";
import {FavoritesModule} from "./favorites/favorites.module";
import {BasketModule} from "./basket/basket.module";
import {PopularsModule} from "./popular/popular.module";
import {UserModule} from "./user/user.module";
import {OrderModule} from "./orders/order.module";

@Module({
  imports: [
      BouquetModule,
      FlowersModule,
      CompositionsModule,
      GiftsModule,
      PromotionsModule,
      FavoritesModule,
      BasketModule,
      PopularsModule,
      UserModule,
      OrderModule,
      MongooseModule.forRoot(`mongodb+srv://Aleksey:Aleksey123456789@cluster0.vprvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
