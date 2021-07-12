import {BouquetService} from "./bouquet.service";
import {Module} from "@nestjs/common";
import {BouquetProductsController} from "./bouquet-products.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Bouquet, BouquetSchema} from "./schemas/bouquet.schemas";


@Module( {
    imports:[
        MongooseModule.forFeature([
            {name: Bouquet.name, schema: BouquetSchema}
        ])
    ],
    providers:[BouquetService],
    controllers: [BouquetProductsController]
})
export class BouquetModule {
    
}