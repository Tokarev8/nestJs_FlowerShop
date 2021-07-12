import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";


export type BouquetDocument = Bouquet & Document;


@Schema()
export class Bouquet {



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

}

export const BouquetSchema = SchemaFactory.createForClass(Bouquet)


/*
  @Prop()
    categories: string;
 */


type tag = {
    categories: string;
    flowers: string[];
    reason: string[];
}