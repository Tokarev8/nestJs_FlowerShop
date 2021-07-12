
import {Module} from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";

import {Popular, PopularSchema} from "./schemas/popular.schemas";
import {PopularService} from "./popular.service";
import {PopularController} from "./popular.controller";


@Module( {
    imports:[
        MongooseModule.forFeature([
            {name: Popular.name, schema: PopularSchema}
        ])
    ],
    providers:[PopularService],
    controllers: [PopularController]
})
export class PopularsModule {

}