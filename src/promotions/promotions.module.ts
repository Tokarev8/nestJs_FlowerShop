
import {Module} from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";

import {Promotions, PromotionsSchema} from "./schemas/promotions.schemas";
import {PromotionsService} from "./promotions.service";
import {PromotionsController} from "./promotions.controller";


@Module( {
    imports:[
        MongooseModule.forFeature([
            {name: Promotions.name, schema: PromotionsSchema}
        ])
    ],
    providers:[PromotionsService],
    controllers: [PromotionsController]
})
export class PromotionsModule {

}