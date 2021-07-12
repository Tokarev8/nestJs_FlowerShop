import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";


export type BasketDocument =  Basket & Document;


@Schema()
export class  Basket {

    @Prop()
    name: string;
    @Prop([String])
    image: string[];
    @Prop()
    price: number;
    @Prop()
    structure: string;
    @Prop()
    description: string;
    @Prop()
    categories: string;
    @Prop([String])
    flowers: string[];
    @Prop([String])
    reason: string[];
    @Prop()
    popularity: number;
    @Prop()
    favorite: boolean;
    @Prop()
    discount: number;
    @Prop()
    quantity: number;

}

export const  BasketSchema = SchemaFactory.createForClass( Basket)
