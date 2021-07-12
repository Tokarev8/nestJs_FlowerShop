

import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";


export type OrdersDocument = Orders & Document;



@Schema()
export class Orders {

    @Prop()
    number: number;
    @Prop()
    time: number;
    @Prop()
    total:number;
    @Prop()
    buyerId: string;
    @Prop({
        type:[{ category:{type: String}, idProduct:{type: String}, quantity:{type: Number} }]
    })
    arrayProduct: {category: string, idProduct: string, quantity: number}[];
    @Prop ()
    status: number;


}



export const OrdersSchema = SchemaFactory.createForClass(Orders);

