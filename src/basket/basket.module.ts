
import {Module} from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";

import {Basket, BasketSchema} from "./schemas/basket.schems";
import {BasketService} from "./basket.service";
import {BasketController} from "./basket.controller";


@Module( {
    imports:[
        MongooseModule.forFeature([
            {name: Basket.name, schema: BasketSchema}
        ])
    ],
    providers:[BasketService],
    controllers: [BasketController]
})
export class BasketModule {

}