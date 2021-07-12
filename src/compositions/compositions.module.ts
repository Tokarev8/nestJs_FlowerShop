
import {Module} from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";

import {Compositions, CompositionSchema} from "./schemas/composition.schema";
import {CompositionsService} from "./compositions.service";
import {CompositionsController} from "./compositions.controller";


@Module( {
    imports:[
        MongooseModule.forFeature([
            {name: Compositions.name, schema: CompositionSchema}
        ])
    ],
    providers:[CompositionsService],
    controllers: [CompositionsController]
})
export class CompositionsModule {

}