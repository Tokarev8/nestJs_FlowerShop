
import {Module} from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";

import {Flowers, FlowerstSchema} from "./schemas/flower.schemas";
import {FlowersService} from "./flowers.service";
import {FlowersController} from "./flowers.controller";


@Module( {
    imports:[
        MongooseModule.forFeature([
            {name: Flowers.name, schema: FlowerstSchema}
        ])
    ],
    providers:[FlowersService],
    controllers: [FlowersController]
})
export class FlowersModule {

}