
import {Module} from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";

import {Favorites, FavoritesSchema} from "./schemas/favorites.schemas";
import {FavoritesService} from "./favorites.service";
import {FavoritesController} from "./favorites.controller";


@Module( {
    imports:[
        MongooseModule.forFeature([
            {name: Favorites.name, schema: FavoritesSchema}
        ])
    ],
    providers:[FavoritesService],
    controllers: [FavoritesController]
})
export class FavoritesModule {

}