


import {Module} from "@nestjs/common";

import {MongooseModule} from "@nestjs/mongoose";

import {Orders, OrdersSchema} from "./schemas/orders.shemas";
import {OrdersService} from "./order.service";
import {OrderController} from "./order.controller";


@Module( {
    imports:[
        MongooseModule.forFeature([
            {name: Orders.name, schema: OrdersSchema}
        ])
    ],
    providers:[OrdersService],
    controllers: [OrderController]
})
export class OrderModule {

}