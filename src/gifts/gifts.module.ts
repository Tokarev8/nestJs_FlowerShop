
import {Module} from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";

import {Gifts, GiftsSchema} from "./schemas/gifts.schema";
import {GiftsService} from "./gifts.service";
import {GiftsController} from "./gifts.controller";


@Module( {
    imports:[
        MongooseModule.forFeature([
            {name: Gifts.name, schema: GiftsSchema}
        ])
    ],
    providers:[GiftsService],
    controllers: [GiftsController]
})
export class GiftsModule {

}